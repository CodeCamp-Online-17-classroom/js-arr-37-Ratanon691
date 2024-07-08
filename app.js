const array1 = [9, 17, 23, 5];
// ค่าที่มากกว่า 10
const result1 = array1.filter(num => num > 10)

const array2 = [1, 2, 3, 4];
// ค่าที่เป็นเลขคี่
const result2 = array2.filter(num => num % 2 == 1)

const array3 = [1, '1', 2, {}];
// ค่าที่ประเภทข้อมูลเป็น Number
const result3 = array3.filter(num => typeof num == `number`)
