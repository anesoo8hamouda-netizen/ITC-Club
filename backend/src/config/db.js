
const { Pool } = require("pg");

const pool = new Pool({
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 5432,
                      database: process.env.DB_NAME || "itc_club",
                      user: process.env.DB_USER || "itc_app",
                      password: process.env.DB_PASSWORD || undefined,
});

module.exports = pool;
