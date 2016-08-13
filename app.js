var fs = require('fs')
fs.readFile('config/default.yaml', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  data = data.replace("MONGODB_HOST_PORT", process.env.MONGODB_HOST_PORT);
  data = data.replace("MONGODB_DATABASE", process.env.MONGODB_DATABASE);
  data = data.replace("MONGODB_USER", process.env.MONGODB_USER);
  data = data.replace("MONGODB_PASSWORD", process.env.MONGODB_PASSWORD);
  data = data.replace("EMAIL_SERVICE", process.env.EMAIL_SERVICE);
  data = data.replace("EMAIL_USER", process.env.EMAIL_USER);
  data = data.replace("EMAIL_PASSWORD", process.env.EMAIL_PASSWORD);
  data = data.replace("EMAIL_FROM", process.env.EMAIL_FROM);
  data = data.replace("EMAIL_TO", process.env.EMAIL_TO);
  console.log(data);
  fs.writeFile('config/default.yaml', data, 'utf8', function (err) {
    if (err) return console.log(err);
  });
});
var fork = require('child_process').fork;
fork("./main");
