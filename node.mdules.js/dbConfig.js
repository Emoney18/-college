const config = {
    user: "sa", // sql user
    password: "s3alt3am", //sql user password
    server: "localhost", // if it does not work try- 127.0.0.1
    database: "Academic",
    options: {
      trustedconnection: true,
      enableArithAbort: true,
      instancename: "EXPRESS2022", // SQL Server instance name
    },
    port: 49790, //49790
  };
  
  module.exports = config;