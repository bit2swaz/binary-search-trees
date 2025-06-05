class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(array) {
    this.root = this.buildTree(array);
  }

  buildTree(array) {
    // Remove duplicates and sort the array
    const uniqueSorted = [...new Set(array)].sort((a, b) => a - b);
    
    // Helper function to build tree recursively
    const buildTreeRec = (arr, start, end) => {
      if (start > end) return null;
      
      const mid = Math.floor((start + end) / 2);
      const node = new Node(arr[mid]);
      
      node.left = buildTreeRec(arr, start, mid - 1);
      node.right = buildTreeRec(arr, mid + 1, end);
      
      return node;
    };

    return buildTreeRec(uniqueSorted, 0, uniqueSorted.length - 1);
  }

  insert(value) {
    const insertRec = (node, value) => {
      if (node === null) return new Node(value);

      if (value < node.data) {
        node.left = insertRec(node.left, value);
      } else if (value > node.data) {
        node.right = insertRec(node.right, value);
      }

      return node;
    };

    this.root = insertRec(this.root, value);
  }

  deleteItem(value) {
    const findMin = (node) => {
      let current = node;
      while (current.left !== null) {
        current = current.left;
      }
      return current;
    };

    const deleteRec = (node, value) => {
      if (node === null) return null;

      if (value < node.data) {
        node.left = deleteRec(node.left, value);
      } else if (value > node.data) {
        node.right = deleteRec(node.right, value);
      } else {
        // Case 1: Leaf node
        if (node.left === null && node.right === null) {
          return null;
        }
        // Case 2: One child
        if (node.left === null) return node.right;
        if (node.right === null) return node.left;
        
        // Case 3: Two children
        const successor = findMin(node.right);
        node.data = successor.data;
        node.right = deleteRec(node.right, successor.data);
      }
      return node;
    };

    this.root = deleteRec(this.root, value);
  }

  find(value) {
    const findRec = (node, value) => {
      if (node === null || node.data === value) return node;
      return value < node.data ? findRec(node.left, value) : findRec(node.right, value);
    };

    return findRec(this.root, value);
  }

  levelOrder(callback) {
    if (!callback) {
      throw new Error('Callback function is required for levelOrder traversal');
    }

    if (!this.root) return;

    const queue = [this.root];
    while (queue.length > 0) {
      const node = queue.shift();
      callback(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  inOrder(callback) {
    if (!callback) {
      throw new Error('Callback function is required for inOrder traversal');
    }

    const inOrderRec = (node, callback) => {
      if (node === null) return;
      inOrderRec(node.left, callback);
      callback(node);
      inOrderRec(node.right, callback);
    };

    inOrderRec(this.root, callback);
  }

  preOrder(callback) {
    if (!callback) {
      throw new Error('Callback function is required for preOrder traversal');
    }

    const preOrderRec = (node, callback) => {
      if (node === null) return;
      callback(node);
      preOrderRec(node.left, callback);
      preOrderRec(node.right, callback);
    };

    preOrderRec(this.root, callback);
  }

  postOrder(callback) {
    if (!callback) {
      throw new Error('Callback function is required for postOrder traversal');
    }

    const postOrderRec = (node, callback) => {
      if (node === null) return;
      postOrderRec(node.left, callback);
      postOrderRec(node.right, callback);
      callback(node);
    };

    postOrderRec(this.root, callback);
  }

  height(value) {
    const node = this.find(value);
    if (!node) return null;

    const heightRec = (node) => {
      if (node === null) return -1;
      const leftHeight = heightRec(node.left);
      const rightHeight = heightRec(node.right);
      return Math.max(leftHeight, rightHeight) + 1;
    };

    return heightRec(node);
  }

  depth(value) {
    const depthRec = (node, value, level = 0) => {
      if (node === null) return null;
      if (node.data === value) return level;
      
      const leftDepth = depthRec(node.left, value, level + 1);
      if (leftDepth !== null) return leftDepth;
      
      return depthRec(node.right, value, level + 1);
    };

    return depthRec(this.root, value);
  }

  isBalanced() {
    const checkBalance = (node) => {
      if (node === null) return { balanced: true, height: -1 };

      const left = checkBalance(node.left);
      const right = checkBalance(node.right);

      if (!left.balanced || !right.balanced) return { balanced: false, height: 0 };

      const balanced = Math.abs(left.height - right.height) <= 1;
      const height = Math.max(left.height, right.height) + 1;

      return { balanced, height };
    };

    return checkBalance(this.root).balanced;
  }

  rebalance() {
    const values = [];
    this.inOrder(node => values.push(node.data));
    this.root = this.buildTree(values);
  }

  // Utility function for visualization
  prettyPrint(node = this.root, prefix = '', isLeft = true) {
    if (node === null) return;
    
    if (node.right !== null) {
      this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }
}

// Export the classes
module.exports = { Node, Tree }; 