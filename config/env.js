require("dotenv").config({path: `config/${process.env.ENV || "qa"}.env`});
module.exports = {
    baseUrl : process.env.BASE_URL,
    apiBaseUrl : process.env.API_BASE_URL
};