Task<br><br>
You are given a target word and an array of strings. Your task is to count in how many ways you can build up a target word from the strings in the array. You need to use the whole string from the array, as many times as needed but you can not remove characters from those smaller strings.<br><br>
Example<br><br>
For target word example and array ['exa','exam','ple'] there is just 1 option how you can do it: taking strings 'exam' and 'ple'. So you should return 1 in this case.<br>
For target word example and array ['exa','exam','ple', 'mple'] we have 2 options: 'exa'+'mple' and 'exam'+'ple'. In this case you should return 2.<br>
For target word example and array ['exa','ple'] we can not construct target word, then return 0 for such case.<br><br>
Input<br><br>
As input you receive:<br>
target - target word as a string;<br>
arr - array of unique strings;<br>
All strings will be in lowercase. All inputs are valid.<br><br>
Output<br><br>
You should return a number in how many ways you can build up a target word from the strings in the array.<br>
Return 0 if it is impossible.<br>
For empty string as target you should return 1.
