The depth of an integer n is defined to be how many multiples of n it is necessary to compute before all 10 digits have appeared at least once in some multiple.<br>

example:<br>

let see n=42<br>

Multiple - value - digits - comment<br>
42*1 - 42 - 2,4 - ''<br>
42*2 - 84 - 8 - 4 existed<br>
42*3 - 126 - 1,6 - 2 existed<br>
42*4 - 168 - all existed - all existed<br>
42*5 - 210 - 0 - 2,1 existed<br>
42*6 - 252 - 5 - 2 existed<br>
42*7 - 294 - 9 - 2,4 existed<br>
42*8 - 336 - 3 - 6 existed<br>
42\*9 - 378 - 7 - 3,8 existed<br>

Looking at the above table under digits column you can find all the digits from 0 to 9, Hence it required 9 multiples of 42 to get all the digits. So the depth of 42 is 9. Write a function named computeDepth which computes the depth of its integer argument.Only positive numbers greater than zero will be passed as an input.<br>
