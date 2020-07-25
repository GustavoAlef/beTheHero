//retorna os casos especificos de uma unica ong
const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const ong_id = request.headers.authorization;

    //lista todos os incidents que esta ong criou
    const incidents = await connection("incidents")
      .where("ong_id", ong_id)
      .select("*");

    return response.json(incidents);
  },
};
