//Position and Person
//the person will have a name and current job title and a list of keyword(skills)imported by teseract.
//position will be name job description and list of keywords(skills).
const mongoose = require("../db/connection");

const Position = new mongoose.Schema({
  name: String,
  jobDescription: String,
  department: String,
  keywords: []
});

module.exports = Position;
