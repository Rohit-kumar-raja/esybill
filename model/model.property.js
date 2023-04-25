const db = require('../lib/db');

async function bulkInsert() {
  const connection = await db();
  const query = 'INSERT INTO ezybill.tblmasterproperty () VALUES()()';
  await connection.execute(query);
  return true;
}

module.exports = {
  bulkInsert
};
