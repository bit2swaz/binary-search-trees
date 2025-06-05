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

// Create a new BST
const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);

// Visualize the tree
tree.prettyPrint();
```

## Implementation Progress

- [x] Basic Tree Structure
  - [x] Node Class
  - [x] Tree Class
  - [x] buildTree method
  - [x] prettyPrint utility
- [ ] Tree Operations
  - [ ] insert
  - [ ] delete
  - [ ] find
- [ ] Tree Traversal
  - [ ] levelOrder
  - [ ] inOrder
  - [ ] preOrder
  - [ ] postOrder
- [ ] Tree Analysis
  - [ ] height
  - [ ] depth
  - [ ] isBalanced
- [ ] Tree Maintenance
  - [ ] rebalance