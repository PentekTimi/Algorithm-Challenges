The makeLooper() function (or make_looper in your language) takes a string (of non-zero length) as an argument. It returns a function. The function it returns will return successive characters of the string on successive invocations. It will start back at the beginning of the string once it reaches the end.<br>

For example:<br>

var abc = makeLooper('abc');<br>
abc(); // should return 'a' on this first call<br>
abc(); // should return 'b' on this second call<br>
abc(); // should return 'c' on this third call<br>
abc(); // should return 'a' again on this fourth call<br>

Different loopers should not affect each other, so be wary of unmanaged global state.<br>
