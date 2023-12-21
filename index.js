const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config({path:('./config.env')})

const PORT = process.env.PORT || 5000;
const myConnection = require('./connection');
app.use(express.json());
app.use(cors());

const {
        feedbackController,
        contactController,
        projectSubmission,
        experienceaddition,
        FetchProjects,
        fetchFeeds,
        skillAddition,
        fetchSkills
      } = require('./controller/controller');


app.route("/api/v1/profile/user/feeds")
.post(feedbackController);

app.route("/api/v1/profile/user/contact")
.post(contactController);

app.route("/api/v1/profile/admin/project")
.post(projectSubmission);

app.route("/api/v1/profile/admin/experience")
.post(experienceaddition);

app.route("/api/v1/profile/admin/skills")
.post(skillAddition);

app.route("/api/v1/profile/user/skills")
.get(fetchSkills);

app.get("/homes",(req,res)=>{
  res.status(200).json({
    "hi":"Hello"
  })
})

app.get("/api/v1/profile/user/project",FetchProjects);

app.get("/api/v1/profile/user/feeds",fetchFeeds);


app.listen(PORT, () => {
  console.log("Server is running ", PORT);
});






