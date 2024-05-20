"use strict";
// Các kiểu dữ liệu cơ bản P2 
// Array : mảng 
// cách 1  : được khuyên dùng 
let array = ["hung", "sơn", "nam"];
// cách 2  : không được khuyên dùng 
let array2 = [1, 2, 3, 4, 5];
array.push("khánh");
console.log(array);
// Object : định nghĩa 1 đối tượng : thuộc tính và phương thức
let obj;
obj = {
    id: "1",
    name: "John",
    age: 20,
    sex: true,
    getInfo: () => {
        return "id : " + obj.id + "| name : " + obj.name + "| age : " + obj.age + "| sex : " + (obj.sex ? "Nam" : "Nữ");
    }
};
console.log(obj.getInfo());
// enum : danh sách các hằng số 
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Pink"] = 101] = "Pink";
    Color[Color["Yellow"] = 102] = "Yellow";
})(Color || (Color = {}));
console.log(Color.Yellow);
let color = Color.Green;
// never : function - không bao giờ xảy ra (trả về giá trị)
// lỗi javascript
function error(message) {
    throw new Error(message); // ném lỗi trong JS 
}
// error("hom nay gia an đi học muộn")
// vòng lặp vô hạn
function infiniteLoop() {
    while (true) {
        console.log("Infinite Loop ");
    }
}
// infiniteLoop();
// Unknown  : chưa xác định kiểu dữ liệu (tương tự any)
let unknownVar = 1;
unknownVar = "abc";
// console.log(unknownVar.length);
// Toán tử hang (bit)
// let a = 4&5;
// 100  = 4
// 101  = 5
//-----
// 100 => 4
// let a = !5;
let a = 10 | 11;
// 1010 = 10
// 1011 = 11
// -----
// 1011 = 11
console.log(a);
// Kiểu giao cắt : cho phép khia báo 1 danh sách kiểu dữ liệu tùy biến
let numberOrString;
numberOrString = 10;
numberOrString = "10";
let nameStudent;
nameStudent = "cdjh";
let nameStudent2;
nameStudent2 = "cndgch";
let student1 = {
    id: "1",
    name: "John",
    age: 20,
    sex: true
};
let students;
let students2;
let b;
console.log(typeof array);
