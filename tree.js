/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (this.root === null) return 0
 
    let sum = this.root.val
    const getVals = (node) => {
      for (let child of node.children) {
        sum += child.val
        if (child.children.length > 0) getVals(child)
      }
    }

    getVals(this.root)
    return sum
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let count = 0
    if (this.root === null) return count
    else if (this.root.val % 2 === 0) count++

    const checkVals = (node) => {
      for (let child of node.children) {
        if (child.val % 2 === 0) count++
        if (child.children.length > 0) checkVals(child)
      }
    }
    checkVals(this.root)
    return count
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let count = 0
    if (this.root === null) return count
    else if (this.root.val > lowerBound) count++

    const checkVals = (node) => {
      for (let child of node.children) {
        if (child.val > lowerBound) count++
        if (child.children.length > 0) checkVals(child)
      }
    }
    checkVals(this.root)
    return count
  }
}

module.exports = { Tree, TreeNode };
