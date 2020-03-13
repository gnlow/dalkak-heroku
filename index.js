const toDalk = require("ent2dalk");
const fs = require("fs");

fs.readFile("project.json", (err, data) => {
    var project = toDalk(JSON.parse(data.toString()));
    project.run();
})