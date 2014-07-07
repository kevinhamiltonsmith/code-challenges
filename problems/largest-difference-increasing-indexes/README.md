# Largest Difference in Increasing Indexes

Write a function which takes an array data of numbers and returns the largest difference in indexes j - i such that data[i] <= data[j].

The function takes an array of numbers. That array is not sorted. Do not sort it or change the order of the elements in any way, or their values.

Consider all of the pairs of numbers in the array where the first one is less than or equal to the second one.

From these, find a pair where their positions in the array are farthest apart.

Return the difference between the indexes of the two array elements in this pair.

To clarify:
```javascript
largestDifference([9,4,1,10,3,4,0,-1,-2]) == 4); // data[1] <= data[5], so 5 - 1 = 4
```

## Credits
Codewars: http://www.codewars.com/kata/52503c77e5b972f21600000e/train/javascript 
Codewars is amazing. If you haven't signed up for an account, go do it now.
