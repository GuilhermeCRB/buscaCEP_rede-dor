# Rede D'or - Desafio Busca CEP

<div align=center>
  <img 
    src="https://static.vagas.com.br/portais-de-carreira/images/headers/original/_rede-dor-logo-com-a-escrita-em-branco.png" 
    width="40%" 
  >
</div>

***

## :computer:	 Tecnologias e Conceitos

- React.js
- Styled-Components
- Node.js
- Express.js
- TypeScript
- API REST
- Arquitetura em camadas

***

## :rocket: Endpoints

```yml
GET /cep/:cep
    - Rota para obter endereços a partir de um CEP
    - params: cep
    - headers: {}
    - body: {}
```

***

## 🏁 Rodando a aplicação

Primeiramente, clone este repositório para sua máquina local.

```
git clone https://github.com/GuilhermeCRB/buscaCEP_rede-dor.git
```

### Back end

Para iniciar o servidor, entre da pasta `/back-end`.

```
cd back-end
```

Rode o seguinte comando no terminal para instalar as dependências:

```
npm install
```

Em seguida, basta iniciar o sevidor

```
npm start
```

Adicionalmente, caso possua Docker instalado na máquina local, é possível iniciar o servidor subindo o container Docker através do seguinte comando:

```
docker-compose up -d
```

Para derrubar o container juntamente com o servidor, utilize o comando

```
docker-compose down
```

### Front end

Para iniciar o servidor, entre da pasta `/front-end`.

```
cd front-end
```

Rode o seguinte comando no terminal para instalar as dependências:

```
npm install
```

Em seguida, basta iniciar o sevidor

```
npm start
```
