# Longest Sequence of Non-Decreasing Cells

Write a function which takes a retangular grid of numbers, in array form, as an input. The goal of this function is to find the length of the longest non-decreasing sequence through adjacent, non-repeating cells (including diagonals). This function should accept a rectangular grid of arbitrary width and height.

For example, in the following grid, one legal path (though not the longest) that could be traced is 0->3->7->9 and its length would be 4.  

```
[[8, 2, 4]
,[0, 7, 1]
,[3, 7, 9]]
```

The path can only connect adjacent locations (you could not connect 8 -> 9). The longest possible sequence for this example would be of length 6 by tracing the path 0->2->4->7->7->9 or 1->2->4->7->7->9.

To clarify:
```javascript
function longestSequence(grid) {
  return 0;
}

// Returns 6 as the longest sequence length
longestSequence(
    [[8,2,4]
    ,[0,7,1]
    ,[3,7,9]]
); 
```
