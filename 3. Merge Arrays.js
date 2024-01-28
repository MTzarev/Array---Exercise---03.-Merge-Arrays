function mergeArrays(array1, array2) {
    let array3 = [];

    for (let i = 0; i < array1.length; i++) {
        let num1 = array1[i];
        let num2 = array2[i];

        if (i % 2 === 0) {
            array3.push(Number(num1) + Number(num2));
        } else {
            array3.push(num1 + num2);
        }
    }

    console.log(array3.join(` - `));
}
mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']);
//mergeArrays(['13', '12312', '5', '77', '4'],
//['22', '333', '5', '122', '44']);
