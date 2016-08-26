var fs = require('fs')
fs.readFile('config/default.yaml', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  data = data.replace("MONGODB_HOST_PORT", process.env.MONGODB_HOST_PORT);
  data = data.replace("MONGODB_DATABASE", process.env.MONGODB_DATABASE);
  data = data.replace("MONGODB_USER", process.env.MONGODB_USER);
  data = data.replace("MONGODB_PASSWORD", process.env.MONGODB_PASSWORD);
  var plugins;
  if ( ['', 'NONE'].indexOf(process.env.EMAIL_USER) == -1 ) {
    plugins = "  - ./plugins/email\n"
    data = data.replace("EMAIL_SERVICE", process.env.EMAIL_SERVICE);
    data = data.replace("EMAIL_USER", process.env.EMAIL_USER);
    data = data.replace("EMAIL_PASSWORD", process.env.EMAIL_PASSWORD);
    data = data.replace("EMAIL_FROM", process.env.EMAIL_FROM);
    data = data.replace("EMAIL_TO", process.env.EMAIL_TO);
  }
  if ( process.env.AUTH_USERNAME ) {
    plugins = "  - ./plugins/basicAuth\n"
    data = data.replace("AUTH_USERNAME", process.env.AUTH_USERNAME);
    data = data.replace("AUTH_PASSWORD", process.env.AUTH_PASSWORD);
  }
  if ( process.env.DEBUG == 'Y' ) {
    data = data.replace("DEBUG", 'true');
  } else {
    data = data.replace("DEBUG", 'false');
  }
  data = data.replace("MORE_PLUGINS", plugins)
  fs.writeFile('config/default.yaml', data, 'utf8', function (err) {
    if (err) return console.log(err);
  });
});

/* Call Main Service */
var fork = require('child_process').fork;
fork("./main");
