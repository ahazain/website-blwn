require("dotenv").config();

module.exports = {
  databaseUrl: process.env.DATABASE_URL,
  port: process.env.PORT || 3000,
  secretKey: process.env.SECRET_KEY,
};
