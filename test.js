const { Tree } = require('./bst.js');

console.log('=== Initial BST Test ===');
const testArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
console.log('Input array:', testArray);

const tree = new Tree(testArray);
console.log('\nTree visualization:');
tree.prettyPrint(); 