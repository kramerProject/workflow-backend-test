import { Job } from 'bull';


const workflowProcess = async (Job) => {
  console.log(Job.data)
}

export default workflowProcess;