Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.

Example
scores = [12, 24, 10, 24]
Scores are in the same order as the games played. She tabulates her results as follows:

<table>
    <tr>
        <td>Game</td>
        <td>Score</td>
        <td>Minimum</td>
        <td>Maximum</td>
        <td>Count min</td>
        <td>Count max</td>
    </tr>
    <tr>
        <td>0</td>
        <td>12</td>
        <td>12</td>
        <td>12</td>
        <td>0</td>
        <td>0</td>
    </tr>
    <tr>
        <td>1</td>
        <td>24</td>
        <td>12</td>
        <td>24</td>
        <td>0</td>
        <td>1</td>
    </tr>
    <tr>
        <td>2</td>
        <td>10</td>
        <td>10</td>
        <td>24</td>
        <td>1</td>
        <td>1</td>
    </tr>
    <tr>
        <td>3</td>
        <td>24</td>
        <td>10</td>
        <td>24</td>
        <td>1</td>
        <td>1</td>
    </tr>
</table>

Given the scores for a season, determine the number of times Maria breaks her records for most and least points scored during the season.

Function Description<br>
Complete the breakingRecords function in the editor below.

breakingRecords has the following parameter(s):<br>
int scores[n]: points scored per game

Returns<br>
int[2]: An array with the numbers of times she broke her records. Index 0 is for breaking most points records, and index 1 is for breaking least points records.

Input Format<br>
The first line contains an integer n, the number of games.
The second line contains n space-separated integers describing the respective values of score<sub>0</sub>, score<sub>1</sub>, ...,score<sub>n-1</sub>.
