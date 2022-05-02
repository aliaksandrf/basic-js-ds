const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
     this.rootTree = null;
   }
 
   root() {
     if(this.rootTree === null) {
       return this.rootTree;
     }
     return this.rootTree;
     //throw new NotImplementedError('Not implemented');
     // remove line with error and write your code here
   }
 
   add(data) {
     //throw new NotImplementedError('Not implemented');
     if(!this.rootTree) {
       this.rootTree = new Node(data);
       return;
   }
 
   let current = this.rootTree;
   while(current) {
       if(data < current.data) {
           if(!current.left) {
               current.left = new Node(data);
               return;
           }
           current = current.left;
       } else {
         if(data >= current.data) {
             if(!current.right) {
                 current.right = new Node(data);
                 return;
             }
             current = current.right;
         }                  
       }
   }
   
 
 
 
 // remove line with error and write your code here
   }
 
   has(value) {
    //throw new NotImplementedError('Not implemented');
    return searchWithin(this.rootTree, value);
    function searchWithin(node, value) {
        if(!node) {
            return false;
        }

        if(node.data === value) {
            return true;
        }

        if (value < node.data) {
            return searchWithin(node.left, value);
        } else {
            return searchWithin(node.right, value);
        }
    }
  
  // remove line with error and write your code here
}
 
    find(value) {
      return searchWithin(this.rootTree, value);
      function searchWithin(node, value) {
          if(!node) {
              return null;
          }

          if(node.data === value) {
              return node;
          }

          if (value < node.data) {
              return searchWithin(node.left, value);
          } else {
              return searchWithin(node.right, value);
          }
      }   
      //throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
    }
 
    remove(data) {
      //throw new NotImplementedError('Not implemented');
      this.rootTree = removeNode(this.rootTree, data);

      function removeNode(node, data) {
        if(!node) {
          return null;
        }

        if (data < node.data) {
          node.left = removeNode(node.left, data);
          return node;
        } else if (data > node.data) {
          node.right = removeNode(node.right, data);
          return node;
        } else {
          if(!node.left && !node.right) {
            return null;
          }

          if(!node.left) {
            node = node.right;
            return node;
          }

          if(!node.right) {
            node = node.left;
            return node;
          }

          let minFromRight = node.right;
          while(minFromRight.left) {
            minFromRight = minFromRight.left;
          }

          node.data = minFromRight.data;

          node.right = removeNode(node.right, minFromRight.data);
          return node;
        }
      }
      // remove line with error and write your code here
    }
 
   min() {
     //throw new NotImplementedError('Not implemented');
     if(!this.rootTree) {
       return null;
     }
 
     let current = this.rootTree;
     while(current.left) {
       current = current.left;
     }
     console.log("tratata");
 
     return current.data;
 
 
     
     // remove line with error and write your code here
   }
 
   max() {
     //throw new NotImplementedError('Not implemented');
     if(!this.rootTree) {
       return null;
     }
 
     let current = this.rootTree;
     while(current.right) {
       current = current.right;
     }
     console.log('max');
 
     return current.data;
 
 
 
     
     // remove line with error and write your code here
   }
 }

module.exports = {
  BinarySearchTree
};