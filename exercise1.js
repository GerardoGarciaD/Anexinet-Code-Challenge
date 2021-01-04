function sumOfTwoNumbers(a, b) {
  while (b != 0) {
    //   To make this operation without + operator, it is necessary to work with binaries

    let carry = a & b;
    //   Here, the AND (&) operator is used to obtain the carry, this is to see if there is any carry left
    // Example
    // 3  <->  00000011
    //           AND
    // 5  <->  00000101
    // ------------------
    //         00000001   This is the AND operator only returns 1 if both bits are 1

    a = a ^ b;
    // Here the XOR (^) operator is used to obtain the new value of a
    // Example
    // a  <->  00000011
    //           XOR
    // b  <->  00000101
    // ------------------
    //         00000110   This is the XOR (^) operator only returns 1 if both bits are different

    b = carry << 1;
    // Here the left shift operator (<<) operator is used to obtain the new value of b
    // Example
    // carry  <->   00000001
    //                  <<
    // ----------------------
    //              00000010  This operator only moves all the bits to the left by N, in this case just by 1
    //

    // This proccess is repeated until there is no carry left
  }

  return a;
}

sum = sumOfTwoNumbers(3, 5);

console.log(sum);
