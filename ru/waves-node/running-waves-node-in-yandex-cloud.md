# Запуск Waves Node в Яндекс.Облаке

1.&nbsp;В [консоли](https://console.cloud.yandex.ru/) Яндекс.Облака перейдите в нужную группу ресурсов.

<img src="img/resource-group.png" width="700"/> <br>

2.&nbsp;В правом верхнем углу экрана нажмите **Создать ресурс**. Выберите **Виртуальная машина**.

<img src="img/create-resource.png" width="250"/> <br>

3.&nbsp;Зайдите в **Каталог образов**.

<img src="img/catalog.png" width="700"/> <br>

4.&nbsp;Введите **Waves Node** в строке поиска. Выберите образ Waves Node.

<img src="img/search-bar.png" width="550"/> <br>

5.&nbsp;Задайте параметры виртуальной машины. Минимальные аппаратные требования для запуска ноды смотрите на странице [Требования к аппаратному обеспечению](/waves-node/prerequisites/hardware-requirements.md).

<img src="img/virtual-machine-parameters.png" width="600"/> <br>

6.&nbsp;[Сгенерируйте](https://cloud.yandex.ru/docs/compute/operations/vm-connect/ssh#creating-ssh-keys) пару SSH-ключей. Введите открытый ключ пары в поле **SSH-ключ**. Завершите создание виртуальной машины, нажав **Создать ВМ**.

<img src="img/create-vm.png" width="600"/> <br>

7.&nbsp;Убедитесь, что виртуальная машина запущена, [подключившись](https://cloud.yandex.ru/docs/compute/operations/vm-connect/ssh#vm-connect) к ней по SSH. IP-адрес машины скопируйте из панели управления Яндекс.Облака.

``` console
ssh <имя_пользователя>@<ip_адрес_виртуальной_машины>
```

8.&nbsp;В браузере перейдите на страницу http:&#47;&#47;&lt;ip&#95;адрес&#95;виртуальной&#95;машины&gt;:8080 для запуска докер-контейнера с [Waves Node](https://github.com/wavesplatform/Waves).

<img src="img/docker-container.png" width="600"/> <br>

9.&nbsp;Задайте необходимые настройки. По окончании нажмите **Run my node!**. Запустится докер-контейнер с параметрами, которые вы указали.

10.&nbsp;Убедитесь, что контейнер запущен, выполнив в консоли виртуальной машины команду [docker ps](https://docs.docker.com/engine/reference/commandline/ps/).

``` console
sudo docker ps
```
