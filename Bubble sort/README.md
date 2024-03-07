#Bubbleing around<br>

Since everybody hates chaos and loves sorted lists we should implement some more sorting algorithms. Your task is to implement a Bubble sort (for some help look at https://en.wikipedia.org/wiki/Bubble_sort) and return a list of snapshots after each change of the initial list.<br>

e.g.<br>

If the initial list would be l=[1,2,4,3] my algorithm rotates l[2] and l[3] and after that it adds [1,2,3,4] to the result, which is a list of snapshots.<br>

[1,2,4,3] should return [ [1,2,3,4] ]<br>
[2,1,4,3] should return [ [1,2,4,3], [1,2,3,4] ]<br>
[1,2,3,4] should return []<br>
