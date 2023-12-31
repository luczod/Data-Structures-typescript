- ### Sift Up

If the inserted value is smaller than your parent (in the case of heap
Minimum, or larger than your Parent in the case of the maximum heap), we exchanged
the Element with your Parent. We will repeat this process until the heap
root has also been processed, updating Index and Parent after each exchange. (Swap)

- ### Sift Down

Sift Down operation consists of changing the element with your child
smaller (minimum heap) or larger (maximum heap). If element is smaller
than your son left (and index is also valid), we will exchange element
with your son Left.

- ### MaxHeap vs MinHeap

We can use the same code used with MinHeap to test
MaxHeap. The difference is that the larger value will
be at the root of the heap, not the smaller value

- ### Heapify

The heapify function has the same code as the siftDown method created
earlier in this chapter. The difference is that we also pass as
parameters the heap itself, its size and the comparison function we want to use.

- ### Heapshort

The heap sort algorithm is not a stable sorting algorithm, that is,
if the array is already sorted, it is possible that the values may
end in a different order.
