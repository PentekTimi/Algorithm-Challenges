var wonderfulSubstrings = function (word) {
  const count = new Array(1 << 10).fill(0);

  count[0] = 1;

  let totalWonderfulSubstrings = 0;

  let charState = 0;

  for (const char of word) {
    charState ^= 1 << (char.charCodeAt(0) - "a".charCodeAt(0));

    totalWonderfulSubstrings += count[charState];

    for (let i = 0; i < 10; ++i) {
      totalWonderfulSubstrings += count[charState ^ (1 << i)];
    }

    count[charState]++;
  }

  return totalWonderfulSubstrings;
};

//

var wonderfulSubstrings = function (word) {
  let count = 0;

  const n = word.length;

  const freq = new Array(1024).fill(0);

  freq[0] = 1;

  let bitmask = 0;

  for (let i = 0; i < n; i++) {
    const charIndex = word.charCodeAt(i) - "a".charCodeAt();

    bitmask ^= 1 << charIndex;

    count += freq[bitmask];

    for (let j = 0; j < 10; j++) {
      const newBitMask = bitmask ^ (1 << j);

      count += freq[newBitMask];
    }

    freq[bitmask]++;
  }

  return count;
};
