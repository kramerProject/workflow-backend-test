const conn = require('../configs/connection');

const createWorkflow = async(status, data, steps ) => {
  const creationRes = await conn.execute('INSERT INTO workflow (status, data, steps) VALUES (?, ?, ?)', [status, data, steps])
  return creationRes
}

const updateWorkflow = async (id, status) => {
  const updateRes = await conn.execute('UPDATE siena.workflow SET status = ? WHERE id = ?', [status, id])
  return updateRes
}

const getAllWorkflows = async (id, status) => {
  const [workflows] = await conn.execute('SELECT * FROM siena.workflow')
  return workflows
}

module.exports = {
  createWorkflow,
  updateWorkflow,
  getAllWorkflows
}