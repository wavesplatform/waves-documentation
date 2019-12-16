# Комиссия за транзакцию

**Комиссия за транзакцию** — комиссия, которую владелец [аккаунта](/blockchain/account.md) платит за отправку [транзакции](/blockchain/transaction.md).

Отправитель может указать любой размер комиссии, но не меньше определенного минимального значения. Чем больше размер комиссии, тем быстрее транзакция попадет в новый [блок](/blockchain/block.md).

> Если [смарт-аккаунт](/blockchain/account/smart-account.md) отправляет [смарт-ассет](/blockchain/token/smart-asset.md), то комиссия удваивается.
<br>Если транзакция валидируется [скриптом аккаунта](/ride/script/script-types/account-script.md) или [скриптом ассета](/ride/script/script-types/asset-script.md), то комиссия увеличивается на 0,004 WAVES


| Тип транзакции | ID типа транзакции | Минимальный размер комиссии в WAVES | Комментарии |
| :--- | :--- | :--- | :--- |
| [Транзакция вызова скрипта](/blockchain/transaction-type/invoke-script-transaction.md) | 16 | 0,005 + `B`<br> + 0,004 × `C`<br> + 0,004 × `D` + `K` | Если транзакция вызова скрипта отправляется со [смарт-аккаунта](/blockchain/account/smart-account.md), то `B` = 0,004, в ином случае `B` = 0.<br>К транзакции вызова скрипта может быть приложено до двух платежей. `C` представляет количество различающихся [смарт-ассетов](/ru/blockchain/token/smart-asset.md) в этих платежах.<br>Транзакция вызова скрипта может инициировать перевод, довыпуск или сжигание одного или нескольких ассетов. `D` представляет собой количество смарт-ассетов среди этих операций.<br>Транзакция вызова скрипта может инициировать выпуск ассета. `K` представляет собой количество выпущенных ассетов, не являющихся [не взаимозаменяемыми токенами](/blockchain/token/non-fungible-token.md) |
| [Транзакция выпуска](/blockchain/transaction-type/issue-transaction.md) | 3 | 1 за обычный токен <br>0,001 за [не взаимозаменяемый токен](/blockchain/token/non-fungible-token.md) | |
| [Транзакция данных](/blockchain/transaction-type/data-transaction.md) | 12 | 0,001 за килобайт | |
| [Транзакция довыпуска](/blockchain/transaction-type/reissue-transaction.md) | 5 | 0,001 | |
| [Транзакция закрытия лизинга](/blockchain/transaction-type/lease-cancel-transaction.md) | 9 | 0,001 | |
| [Транзакция лизинга](/blockchain/transaction-type/lease-transaction.md) | 8 | 0,001 | |
| [Транзакция массовой отправки](/blockchain/transaction-type/mass-transfer-transaction.md) | 11 | 0,001 + 0,0005 × `N` | `N` — количество переводов внутри транзакции |
| [Транзакция обмена](/blockchain/transaction-type/exchange-transaction.md) | 7 | 0,003 | |
| [Транзакция перевода](/blockchain/transaction-type/transfer-transaction.md) | 4 | 0,001 | |
| [Транзакция сжигания токена](/blockchain/transaction-type/burn-transaction.md) | 6 | 0,001 | |
| [Транзакция создания псевдонима](/blockchain/transaction-type/alias-transaction.md) | 10 | 0,001 | |
| Транзакция спонсирования | 14 | 1 | |
| [Транзакция установки скрипта](/blockchain/transaction-type/set-script-transaction.md) | 13 | 0,01 | |
| [Транзакция установки скрипта ассета](/blockchain/transaction-type/set-asset-script-transaction.md) | 15 | 1 | | |
