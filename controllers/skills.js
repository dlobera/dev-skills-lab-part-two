import { Skill } from "../models/skill.js"

function index (req, res) {
  Skill.find({})
  .then(todos => {
    res.render ('skills/index', {
      skills : skills
    })
  })
  .catch(error => {
    console.log(error);
    res.redirect('/')
  })
}



export {
  index
}