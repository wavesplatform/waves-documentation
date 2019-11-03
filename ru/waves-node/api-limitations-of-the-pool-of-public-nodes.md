# Ограничения API пула публичных нод

**Пул публичных нод** — это множество публичных [нод](/blockchain/node.md), предоставляющих через REST API [https://nodes.wavesnodes.com](https://nodes.wavesnodes.com/) информацию для наших продуктов (кошелек Waves, DEX и др.). Вы можете пользоваться нашими публичными нодами для получения информации из блокчейна, но мы рекомендуем вам использовать собственные ноды, т.к. на нашем пуле есть ограничения, которые приводятся в таблице ниже.

> [!NOTE]
> * Перед каждой публичной нодой в пуле находится [веб-сервер Nginx](https://www.nginx.com/), который ограничивает количество соединений и количество запросов в секунду, которые клиент может отправлять ноде.
* В таблице ниже в названиях путей используются регулярные выражения, такие, например, как "[\d+](https://stackoverflow.com/questions/2841550/what-does-d-mean-in-regular-expression-terms)".
* Ниже **burst** — это настройка в Nginx, которая определяет максимальный размер "всплеска" запросов. Если скорость поступления запросов превышает заданное значение, то избыточные запросы становятся в очередь на обработку. Размер очереди — это и есть величина burst. Если число избыточных запросов начинает превышать величину burst, то новые избыточные запросы в очередь на обработку не становятся, а завершаются с ошибкой. Подробнее в [документации](http://nginx.org/ru/docs/http/ngx_http_limit_req_module.html).

| Путь | Макс. кол-во одновременных соединений с Nginx-сервером с одного IP-адреса \(при превышении лимита клиенту вернется HTTP Status 503\) | Макс. кол-во запросов в секунду к Nginx-серверу с одного IP-адреса |
| --- | :---: | :---: |
| / | 15 | 20 (burst 50) |
| /blocks/seq/\d+/\d+ | 1 | 1 |
| /blocks/at/.+ | 1 | 1 |
|/blocks/last<br/>/scorex/version<br/>/scorex/status<br/>/consensus/algo<br/>/consensus/basetarget<br/>/waves/address<br/>/transactions/address/.+/limit/.+<br/>/addresses/validate/.+<br/>/blocks/signature/.+<br/>/blocks/delay/.+/.+<br/>/consensus/generatingbalance/.+<br/>/waves/external-payment<br/>/peers/connected<br/>/peers/all<br/>/node/version<br/>/node/status<br/>/addresses/effectiveBalance/.+<br/>/assets/broadcast/issue<br/>/assets/broadcast/reissue<br/>/assets/broadcast/transfer<br/>/waves/broadcast-signed-payment.+<br/>/waves/external-payment<br/>/waves/broadcast-signed-payment<br/>/leasing/broadcast/lease<br/>/leasing/broadcast/cancel<br/>/alias/.+<br/>/assets/broadcast/burn | 100| 20 (burst 50) |
| /transactions/info/.+ | 15 | 20 (burst 50) |
| /blocks/height\|/transactions/unconfirmed | 15 | 20 (burst 50) |
| /addresses/balance/.+|/assets/balance/.+ | 15 | 100 (burst 50) |
