# <h1 align="center"> Compass ~ Desafio Final </h1>

<p align="center">
<img height="450" width="1450" src="https://media.discordapp.net/attachments/926720773954105386/944616518396817469/MicrosoftTeams-image_2.png?width=766&height=431">
</p>

<img align="right" src="https://img.shields.io/static/v1?label=project&message=Compass&color=orange&style=for-the-badge&logo=ghost"/>

Bem-vindo(a). Este é o desafio final!

Primeira parte do desafio final do programa de bolsas, será a criação de um seguimento carros para alugar de luxo e semi luxo. Nesta API terá os fluxos de:

- Interação de métodos http. (criar, buscar, editar e remover);
- Busca por query params;
- Paginação;
- Autenticação de cadastro;
- Documentação com Swagger;

## 🛠 Tecnologias

As seguintes ferramentas/tecnologias foram usadas na construção e testagem do projeto. Clicando no icone da tecnologia, você será redirecionado para o site oficial para instalação: <br>

<a href="https://nodejs.org/pt-br/download/" target="_blank"><img align="center" alt="nodeJs" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/nodejs/nodejs-original.svg"></a>
<a href="https://www.mongodb.com/try/download/community" target="_blank"><img align="center" alt="mongo" height="30" width="40" src="https://github.com/devicons/devicon/blob/master/icons/mongodb/mongodb-original.svg"></a>
<a href="https://www.postman.com/downloads/" target="_blank"><img align="center" alt="postman" height="30" width="30" src="https://user-images.githubusercontent.com/82064724/147416090-89b4e7a3-2b78-417a-a154-f47940d23e38.png">
<a href="https://code.visualstudio.com/download" target="_blank"><img align="center" alt="VsCode" height="25" width="35" src="https://github.com/devicons/devicon/blob/master/icons/vscode/vscode-original.svg"></a>
<a href="https://nodejs.org/pt-br/download/" target="_blank">

<br>

> <b>Status code:</b> Finalizado!! ✅

---

## ℹ Indice

<!--ts-->

- [💻 Baixar e executar o projeto](#-Baixar-e-executar-o-projeto)
  - [Setup da aplicação](#-setup-da-aplicação)
  - [Iniciando a aplicação](#-iniciando-a-aplicação)
- [Rotas](#-Rotas)
<!--te-->

<br>

---

## 💻 Baixar e executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Postman](https://www.postman.com/downloads/) e [MongoDB](https://www.mongodb.com/pt-br).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

### ⚙️ Setup da aplicação

#### 1. Clonando a aplicação localmente

O primeiro passo para começar a configurar o servidor é clonar o repositório na sua máquina.

```bash
# Clone este repositório
$ git clone <https://github.com/Lipeb/NodeJs.git>

# Acesse a pasta do projeto no terminal
$ cd NodeJS

# Instale as dependências
$ npm install

```

#### 2. Configurar as variáveis de ambiente

O servidor usa de variáveis de ambiente para transportar dados sensíveis pela aplicação.

Será necessário criar na raiz do projeto um arquivo `.env` configurar as variáveis:

```bash
# Porta que o servidor irá rodar.
PORT=3000

# Endereço para conectar com o Mongo.
DATABASE = mongodb://127.0.0.1:27017/<name>
```

### ▶ Iniciando a aplicação

Depois de ter as variáveis de ambiente configuradas, basta iniciar o servidor.

Para subir em modo `produção`, basta executar:

```bash
$ npm run start

```

Para subir em modo `desenvolvimento`:

```bash
$ npm run dev

```

O servidor inciará na porta:3000 - acesse <http://localhost:3000>

### • Rotas:

**- Carros**

| Request                                                                                         | Endpoint                                       |
| ----------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| <img src="https://img.shields.io/badge/-Post-orange"/>&ensp; <sup>`Para inserir um carro`</sup> | <sup>`https://localhost:3000/api/v1/car`</sup> |

Exemplo:

```json
{
  "modelo": "GM S10 2.8",
  "cor": "branco",
  "ano": "2021",
  "acessorios": [
    { "descricao": "Ar-condicionado" },
    { "descricao": "Dir. Hidráulica" },
    { "descricao": "Cabine Dupla" },
    { "descricao": "Tração 4x4" },
    { "descricao": "4 portas" },
    { "descricao": "Diesel" },
    { "descricao": "Air bag" },
    { "descricao": "ABS" }
  ],
  "quantidadePassageiros": 5
}
```

| Request                                                                                              | Endpoint                                       |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| <img src="https://img.shields.io/badge/-Get-orange"/>&ensp; <sup>`Para listar todos os carros`</sup> | <sup>`https://localhost:3000/api/v1/car`</sup> |

Exemplo do resultado:

```json
{
  "veiculos": [
    {
      "_id": "6210e92834ff26807180ec7a",
      "modelo": "GM S10 2.8",
      "cor": "branco",
      "ano": "2021",
      "acessorios": [
        { "descricao": "Ar-condicionado" },
        { "descricao": "Dir. Hidráulica" },
        { "descricao": "Cabine Dupla" },
        { "descricao": "Tração 4x4" },
        { "descricao": "4 portas" },
        { "descricao": "Diesel" },
        { "descricao": "Air bag" },
        { "descricao": "ABS" }
      ],
      "quantidadePassageiros": 5
    }
  ],
  "total": 1,
  "limit": 100,
  "offset": 1,
  "offsets": 1
}
```

| Request                                                                                          | Endpoint                                                    |
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------- |
| <img src="https://img.shields.io/badge/-Get-orange"/>&ensp; <sup>`Para listar um carro`</sup>    | <sup>`https://localhost:3000/api/v1/car/ id do carro`</sup> |
| <img src="https://img.shields.io/badge/-Put-orange"/>&ensp; <sup>`Para atualizar um carro`</sup> | <sup>`https://localhost:3000/api/v1/car/ id do carro`</sup> |

Exemplo do resultado:

```json
{
      "veiculos": [
        {
          "_id": "6210e92834ff26807180ec7a",
          "modelo": "GTX S10 3.0",
          "cor": "preto",
          "ano": "2021",
          "acessorios": [
            { "descricao": "Ar-condicionado" },
            { "descricao": "Dir. Hidráulica" },
            { "descricao": "Cabine Dupla" },
            { "descricao": "Tração 4x4" },
            { "descricao": "4 portas" },
            { "descricao": "Diesel" },
            { "descricao": "Air bag" },
            { "descricao": "ABS" }
            ],
          "quantidadePassageiros": 5

}
```

| Request                                                                                                            | Endpoint                                                                   |
| ------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| <img src="https://img.shields.io/badge/-Patch-orange"/>&ensp; <sup>` Para atualizar o acessorio de um carro`</sup> | <sup>`https://localhost:3000/api/v1/car/acessorios/ id do acessorio`</sup> |

Exemplo do resultado:

```json
{
  "descricao": "Direção Hidráulica"
}
```

| Request                                                                                           | Endpoint                                                     |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| <img src="https://img.shields.io/badge/-Delete-orange"/>&ensp; <sup>`Para deletar um carro`</sup> | <sup>`https://localhost:3000/api/v1/car/ id do carrro`</sup> |

**- Pessoas**

| Request                                                                                           | Endpoint                                          |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| <img src="https://img.shields.io/badge/-Post-orange"/>&ensp; <sup>`Para inserir uma pessoa`</sup> | <sup>`https://localhost:3000/api/v1/people`</sup> |

Exemplo:

```json
{
  "nome": "joaozinho ciclano",
  "cpf": "131.147.860-49",
  "data_nascimento": "01/01/1991",
  "email": "joazinho@hotmail.com",
  "senha": "123456",
  "habilitado": "sim"
}
```

| Request                                                                                               | Endpoint                                          |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| <img src="https://img.shields.io/badge/-Get-orange"/>&ensp; <sup>`Para listar todas as pessoas`</sup> | <sup>`https://localhost:3000/api/v1/people`</sup> |

Exemplo do resultado:

```json
{
  "pessoas": [
    {
      "_id": "6210ab9efbac3886900a1353",
      "nome": "joaozinho ciclano",
      "cpf": "131.147.860-49",
      "data_nascimento": "01/01/1991",
      "email": "joazinho@hotmail.com",
      "habilitado": "sim"
    }
  ],
  "total": 2,
  "limit": 100,
  "offset": 1,
  "offsets": 1
}
```

| Request                                                                                            | Endpoint                                                        |
| -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| <img src="https://img.shields.io/badge/-Get-orange"/>&ensp; <sup>`Para listar uma pessoa`</sup>    | <sup>`https://localhost:3000/api/v1/people/ id da pessoa`</sup> |
| <img src="https://img.shields.io/badge/-Put-orange"/>&ensp; <sup>`Para atualizar uma pessoa`</sup> | <sup>`https://localhost:3000/api/v1/people/ id da pessoa`</sup> |

Exemplo do resultado:

```json
{
  "_id": "6210ab9efbac3886900a1353",
  "nome": "joaozin ciclano",
  "cpf": "131.147.860-49",
  "data_nascimento": "01/01/1991",
  "email": "joazin@hotmail.com",
  "habilitado": "sim"
}
```

| Request                                                                                             | Endpoint                                                        |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| <img src="https://img.shields.io/badge/-Delete-orange"/>&ensp; <sup>`Para deletar uma pessoa`</sup> | <sup>`https://localhost:3000/api/v1/people/ id da pessoa`</sup> |

**- Autenticação**

| Request                                                                                              | Endpoint                                                |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| <img src="https://img.shields.io/badge/-Post-orange"/>&ensp; <sup>`Para autenticar um usuário`</sup> | <sup>`https://localhost:3000/api/v1/authenticate`</sup> |

Exemplo do resultado:

```json

{
    "user": {
        "_id": "6210ab9efbac3886900a1353",
        "nome": "joaozin ciclano",
        "cpf": "131.147.860-49",
        "data_nascimento": "01/01/1991",
        "email": "joazin@hotmail.com",
        "habilitado": "sim"
},
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXJhbXMiOnsiaWQiOiI2MjExMGE4ODBkODkxMDZhZTUxZjk0ZjMifSwiaWF0IjoxNjQ1MjgzOTk3LCJleHAiOjE2NDUzNzAzOTd9.rQPJvglBNdmBUnTqfqIUsCqWbbiVJF7-holXI2CN7qI"

```

**- Locadora**

| Request                                                                                             | Endpoint                                          |
| --------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| <img src="https://img.shields.io/badge/-Post-orange"/>&ensp; <sup>`Para inserir uma locadora`</sup> | <sup>`https://localhost:3000/api/v1/rental`</sup> |

Exemplo:

```json
{
  "nome": "Localiza Rent a Car",
  "cnpj": "16.670.085/0001-55",
  "atividades": "Aluguel de Carros E Gestão de Frotas",
  "endereco": [
    {
      "cep": "96200-200",
      "number": "1234",
      "isFilial": false
    }
  ]
}
```

| Request                                                                                                 | Endpoint                                          |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| <img src="https://img.shields.io/badge/-Get-orange"/>&ensp; <sup>`Para listar todas as locadoras`</sup> | <sup>`https://localhost:3000/api/v1/rental`</sup> |

Exemplo do resultado:

```json
{
  "locadoras": [
    {
      "_id": "6206451570cf8640f3d7ed91",
      "nome": "Localiza Rent a Car",
      "cnpj": "16.670.085/0001-55",
      "atividades": "Aluguel de Carros E Gestão de Frotas",
      "endereco": [
        {
          "cep": "96200-200",
          "logradouro": "Rua General Canabarro",
          "complemento": "",
          "bairro": "Centro",
          "number": "1234",
          "localidade": "Rio Grande",
          "uf": "RS",
          "_id": "6206451570cf8640f3d7ed92"
        }
      ]
    }
  ],
  "total": 1,
  "limit": 100,
  "offset": 1,
  "offsets": 1
}
```

| Request                                                                                              | Endpoint                                                          |
| ---------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| <img src="https://img.shields.io/badge/-Get-orange"/>&ensp; <sup>`Para listar uma locadora`</sup>    | <sup>`https://localhost:3000/api/v1/rental/ id da locadora`</sup> |
| <img src="https://img.shields.io/badge/-Put-orange"/>&ensp; <sup>`Para atualizar uma locadora`</sup> | <sup>`https://localhost:3000/api/v1/rental/ id da locadora`</sup> |

Exemplo do resultado:

```json
{
  "_id": "6206451570cf8640f3d7ed91",
  "nome": "Compassolisa Rent a Car",
  "cnpj": "16.670.085/0001-55",
  "atividades": "Aluguel de Carros E Gestão de Frotas",
  "endereco": [
    {
      "cep": "96200-200",
      "number": "1234",
      "isFilial": false
    }
  ]
}
```

| Request                                                                                               | Endpoint                                                          |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| <img src="https://img.shields.io/badge/-Delete-orange"/>&ensp; <sup>`Para deletar uma locadora`</sup> | <sup>`https://localhost:3000/api/v1/rental/ id da locadora`</sup> |

---
