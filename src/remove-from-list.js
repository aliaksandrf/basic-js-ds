const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers linkedList and an integer k,
 * remove all elements from list linkedList that have a value equal to k.
 *
 * @param {List} linkedList
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For linkedList = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */


function removeKFromList(linkedList, k) {
  let previous = null;
  let current = linkedList;
  let next = linkedList.next;
  
  
  while (next) {    
    if (current.value === k) {
      if (!previous) { //случай, когда первый элемент в списке К
        linkedList = current.next
        current = current.next;
        next = current.next
      } else { // случаи, когда в середине элемент K
        previous.next = next;
        current = next;
        next = current.next;
      }      
    } else if(current.value != k) { // проход по списку
      previous = current;
      current = current.next;
      next = current.next;
    }
  }

   // обрабатываем случай, когда совпадает последний
  if (current.next === null) {
    if (current.value === k) {
      previous.next = null;
    }
  }

  return linkedList;



  //throw new NotImplementedError('Not implemented'); 
/*   let previous = null;
  let current = linkedList.value;
  let nextCurrent = linkedList.next;

  while(current) {
    if(current.value === k) {
      if(previous === null) {
        current = nextCurrent;
        continue;
      } else if(!nextCurrent){
        current = null;
        continue;
      } else {


      }
    }

 */

  }



module.exports = {
  removeKFromList
};
