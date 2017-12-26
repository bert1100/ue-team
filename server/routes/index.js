const category = require("./category.js");
const resource = require("./resource.js");
const user = require("./user.js");
const upload = require("./upload.js")
const label = require('./label')

module.exports = (app) => {
    category(app);
    resource(app);
    user(app);
    upload(app);
    label(app);
}
