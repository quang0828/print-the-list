const generateList = require('./generateList');

const args = process.argv.slice(2);
const from = parseFloat(args[0] || 1);
const to = parseFloat(args[1] || 100);
const step = parseFloat(args[2] || 1);

console.log('Rendering the list from arguments:', { from, to, step });
const listing = generateList({ from, to, step });
console.log('Result:', listing);
