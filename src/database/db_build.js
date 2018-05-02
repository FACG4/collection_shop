const dbConnection = require("./db_connection");
const fs = require("fs");

const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();
const dbBuild = () => {
dbConnection.query(sql, (err, res) => {
if (err) {
throw new Error(err);
} else {
console.log("the process success");
}
});
};

module.exports = dbBuild;
