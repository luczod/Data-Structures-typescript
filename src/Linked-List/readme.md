- **getElementAt(index: number): unknown**
  When exiting the loop (for), the previous variable will reference an element before the
  index where we want to insert the new element, and the current variable will reference
  an element after the position we would like to insert it. insert the new element.

- **getElementAt(index - 1)**
  It is very important to have variables that reference the nodes to be
  controlled so that the connection between them is not lost.

- **Circular-Linked-List**
  The only difference between a circular linked list and a linked list is that the
  pointer to the next item of the last element (tail.next) does not a reference to undefined.
  In a circular doubly linked list, tail.next points to the first element and head.prev points to the last element:

- **Orted-Linked-List**
  instead of applying
  a sorting algorithm, we will insert element in its correct position a
  in order to keep the list always orderly.
