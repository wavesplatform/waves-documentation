# Waves API de autenticação

Se você quer autorizar um usuário em seu serviço por meio de sua conta Waves, aqui está a solução. Em geral, você deve redirecionar o usuário para o Cliente oficial Waves \([https://dex.wavesplatform.com/] (https://beta.wavesplatform.com/) - a ser alterado posteriormente \) com determinados parâmetros de consulta incluindo alguns dados arbitrários para ele assinar.

Isso pode ser necessário nos casos em que você precisa trabalhar com dados pessoais do usuário e ter certeza de que uma determinada conta blockchain pertence a esse usuário.

## Processo

1. Você adiciona a ferramenta de autenticação waves ao seu site.
2. Um usuário se depara com seu site e deseja fazer login usando sua conta do Waves.
3. Ele clica no botão da ferramenta e é redirecionado para o cliente oficia Waves, junto com alguns dados aleatórios da ferramenta.
4. Lá, o usuário escolhe se efetuar login ou cancelar essa cadeia de ações.
5. Se ele prosseguir, os dados serão assinados com a chave privada do usuário.
6. Em seguida, o usuário é redirecionado de volta ao seu site, juntamente com a assinatura e a chave pública do usuário.
7. Você verifica a validade da assinatura em relação aos dados fornecidos para esse usuário.
8. Se tudo estiver correto, o usuário agora está autenticado em seu serviço.

Se o usuário interromper o processo, ele permanecerá na página do cliente Waves.

## Detalhes

Devido às limitações de comprimento da string de consulta, todos os parâmetros são expressos com um caracter.

[**Aqui**](https://demo.wavesplatform.com) Você pode encontrar o projeto de demonstração que mostra como usar a API Web de autenticação.

### Pedido

Exemplo: `https://dex.wavesplatform.com#gateway/auth?r=https://example.com&n=Example&d=0123456789&i=/img/logo.png&success=/wavesAuth`.

A URL basica e `https://dex.wavesplatform.com#gateway/auth`. Então os parâmetros de consulta vão.

#### Referencia

`?r=https://example.com` — a URL do seu serviço. Deve Conter HTTPS. Obrigatório.

#### Nome

`?n=Service%20Name` — o nome do seu serviço. Obrigatório.

#### Data

`?d=randomChars` — os dados que são assinados pela chave privada do usuário \(Obrigatório\).

#### Caminho do ícone

`?i=/path/to/the/icon.png` — um caminho relativo ao parâmetro Referenciador. Ele hospeda o logotipo do seu aplicativo. \(Opcional\).

#### Caminho do sucesso

`?s=/path/to/an/API/method` — um caminho para o método que redireciona o usuário enquanto a assinatura é bem-sucedida. Por padrão, o usuário é redirecionado para a raiz do referenciador \(Opcional\).

#### Modo de depuração

`?debug=true` — um sinalizador para exibir mensagens de erro \(Opcional\).

### Resposta

Exemplo: `https://example.com/wavesAuth?d=0123456789&s=CvWfUUEkhVtaPzCMm4sB8iEJ6XwuMdcx4bhsCJAq3e8yhP7j64UD3aLyn9fFSK454o427raRmSn6a9FkaJpvXrc&p=2M25DqL2W4rGFLCFadgATboS8EPqyWAN3DjH12AH5Kdr&a=3PCAB4sHXgvtu5NPoen6EXR5yaNbvsEA8Fj`.

#### Data

`?d=randomChars` — os mesmos dados que são passados junto com o usuário redirecionado.

#### Assinatura

`?s=base58EncodedSignature` — uma assinatura dos dados que é assinada pela chave privada do usuário.

#### Chave pública

`?p=base58EncodedPublicKey` — chave pública do usuário.

#### Endereço

`?a=base58EncodedAddress` — endereço Waves do usuário.

### Como verificar a validade da assinatura

Você pode usar o método `Waves.crypto.isValidTransactionSignature()` método de [@waves/waves-api](https://www.npmjs.com/package/@waves/waves-api) npm package.

A assinatura é obtida dos dados na seguinte ordem: uma string `WavesWalletAuthentication`, depois uma string com seu valor de parâmetro de host e, em seguida, uma string com seu valor de parâmetro de dados.

