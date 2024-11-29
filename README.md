### Projeto Fynn

Este é um projeto construído utilizando o framework Nest.js, projetado para criar aplicações server-side escaláveis e de alto desempenho.

Pré-requisitos
Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/pt)
- [pnpm](https://pnpm.io/pt/installation)
- [Docker](https://www.docker.com)

## Inicialização

Clone o repositório:

```
git clone fynn-api
cd fynn-api
```

Instale as dependências:

```
pnpm install
```

## Subindo o ambiente Docker

```
pnpm docker:up
```

## Configuração do Ambiente

Crie um arquivo .env na raiz do projeto com base no arquivo de exemplo .env.example:

Rodando o Servidor de Desenvolvimento
Inicie o servidor com o comando:

pnpm dev

O código será gerado na pasta dist.

Rodando em Produção
Depois de construir o projeto, execute o servidor em modo de produção:

pnpm run start:prod

## Licença

Este projeto está licenciado sob a licença MIT.

Se precisar de ajuda, entre em contato! 😊
