//conexao com o banco
const connection = require("../database/connection");
const crypto = require("crypto");

module.exports = {
  async index(request, response) {
    const ongs = await connection("ongs").select("*");

    return response.json(ongs);
  },

  async create(request, response) {
    //req body (usando desestruturacao)
    const { name, email, whats, city, uf } = request.body; 

    const id = crypto.randomBytes(4).toString("HEX");

    //inserindo dados
    await connection("ongs").insert({
      id,
      name,
      email,
      whats,
      city,
      uf,
    });

    return response.json({ id });
  },
};
