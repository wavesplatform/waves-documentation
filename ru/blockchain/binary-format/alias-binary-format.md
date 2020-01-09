# Бинарный формат псевдонима

> Узнать больше о [псевдониме](/blockchain/account/alias.md)

| Порядковый номер поля | Поле | Тип поля | Размер поля в байтах | Комментарии |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Тип сущности | Байт | 1 | Значение должно равняться 2 |
| 2 | [Байт сети](/blockchain/blockchain-network/chain-id.md) | Байт | 1 | Значение равно:<br>84 — для [тестовой сети](/blockchain/blockchain-network/test-network.md)<br>87 — для [основной сети](/blockchain/blockchain-network/main-network.md)<br>83 — для [экспериментальной сети](/blockchain/blockchain-network/stage-network.md) |
| 3 | Число символов в псевдониме | Короткое целое | 2 | |
| 4 | Псевдоним | Массив байтов		 | От 4 до 30 включительно | | |
