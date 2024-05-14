function LCS(x, y) {
  const subseq1 = subseqProd(x);
  const subSeq2 = subseqProd(y);
  let lcs = "";

  for (const sub1 of subseq1) {
    for (const sub2 of subSeq2) {
      if (sub1 === sub2 && sub1.length > lcs.length) {
        lcs = sub1;
      }
    }
  }

  return lcs;
}

function subseqProd(str) {
  const subsequences = [];

  function backtrack(subsequence, index) {
    if (index === str.length) {
      subsequences.push(subsequence);
      return;
    }
    backtrack(subsequence + str[index], index + 1);
    backtrack(subsequence, index + 1);
  }
  backtrack("", 0);
  return subsequences;
}
