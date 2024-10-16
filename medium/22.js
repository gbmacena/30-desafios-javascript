function missingPrisoners(prisoners) {
  const sorted = prisoners.slice(0).sort((a, b) => a - b);
  const total = Number(sorted[sorted.length - 1]);
  const allPrisoners = [];

  for (let i = 0; i < total; i++) {
    const prisoner = i + 1;
    allPrisoners.push(prisoner.toString().padStart(4, "0"));
  }

  const missing = [];

  allPrisoners.forEach((prisoner) => {
    if (!sorted.includes(prisoner)) {
      missing.push(prisoner);
    }
  });

  return missing;
}
