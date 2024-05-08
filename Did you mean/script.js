class Dictionary {
  constructor(words) {
    this.words = words;
  }

  findMostSimilar(term) {
    let minChanges = Infinity;
    let mostSimilarWord = "";

    for (let word of this.words) {
      const changes = this.calculateChanges(term, word);
      if (changes < minChanges) {
        minChanges = changes;
        mostSimilarWord = word;
      }
    }

    return mostSimilarWord;
  }

  calculateChanges(word1, word2) {
    const m = word1.length;
    const n = word2.length;

    const dp = [];

    for (let i = 0; i <= m; i++) {
      dp.push([]);
      for (let j = 0; j <= n; j++) {
        if (i === 0) {
          dp[i][j] = j;
        } else if (j === 0) {
          dp[i][j] = i;
        } else if (word1[i - 1] === word2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
        }
      }
    }

    return dp[m][n];
  }
}
