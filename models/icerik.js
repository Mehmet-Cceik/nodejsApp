const restful = require("node-restful");
const mongoose = restful.mongoose;


const icerikSchema = new mongoose.Schema({
    icerikBaslik : String,
    uzunAciklama : String,
    kisaAciklama : String,
    icerikTipi : String,
    icerikUrl : String,
    icerikUrlTarget : String,
    segment : String,
    videourl : String
});

module.exports = restful.model("icerik", icerikSchema);