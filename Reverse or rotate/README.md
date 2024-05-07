The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).<br>

If the sum of a chunk's digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.<br>

If

    sz is <= 0 or if str == "" return ""
    sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".

Examples:<br>

("123456987654", 6) --> "234561876549"<br>
("123456987653", 6) --> "234561356789"<br>
("66443875", 4) --> "44668753"<br>
("66443875", 8) --> "64438756"<br>
("664438769", 8) --> "67834466"<br>
("123456779", 8) --> "23456771"<br>
("", 8) --> ""<br>
("123456779", 0) --> "" <br>
("563000655734469485", 4) --> "0365065073456944"<br>

Example of a string rotated to the left by one position:<br>
s = "123456" gives "234561".<br>
