const restful = require("node-restful");
const mongoose = restful.mongoose;


const usersSchema = new mongoose.Schema({
    UserName : String,
    UserEmail : String,
    UserPassword : String,
    Admin : {
        type: Boolean,
        default: true
    }
});

module.exports = restful.model("Users", usersSchema);