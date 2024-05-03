Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.<br>

Rules for a smiling face:

    Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
    A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
    Every smiling face must have a smiling mouth that should be marked with either ) or D

No additional characters are allowed except for those mentioned.<br>

Valid smiley face examples: :) :D ;-D :~)<br>
Invalid smiley faces: ;( :> :} :]<br>
Example<br>

countSmileys([':)', ';(', ';}', ':-D']); // should return 2;<br>
countSmileys([';D', ':-(', ':-)', ';~)']); // should return 3;<br>
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;<br>

Note<br>

In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.
