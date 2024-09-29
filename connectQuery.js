const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",

  password: "12345",
  host: "localhost",
  port: 5432,
  database: "mapalaBLWN",
});

const getUsers = (req, res) => {
  pool.query("SELECT * FROM users", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};
const getDivisi = (req, res) => {
  pool.query("SELECT * FROM divisi", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};
const getPengurus = (req, res) => {
  pool.query("SELECT * FROM pengurus", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

module.exports = {
  getUsers,
  getDivisi,
  getPengurus,
};
