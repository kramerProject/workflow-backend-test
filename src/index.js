const express = require('express');
require('dotenv').config();

const WorkflowQueue = require('../src/lib/Queue');

const { createBullBoard } = require('bull-board')
const { BullAdapter } = require('bull-board/bullAdapter')

const { router } = createBullBoard([
  new BullAdapter(WorkflowQueue.queues[0].bull)
])

const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);
app.use('/admin/queues', router)

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Listening to PORT ${PORT}`);
});
