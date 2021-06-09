const workflowModel = require('../models/workflowModel');
const Queue = require('../lib/Queue');

const createWorkflow = async ({ status, data, steps }) => {
  const creationRes = await workflowModel.createWorkflow(status, data, steps)
  return creationRes
}

const updateWorkflow = async (id, status) => {
  const updateRes = await workflowModel.updateWorkflow(id, status)
  return updateRes
}

const getAllWorkflows = async () => {
  const workflows = await workflowModel.getAllWorkflows();
  return workflows
}

const consumeWf = async () => {
  await Queue.process()
  const consumeRes = await Queue.queues[0].bull

  
  return {
    name: consumeRes.name,
    status: consumeRes.clients[0].status,
    keyPrefix: consumeRes.keyPrefix
  }
}

module.exports = {
  createWorkflow,
  updateWorkflow,
  getAllWorkflows,
  consumeWf
}

