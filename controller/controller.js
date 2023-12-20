
const {Feedback,Contact,Project,Experience,Skill} = require('../schema');

// feedback submission controller 
async function feedbackController(req,res){

   try{
    const finalfeedback = await Feedback.create(req.body);
    res.status(200).json({
        status:"Success",
        data:{
            finalfeedback
        }
    });
    return;
   }catch(err){
            res.status(400).json({
                status:"Failed",
                message:err.message
            })
   }

};


// contact submission controller

async function contactController(req,res){
    try{
        const finalContact = await Contact.create(req.body);
        res.status(200).json(finalContact);
       }catch(err){
                res.status(400).json({
                    status:"Faileds",
                    message:err.message
                })
       }
}


// Project Submission controller

async function projectSubmission(req,res){
            try{
                const addedProject = await Project.create(req.body);
                res.status(200).json(addedProject);
            }catch(err){
                res.status(400).json({
                    status:"Failed",
                    message:err.message
                })
            }
}


// Experiece Submission controller

async function experienceaddition(req,res){
    try{
        const addedExperience = await Experience.create(req.body);
        res.status(200).json(addedExperience);
    }catch(err){
        res.status(400).json({
            status:"Failed",
            message:err.message
        })
    }
}

// fetching Projects 

async function FetchProjects(req,res){
    try{
    let fetchedProjects = await Project.find({});
    res.status(200).send(fetchedProjects);
    }catch(err){
        res.status(400).send({
            status:"Failed",
            message:err.message
        })
    }
};

// fetching feedback

async function fetchFeeds(req,res){
    try{
    let fetchedFeeds = await Feedback.find({});
    res.status(200).send(fetchedFeeds);
}catch(err){
    res.status(400).send({
        status:"Failed",
        message:err.message
    })
}
}

// skills posting

async function skillAddition(req,res){
    try{
        const skillsAdded = await Skill.create(req.body);
        res.status(200).send(skillsAdded);
    }catch(err){
        res.status(400).send({
            status:"Failed",
            message:err.message
        })
    }
}

// skills fetching

const fetchSkills = async(req,res)=>{
    try{
        const data = await Skill.find({});
        res.status(200).send(data);
    }catch(err){
        res.status(400).send({
            status:"Failed",
            message:err.message
        })
    }
}

module.exports = {
            feedbackController,
            contactController,
            projectSubmission,
            experienceaddition,
            FetchProjects,
            fetchFeeds,
            skillAddition,
            fetchSkills
            };