require("dotenv").config();

// module.exports = {
//   secret: "asdfdfjslfjdsjfeihjkfhkjdhkjewhrkjwehrkjwehrkjwehrjkhffdkjhvkjahkjewhrkjwhrj"
// }

module.exports = {
  secret: process.env.DB_secret
}
