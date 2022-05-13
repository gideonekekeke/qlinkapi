const jobData = require('../Model/JobModel')
const userData = require('../Model/UserModel')

const PostJobs = async(req, res)=>{
    try{

      const userID = req.params.id
      const jobOwn = new jobData(req.body)
      const userOwn = await userData.findById(userID)
      jobOwn.user = userOwn
      await jobOwn.save()

      userOwn.job.push(jobOwn)
      await userOwn.save()
        res.status( 201 ).json( {
            data: jobOwn
        })

    }catch(error){
    res.status(400).json({message: error.message})
  }
}


const EditJob = async(req, res)=>{

     try{

        const {email, jobTitle,jobType, salary, expreience,qualification,
        SelectTime,
        location
        } = req.body
      const userID = req.params.id
      const jobOwn = await jobData.findById(req.params.id)
      const userOwn = await userData.findById(userID)
      console.log(userOwn)

      const editingData = await jobData.findByIdAndUpdate(req.params.id , {email, jobTitle,jobType,
         salary,
          expreience,
         qualification,
        SelectTime,
        location}, {new : true})
     
      res.status(200).json({
        data : editingData
      })

    }catch(error){
    res.status(400).json({message: error.message})
  }
}

const getSingleJob = async(req, res)=>{
   
     try{

      const userID = req.params.id
      const jobOwn = await jobData.findById(req.params.id)
      const userOwn = await userData.findById(userID)
      console.log(userOwn)
      const editing = await jobData.findById(req.params.id, userOwn)
     
      res.status(200).json({
        data : editing
      })
   

    }catch(error){
    res.status(400).json({message: error.message})
  } 
}

module.exports = {
    PostJobs,
    EditJob,
    getSingleJob
}