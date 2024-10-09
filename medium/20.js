function possiblePasswords(chars) {
  if (chars.length === 0) {
    return [[]];
  }

  const removedChar = chars[0];
  const partialChars = chars.slice(1);

  const partialPossibilites = possiblePasswords(partialChars);

  const allPossibilities = [];

  partialPossibilites.forEach((partialPossibility) => {
    for (let i = 0; i <= partialPossibility.length; i++) {
      const completePossibility = [
        ...partialPossibility.slice(0, i),
        removedChar,
        ...partialPossibility.slice(i),
      ];
      allPossibilities.push(completePossibility);
    }
  });

  return allPossibilities;
}
