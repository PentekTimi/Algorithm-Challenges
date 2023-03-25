Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note: 
- 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example

s = "12:01:00PM"<br>
Return "12:01:00"<br><br>
s = "12:01:00AM"<br>
Return "00:01:00"

Function Description<br>
Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):<br>
string s: a time in 12 hour format

Returns<br>
string: the time in 24 hour format

Input Format<br>
A single string s that represents a time in 12-hour clock format (i.e.: hh:mm:ssAM or hh:mm:ssPM).