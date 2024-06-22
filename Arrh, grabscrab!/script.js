function grabscrab(anagram, dictionary) {
  return dictionary.reduce((result, word) => {
    const sortedAnagram = word.split("").sort().join();
    const sortedInput = anagram.split("").sort().join();
    if (sortedInput === sortedAnagram) {
      return [...result, word];
    }
    return result;
  }, []);
}
