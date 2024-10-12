class Point {
  constructor(x, y, z) {
    this.coordinates = [x, y, z];
  }

  static sectors = {
    "+++": "Alfa",
    "++-": "Beta",
    "+-+": "Gama",
    "+--": "Delta",
    "-++": "Épsilon",
    "-+-": "Zeta",
    "--+": "Sigma",
    "---": "Ômega",
  };

  getSector() {
    const signs = this.coordinates
      .map((coord) => (coord >= 0 ? "+" : "-"))
      .join("");
    return Point.sectors[signs];
  }

  getDistance() {
    return Math.sqrt(
      this.coordinates.reduce((accum, current) => accum + current ** 2, 0)
    );
  }
}
