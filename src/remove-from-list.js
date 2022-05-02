const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
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

function removeKFromList( l, k ) {
  let result = l;
  let prev = new ListNode();
  while (l.next !== null) {
    if (l.value === k && !prev.value) {
      result = l.next;
      l = l.next;
    } else  {
      if (l.value === k) {
        prev.next = l.next;
        l = l.next;
      } else {
        prev = l;
        l = l.next;
      }
    } 
  };

  if (l.value === k && l.next === null && prev.value) {
    prev.next = null;
  } 
  return result;
}

module.exports = {
  removeKFromList
};
