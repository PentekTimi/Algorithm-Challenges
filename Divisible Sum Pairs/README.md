Given an array of integers and a positive integer k, determine the number of (i, j) pairs where i < j and a[i] + a[j] is divisible by k.

Example<br>
ar = [1, 2, 3, 4, 5, 6]<br>
k = 5

Three pairs meet the criteria: [1, 4], [2, 3] and [4, 6].

Function Description<br>
Complete the divisibleSumPairs function in the editor below.

divisibleSumPairs has the following parameter(s):<br>

* int n: the length of array ar
* int ar[n]: an array of integers
* int k: the integer divisor

Returns<br>
- int: the number of pairs

Input Format<br>
The first line contains 2 space-separated integers, n and k.<br>
The second line contains n space-separated integers, each a value of arr[i].

Sample Input<br>

<table>
    <tr>
        <td>STDIN</td>
        <td>Function</td>
    </tr>
    <tr>
        <td>6 3</td>
        <td>n = 6, k = 3</td>
    </tr>
    <tr>
        <td>1 3 2 6 1 2</td>
        <td>ar = [1, 3, 2, 6, 1, 2]</td>
    </tr>
</table>

Sample Output<br>
5

Explanation<br>

Here are the 5 valid pairs when k = 3:
* (0, 2) -> ar[0] + ar[2] = 1 + 2 = 3
* (0, 5) -> ar[0] + ar[5] = 1 + 2 = 3
* (1, 3) -> ar[1] + ar[3] = 3 + 6 = 9
* (2, 4) -> ar[2] + ar[4] = 2 + 1 = 3
* (4, 5) -> ar[4] + ar[5] = 1 + 2 = 3