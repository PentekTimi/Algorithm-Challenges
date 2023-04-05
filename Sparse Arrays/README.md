There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

Example<br>
strings = ["ab", " ab", "abc"]<br>
queries = ["ab", "abc", "bc"]

There are 2 instances of "ab", 1 of "abc" and 0 of "bc". For each query, add an element to the return array, results = [2, 1, 0].

Function Description<br>

Complete the function matchingStrings in the editor below. The function must return an array of integers representing the frequency of occurrence of each query string in strings.
matchingStrings has the following parameters:<br>

* string strings[n] - an array of strings to search
* string queries[q] - an array of query strings<br>

Returns<br>
int[q]: an array of results for each query

Input Format<br>
The first line contains and integer n, the size of strings[].<br>
Each of the next n lines contains a string strings[i].<br>
The next line contains q, the size of queries[].<br>
Each of the next q lines contains a string queries[i].<br>

Sample Input<br>
4<br>
aba<br>
baba<br>
aba<br>
xzxb<br>
3<br>
aba<br>
xzxb<br>
ab<br>

Sample Output<br>
2<br>
1<br>
0<br>