let connection;
const handleUserInput = function (data) {
  // your code here
  if (data === "\x03") {
    process.exit();
  }
  switch(data) {
    case "w":
      // console.log("Move up");
      connection.write("Move: up");
      break;
    case "a":
      // console.log("Move left");
      connection.write("Move: left");
      break;
    case "s":
      // console.log("Move down");
      connection.write("Move: down");
      break;
    case "d":
      // console.log("Move right");
      connection.write("Move: right");
      break;
    case "h":
      connection.write("Say: Hello");
      break;
  }
};
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  
  return stdin;
};

module.exports = { setupInput };