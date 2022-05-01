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
     return this.rootTree.data;
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
 
   has(/* data */) {
     throw new NotImplementedError('Not implemented');
     // remove line with error and write your code here
   }
 
   find(/* data */) {
     throw new NotImplementedError('Not implemented');
     // remove line with error and write your code here
   }
 
   remove(/* data */) {
     throw new NotImplementedError('Not implemented');
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