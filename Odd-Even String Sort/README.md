Given a string s, your task is to return another string such that even-indexed and odd-indexed characters of s are grouped and the groups are space-separated. Even-indexed group comes as first, followed by a space, and then by the odd-indexed part.<br>
Examples<br>

input: "CodeWars" => "CdWr oeas"<br>
indices: 01234567 0246 1357

Even indices 0, 2, 4, 6, so we have "CdWr" as the first group.<br>
Odd indices are 1, 3, 5, 7, so the second group is "oeas".<br>
And the final string to return is "Cdwr oeas".
