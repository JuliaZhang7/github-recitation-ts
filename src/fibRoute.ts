// Endpoint for querying the fibonacci numbers
//Juran Zhang tried to fix something but no time to do it so 
//bahhhhhhhhh
const fibonacci = require("./fib");

export default (req, res) => {
  const { num } = req.params;

  const fibN = fibonacci(parseInt(num));
  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
