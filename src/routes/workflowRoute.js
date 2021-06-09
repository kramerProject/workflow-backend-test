const express = require('express');
const workflowController = require('../controllers/workflowController');

const router = express.Router();

// BullBoard.setQueues(Queue.queues.map(queue => queue.bull));


router.post('/workflow', workflowController.createWorkflow);

router.patch('/workflow/:id', workflowController.updateWorkflow);

router.get('/workflow', workflowController.getAllWorkflows);

router.get('/workflow/consume', workflowController.consumeWf);



module.exports = router;




