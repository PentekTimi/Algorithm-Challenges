Write a function that receives two strings and returns n, where n is equal to the number of characters we should shift the first string forward to match the second. The check should be case sensitive.<br>

For instance, take the strings "fatigue" and "tiguefa". In this case, the first string has been rotated 5 characters forward to produce the second string, so 5 would be returned.<br>
If the second string isn't a valid rotation of the first string, the method returns -1.<br>
Examples:<br>

"coffee", "eecoff" => 2<br>
"eecoff", "coffee" => 4<br>
"moose", "Moose" => -1<br>
"isn't", "'tisn" => 2<br>
"Esham", "Esham" => 0<br>
"dog", "god" => -1<br>
