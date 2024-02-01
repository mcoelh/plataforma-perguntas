# Plataforma de Perguntas e Respostas - Projeto Educacional

Plataforma de Perguntas e Respostas desenvolvido com Node.js, Express, Sequelize, MySQL e EJS, utilizando o Bootstrap 5. 

## Estrutura do Projeto

- **Arquivos Principais:**
  - `index.js`: Arquivo principal que inicia o servidor Express.
  - `.env`: Arquivo de configuração de variáveis de ambiente.
  
- **Configuração do Banco de Dados:**
  - `config/database/database.js`: Arquivo de configuração do banco de dados.

- **Modelos:**
  - `models/perguntasModel.js`: Modelo para perguntas.
  - `models/respostasModel.js`: Modelo para respostas.

- **Diretórios de Views:**
  - `views`: Diretório que contém os modelos de visualização EJS.
    - `index.ejs`: Modelo para a página principal que lista perguntas.
    - `perguntar.ejs`: Modelo para a página de criação de perguntas.
    - `responder.ejs`: Modelo para a página de resposta a uma pergunta.
  
- **Partials (Componentes Reutilizáveis):**
  - `views/partials/header.ejs`: Cabeçalho comum a todas as páginas.
  - `views/partials/navbar.ejs`: Barra de navegação comum a todas as páginas.
  - `views/partials/footer.ejs`: Rodapé comum a todas as páginas.

- **Recursos Estáticos:**
  - `public/css`: Diretório contendo folhas de estilo, incluindo Bootstrap 5.
  - `public/img`: Diretório contendo imagens.
  - `public/js`: Diretório contendo scripts JavaScript, incluindo Bootstrap 5.

## Como Usar

Siga as instruções abaixo para clonar, instalar e executar o projeto em sua máquina local.

### Pré-requisitos

Certifique-se de ter Node.js, npm (Node Package Manager) e MySQL instalados em sua máquina.

### Clonar o Projeto

```bash
git@github.com:mcoelh/plataforma-perguntas.git
```

### Instalar Dependências

Navegue até o diretório do projeto e execute o seguinte comando para instalar as dependências:

```bash
cd plataforma-perguntas
npm install
```

### Configurar Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto e configure as seguintes variáveis de ambiente:

```env
HOST=seu_host
DATABASE=sua_database
USER=seu_usuario
PASSWORD=sua_senha
```

### Banco de Dados

Certifique-se de que o banco de dados já está criado antes de iniciar o servidor. O Sequelize assumirá que o banco de dados especificado nas variáveis de ambiente já existe.

### Iniciar o Servidor

Execute o seguinte comando para iniciar o servidor:

```bash
npm run dev
```

O servidor estará rodando em http://localhost:8080.

Acesse http://localhost:8080 no seu navegador para interagir com a plataforma de perguntas e respostas.

