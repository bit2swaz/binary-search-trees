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