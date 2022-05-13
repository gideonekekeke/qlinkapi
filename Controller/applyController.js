
const jobData = require('../Model/JobModel')
const appyData = require('../Model/ApplyModel')

const postApplied = async(req, res)=>{
    try{

      const jobID = req.params.id
      const applyOwn = new appyData(req.body)
      const userOwn = await jobData.findById(jobID)
      applyOwn.userApply = userOwn
      await applyOwn.save()

      userOwn.applied.push(applyOwn)
      await userOwn.save()
        res.status( 201 ).json({
            data: jobOwn
        })

    }catch(error){
    res.status(400).json({message: error.message})
  }
}


module.exports = {
    postApplied
}