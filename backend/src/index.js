const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(express.json());

app.use(routes);
app.use(cors());
/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação do backend
 * DELETE: Deletar uma informação do backend
 */ 


 /** 
  * Tipos de Parâmetros
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição, é utilizado para criar ou alterar recursos
  * 
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  */

  /**
   * Driver: SELECT * FROM users
   * Query: table('users').select('*').where()
   */

 /**
  * Entidades:
  *     ONG
  *     Incidentes
  * Funcionalidades:
  *     Login de ONG
  *     Logout de ONG
  *     Cadastro de ONG
  *     Cadastrar incidentes
  *     Deletar incidentes
  *     Listar incidentes específicos de uma ONG
  *     Listar todos os incidentes
  *     Entrar em contato com a ONG
  */


app.listen(3333);