function matrix0(matrix) {
  // These arrays will contain the indexes where the zeros may appear in the matrix
  let rowOf0 = [];
  let columnOf0 = [];

  // This first loops are to get the indexes of the rows and columns where the zeros appear
  matrix.forEach((eRow, indexRow) => {
    eRow.forEach((eColumn, indexColumn) => {
      if (eColumn === 0) {
        rowOf0.push(indexRow);
        columnOf0.push(indexColumn);
      }
    });
  });

  // This loop is to fill the whole row of zeros
  for (let i = 0; i < rowOf0.length; i++) {
    matrix.forEach((e, index) => {
      if (rowOf0[i] === index) {
        // A new array is created and filled with zeros and it replaces the old array
        let arr = new Array(e.length).fill(0);
        matrix.splice(index, 1, arr);
      }
    });
  }

  // This last loop is to change the values of the columns to zero
  for (let i = 0; i < columnOf0.length; i++) {
    matrix.forEach((eRow, indexRow) => {
      eRow.forEach((eColumn, indexColumn) => {
        if (indexColumn === columnOf0[i]) {
          matrix[indexRow][columnOf0[i]] = 0;
        }
      });
    });
  }

  return matrix;
}

resultMatrix = matrix0([
  [1, 2, 3, 3],
  [4, 0, 6, 4],
  [7, 4, 6, 0],
  [7, 8, 9, 7],
]);

console.table(resultMatrix);
