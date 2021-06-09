module.exports =  {
  key: 'WorkflowReport',
  options: {
    delay: 1000,
  },
  async handle(data) {
    return {...data.data, consumed: true }
  },
};