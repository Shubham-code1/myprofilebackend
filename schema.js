const mongoose = require("mongoose");


const feedbackSchema = new mongoose.Schema({
        feedname:{
            type:String,
            required:[true,"Required"],
            unique:false,
            maxlength: 25
        },
        location:{
            type:String,
            required:[true,"Required"],
            unique:false,
            maxlength:15,
        },
        feed:{
            type:String,
            required:[true,"Required"],
            unique:false,
            maxlength: 120
        },
        rating:{
            type:Number,
            default:1
        }
});


const contactSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Required"],
        unique:false,
        maxlength:25
    },
    useremail: {
        type: String,
        required: true,
        unique: true, 
        lowercase: true, 
        trim: true, 
      },
      userquery:{
        type:String,
        required:[true,"Required"],
        unique:false,
        maxlength:200
      }
});


// admin schema

const projectCreateSchema = new mongoose.Schema({
        title:{
            type:String,
            required:[true,"Required"],
            unique:true
        },
        description:{
            type:String,
            required:[true,"Required"],
            maxlength:160
        },
        descpath:{
            type:String,
            required:[true,"Required"],
            unique:true
        },
        gitlink:{
            type:String,
            required:[true,"Required"],
        },
        hostlink:{
            type:String,
            required:[true,"Required"],
        },
        likes:{
            type:Number,
            default:0
        },
        projectimagepath:{
            type:String,
            required:[true,"Required"],
        }
});


const experienceSchema = new mongoose.Schema({

    companyname:{
        type:String,
        required:[true,"Required"],
        unique:true
    },
    designation:{
        type:String,
        required:[true,"Required"]
    },
    duration:{
        type:String,
        required:[true,"Required"]
    },
    skills:{
        type:"String",
        required:[true,"Required"],
    },
    seemorepath:{
        type:String,
        required:[true,"Required"],
    },
    expimage:{
        type:String,
        required:true
    }
});

// skill schema

const skillSchema = new mongoose.Schema({
    skilltype:{
        type:String,
        required:[true,"Required"]
    },
    skill:{
        type:String,
        required:[true,"Required"],
    },
    rating:{
        type:Number,
        required:[true,"Required"]
    },
    years:{
        type:Number,
        required:[true,"Required"]
    },
    durationtype:{
        type:String,
        required:[true,"Required"]
    }
});


const Feedback = mongoose.model("Feedback",feedbackSchema);
const Contact = mongoose.model("Contact",contactSchema);
const Project = mongoose.model("Project",projectCreateSchema);
const Experience = mongoose.model("Experience",experienceSchema);
const Skill = mongoose.model("Skill",skillSchema)

module.exports = {
    Feedback,
    Contact,
    Project,
    Experience,
    Skill
};








