# Binary Search Trees

A JavaScript implementation of a balanced Binary Search Tree (BST) data structure. This project demonstrates fundamental concepts of tree traversal, recursion, and dynamic tree balancing.

## Features

- Node class with data and left/right child properties
- Tree class that builds a balanced BST from an array
- Tree traversal methods (levelOrder, inOrder, preOrder, postOrder)
- Tree manipulation (insert, delete, find)
- Tree analysis (height, depth, isBalanced)
- Tree maintenance (rebalance)

## Usage

```javascript
const { Tree } = require('./bst.js');

// Create a new BST from an array
const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);

// Basic operations
tree.insert(10);           // Insert a new value
tree.deleteItem(7);        // Delete a value
const node = tree.find(8); // Find a node

// Tree traversal
tree.levelOrder(node => console.log(node.data));  // Breadth-first traversal
tree.inOrder(node => console.log(node.data));     // Left -> Root -> Right
tree.preOrder(node => console.log(node.data));    // Root -> Left -> Right
tree.postOrder(node => console.log(node.data));   // Left -> Right -> Root

// Tree analysis
console.log(tree.height(8));      // Height of node with value 8
console.log(tree.depth(8));       // Depth of node with value 8
console.log(tree.isBalanced());   // Check if tree is balanced

// Tree maintenance
tree.rebalance();  // Rebalance an unbalanced tree

// Visualize the tree
tree.prettyPrint();
```

## Implementation Progress

- [x] Basic Tree Structure
  - [x] Node Class
  - [x] Tree Class
  - [x] buildTree method
  - [x] prettyPrint utility
- [x] Tree Operations
  - [x] insert
  - [x] delete
  - [x] find
- [x] Tree Traversal
  - [x] levelOrder
  - [x] inOrder
  - [x] preOrder
  - [x] postOrder
- [x] Tree Analysis
  - [x] height
  - [x] depth
  - [x] isBalanced
- [x] Tree Maintenance
  - [x] rebalance

## Testing

Run the comprehensive test script to see all functionality in action:

```bash
node test.js
```

The test script demonstrates:
1. Creating a BST from random numbers
2. Verifying initial balance
3. Performing all traversal methods
4. Unbalancing the tree with new insertions
5. Rebalancing the tree
6. Verifying the restored balance
7. Demonstrating additional operations