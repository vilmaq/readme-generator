const fs = require("fs");

const createFile = (data) => {
  const callback = (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("README file has been generated successfully ");
    }
  };
  fs.writeFile("./docs/README.md", data, callback);
};
module.exports = createFile;
