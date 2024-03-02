snail = function (array) {
  if (array.length <= 1) return array[0];

  let max = { x: array.length - 1, y: array.length - 1 };
  let min = { x: 0, y: 0 };
  let current = { x: 0, y: 0 };
  let direction = { x: 1, y: 0 };

  let output = [];
  let outputSize = array.length * array.length;

  while (output.length != outputSize) {
    output.push(array[current.y][current.x]);

    current.x += direction.x;
    current.y += direction.y;

    if (current.x > max.x) {
      // going down
      direction.x = 0; // because we don't want to add to x right now, as we want to move 'vertically'
      direction.y = 1; // we will want to add to y, to move forward on the y axis
      min.y += 1; // this statement runs when we finished traversing an array, reason why to increment min y
      current.x = max.x; // set it to max so it jumps to the end of arrays
      current.y += 1; // or set it to one
    } else if (current.x < min.x) {
      //going up
      direction.y = -1; // start to go back on the y axis
      direction.x = 0; // set x back to 0
      max.y -= 1; //reduce the size of max y because we already added it to the output
      current.x = min.x;
      current.y -= 1;
    } else if (current.y > max.y) {
      //going left
      direction.y = 0; // we want to stop adding to y
      direction.x = -1; // we want to start moving on the x axis backwards
      max.x -= 1; // we added all of the last elemnts from the arrays so we set the max x to 1 lower
      current.y = max.y; // we stay at the max y array
      current.x -= 1; // we start decrementing the x
    } else if (current.y < min.y) {
      //going right
      direction.x = 1; // we will want to increment the current.x by one
      direction.y = 0; // we don't want to change the y position
      min.x += 1; // increment min x because we added all the first elements from the array to the output
      current.x += 1; // incremnt the current x as we added all the first elements to the output
      current.y = min.y; // we already traversed the array at position y = 0 for example, so we set the current y to the min y which keeps track of the correct location
    }
  }
  return output;
};
