# API de pagamentos Waves

Se você quiser fazer alguém pagar com WAVES ou qualquer outro token Waves, use nossa API de pagamentos.

## Processo

1. Você precisa configurar um botão em seu site que acione uma criação de um URL e um redirecionamento para ele.
2. Um usuário decide comprar algo e o usuário pressiona esse botão.
3. Depois disso, o usuário é redirecionado para o Cliente Waves com uma janela de parâmetros de pagamento.
4. O usuário modifica esses parâmetros, se possível, e envia o formulário.
5. Se tudo estiver bem, o usuário é redirecionado de volta ao referenciador.
6. O referenciador é fornecido com o ID da transação, que pode ser verificado se estiver no blockchain.

Se o usuário interromper o processo, ele permanecerá na página do Cliente Waves.

## Detalhes

[**Aqui**](https://demo.wavesplatform.com/payment-api) Você pode encontrar o projeto de demonstração que mostra como usar a Payment API para doações. A API de pagamento que permite criar um link especial para evitar a entrada de seed dos usuários em sites de terceiros.

### Pedido

Exemplo: `https://dex.wavesplatform.com/#send/WAVES?recipient=your-alias&amount=1&referrer=https://example.com&strict`.

Caminho basico `https://dex.wavesplatform.com/#send/{assetId}`. Depois, há os parâmetros.

#### ID do recurso

`/#send/8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS` — o ID do recurso necessário para o pagamento. obrigatório. O único parâmetro de caminho aqui.

#### Destinatário

`?recipient=3PCAB4sHXgvtu5NPoen6EXR5yaNbvsEA8Fj` — o endereço \(ou um alias\) para enviar os tokens. obrigatório

#### Quantidade

`?amount=10.5` — a quantidade de tokens a pagar. obrigatório

#### Referenciador

`?referrer=https://example.com/waves-payment` — o URL do seu serviço. Deve ser apenas HTTPS. obrigatório.

#### Modo estrito

`?strict` — se esse sinalizador estiver definido, o usuário não poderá alterar os dados no formulário.

### Resposta

Exemplo: `https://example.com/waves-payment?txId=D1USZfZPzVd2XNH9xj52Z81XhxChpwUKDJpQHz2haXRT`.

O ID da transação de pagamento do usuário estará na consulta.

#### ID de transação

`?txId=D1USZfZPzVd2XNH9xj52Z81XhxChpwUKDJpQHz2haXRT` — o ID da transação bem-sucedida do usuário.

