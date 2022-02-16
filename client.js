const net = require("net");
const {IP, PORT} = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on('connect', () => {
    console.log("Connection successful");
    conn.write("Name: TFU");
    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 50);
    // setTimeout(() => {
    //   conn.write("Move: left");
    // }, 200);
    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 350);
    // conn.write("Move: up");
    // conn.write("Move: up");
    conn.on('data', (data) =>  {
      console.log(data);
    });
  })
  


  conn.setEncoding('utf8');
  return conn;
};

module.exports = { connect };