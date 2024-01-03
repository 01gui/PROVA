/** Você está desenvolvendo uma aplicação web para exibir informações sobre diferentes 
tipos de frutas. No lado do cliente, você quer permitir que os usuários cliquem em um 
botão para solicitar informações sobre uma fruta específica. No lado do servidor, um 
aplicativo Node.js com Express deve atender a essas solicitações e enviar de volta os 
detalhes da fruta solicitada.

Parte 1: Cliente (Fetch API)
Crie um arquivo HTML que contenha um botão "Obter Informações da Fruta". Quando 
este botão for clicado, use a Fetch API em um arquivo JavaScript vinculado para enviar 
uma solicitação GET ao servidor solicitando informações sobre uma fruta específica (por 
exemplo, "Maçã").

Instruções:
1. Crie um arquivo HTML com um botão "Obter Informações da Fruta".
2. Escreva um script JavaScript que adicione um 'event listener' para o clique do botão.
3. No 'event listener', use a Fetch API para enviar uma requisição GET ao servidor 
solicitando informações sobre uma fruta específica.
4. Trate a resposta do servidor e exiba os detalhes da fruta no cliente.
Parte 2: Servidor (Node.js e Express)
Crie um servidor simples usando Node.js e Express que possa aceitar requisições GET 
para informações sobre frutas. Quando informações sobre uma fruta específica são 
solicitadas, o servidor deve responder com os detalhes dessa fruta.

Instruções:
1. Configure um novo projeto Node.js e instale o Express.
2. Crie um servidor Express que escute em uma porta local (por exemplo, 3000).
3. Adicione um manipulador de rota para requisições GET que possa retornar 
informações sobre uma fruta específica.
4. Quando informações sobre uma fruta são solicitadas, responda com detalhes (por 
exemplo, nome, cor e preço).*/

