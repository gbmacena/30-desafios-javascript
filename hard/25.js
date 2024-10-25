function isValidDistribution(str) {
  const stack = [];
  const matchingBrackets = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let char of str) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isValidDistribution("()[]{}"));
console.log(isValidDistribution("(]"));
console.log(isValidDistribution("([{}])"));
console.log(isValidDistribution("{[()]}"));
console.log(isValidDistribution("{[(])}"));
console.log(isValidDistribution(""));
