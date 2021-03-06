//verifica se a ong existe
const connection = require("../database/connection");

module.exports = {
  async create(request, response) {
    const { id } = request.body;

    const ong = await connection("ongs")
      .where("id", id)
      .select("name") //vai ser retornado pro front
      .first();

    if (!ong) {
      return response.status(400).json({ error: "no ong found with this ID!" });
    }

    console.log("--->", id)

    return response.json(ong);
  },
};
