// Các kiểu dữ liệu cơ bản P2 
// Array : mảng 
// cách 1  : được khuyên dùng 
let array : string[] = ["hung","sơn","nam"];
// cách 2  : không được khuyên dùng 
let array2 : Array<number> = [1,2,3,4,5];
array.push("khánh");
console.log(array);

// Object : định nghĩa 1 đối tượng : thuộc tính và phương thức
let obj : {
    id : string,
    name : string,
    age : number,
    sex : boolean,
    getInfo : () => string 
};
obj = {
    id: "1",
    name: "John",
    age: 20,
    sex : true,
    getInfo : ()=>{
        return "id : " + obj.id + "| name : " + obj.name + "| age : " + obj.age + "| sex : " + (obj.sex?"Nam" :"Nữ");
    }
}

console.log(obj.getInfo());

// enum : danh sách các hằng số 
enum Color {
    Red, Blue, Green=100, Pink, Yellow
}

console.log(Color.Yellow);

let color : Color = Color.Green;

// never : function - không bao giờ xảy ra (trả về giá trị)

// lỗi javascript
function error(message : string) : never {
    throw new Error(message); // ném lỗi trong JS 
}

// error("hom nay gia an đi học muộn")

// vòng lặp vô hạn
function infiniteLoop() : never {
    while(true) {
        console.log("Infinite Loop ");
        
    }
}
// infiniteLoop();

// Unknown  : chưa xác định kiểu dữ liệu (tương tự any)

let unknownVar:unknown  = 1;
unknownVar = "abc";
// console.log(unknownVar.length);

// Toán tử hang (bit)

// let a = 4&5;
// 100  = 4
// 101  = 5
//-----
// 100 => 4

// let a = !5;

let a = 10|11;
// 1010 = 10
// 1011 = 11
// -----
// 1011 = 11
console.log(a); 


// Kiểu giao cắt : cho phép khia báo 1 danh sách kiểu dữ liệu tùy biến

let numberOrString : number|string ;
numberOrString = 10;
numberOrString = "10";

let nameStudent : (number|string) & (string|boolean)| (string[]|undefined);
nameStudent = "cdjh";

type NameStudent = (number|string) & (string|boolean);

let nameStudent2 : NameStudent;
nameStudent2 = "cndgch";


type Student = {
    id : string,
    name : string,
    age : number,
    sex : boolean
}

let student1 : Student = 
{
    id : "1",
    name : "John",
    age : 20,
    sex : true
}

let students : Student[] ;
let students2 : Array<Student> ;


type Numbers = number;
let b : Numbers;

console.log(typeof array);




 





