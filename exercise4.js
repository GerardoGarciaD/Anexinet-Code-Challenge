function matrix0(matrix) {
  // These arrays will contian the indexes where the zeros may appear
  let rowOf0 = [];
  let columnOf0 = [];

  matrix.forEach((eRow, indexRow) => {
    eRow.forEach((eColumn, indexColumn) => {
      if (eColumn === 0) {
        rowOf0.push(indexRow);
        console.log(rowOf0);
        columnOf0.push(indexColumn);

        console.log(columnOf0);
      }
    });
  });

  for (let i = 0; i < rowOf0.length; i++) {
    matrix.forEach((e, index) => {
      if (rowOf0[i] === index) {
        let arr = new Array(e.length).fill(0);
        matrix.splice(index, 1, arr);
      }
    });
  }
  for (let i = 0; i < columnOf0.length; i++) {
    matrix.forEach((eRow, indexRow) => {
      eRow.forEach((eColumn, indexColumn) => {
        if (indexColumn === columnOf0[i]) {
          matrix[indexRow][columnOf0[i]] = 0;
        }
      });
    });
  }

  console.log(matrix);
}

matrix0([
  [1, 2, 3],
  [4, 0, 6],
  [7, 0, 5],
  [7, 8, 9],
]);
