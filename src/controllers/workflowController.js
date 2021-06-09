
const workflowService = require('../services/workflowService');
const Queue = require('../lib/Queue');
const pdf = require('html-pdf')

const html = require('../page');


const createWorkflow = async (req, res) => {
  try { 
    const { body } = req
    await Queue.add('WorkflowReport', body)
    const creationRes = await workflowService.createWorkflow(body)
    return res.status(200).json({ inserted: body })
  } catch (error) {
    return res.status(404).json({ message: error.message})
  }
}

const updateWorkflow = async (req, res) => {
  try {
    const { id } = req.params
    const { status } = req.body
    const updateRes = await workflowService.updateWorkflow(id, status)
    return res.status(200).json({ message: 'Workflow updated successfully'})
  } catch (error) {
    return res.status(404).json({ message: error.message})
  }
}


const getAllWorkflows = async (_req, res) => {
    try {
      const workflows = await workflowService.getAllWorkflows()
      return res.status(200).json({ message: workflows })
    } catch (error) {
      return res.status(404).json({ message: error.message})
    } 
}

const consumeWf = async (_req, res) => {
  try {
    const consumeRes = await workflowService.consumeWf()
    const { name, status, keyPrefix } = consumeRes
    const page = html(name, status, keyPrefix)
    pdf.create( page, {}).toFile('./src/assets/workflow.pdf', (err, res) => {
      if(err) {
        console.log('um erro ocorreu')
      }
    })
    return res.status(200).json({ message: 'pdf generated' })
  } catch (error) {
    return res.status(404).json({ message: error.message})
  } 
}


module.exports = {
  createWorkflow,
  updateWorkflow,
  getAllWorkflows,
  consumeWf
}