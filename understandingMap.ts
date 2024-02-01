//The Array.map() is an inbuilt TypeScript function that is used to create a new array with the results of calling a provided function on every element in this array.
//for running this typescript code open terminal on file location(C:\Asif\Asif Projects\typescript code>) and fire the command "npm install -g ts-node" and then "ts-node understandingMap.ts"
//one cannot specify the array size in typescript
const values = [11,89,23,7,98];

const logOfvalues = values.map(Math.log);

console.log(logOfvalues);
//------------------------------------------------------------------------------------------------------------------------------------

var arr = [2,5,6,3,8,9];
//function(val, index) is called for each value of arr and the index is the index of each value
var newArr = arr.map(function(val, index){
    console.log("key:", index, "value:", val*val)
})

console.log("the new array returned by mapping", newArr[0]);// producing undefined result , fix it

//------------------------------------------------------------------------------------------------------------------------------------
interface Student {
    id: number;
    name: string;
}

interface Mark {
    id: number;
    studentId: number;
    subject: string;
    marks: number;
}
// Example data
const students: Student[] = [
    { id: 1, name: 'kav' },
    { id: 2, name: 'maf' },
    { id: 3, name: 'floof' }
];

const marks: Mark[] = [
    { id: 1, studentId: 1, subject: 'maths', marks: 70 },
    { id: 2, studentId: 1, subject: 'science', marks: 80 },
    { id: 3, studentId: 1, subject: 'art', marks: 60 },
    { id: 4, studentId: 2, subject: 'botany', marks: 50 },
    { id: 5, studentId: 2, subject: 'algebra', marks: 40 },
    { id: 6, studentId: 2, subject: 'spanish', marks: 30 },
    { id: 7, studentId: 3, subject: 'arabic', marks: 90 },
    { id: 8, studentId: 3, subject: 'geology', marks: 91 },
    { id: 9, studentId: 3, subject: 'computer science', marks: 92 }
    
 
];

//write instructions to get the name of the students and the different subjects they are studying
let individualSubjects : Mark[];

let a : any;
let b: string[]=[];
const studentAndTheirSubjects = findSubjects(students, marks);
function findSubjects(students: Student[], marks: Mark[]): {name:string, totalSubs: string[]}[] {
      students.map( stdnt => {
         individualSubjects = marks.filter(mark =>mark.studentId === stdnt.id);
    
        
        //  individualSubjects.forEach(iS=>{
        //     b.push(iS.subject);
        // })

        const subjects = marks.filter(mark =>mark.studentId === stdnt.id).map(marks => marks.subject);
        console.log(subjects);

        a = { name : stdnt.name, 
            totalSubs : subjects
        }
        // console.log(individualSubjects);
    
        
    });
    return a;
   
}

console.log(a);


// trying some array things
var mixedDatatypeArray : (string | number)[] = ['Apple',2, 'Orange', 3, 'Bananan'];

console.log("Mixed DataType Array", mixedDatatypeArray); //works

console.log("Accessing string-------"+ mixedDatatypeArray[0] + " ,datatype is--- " + typeof mixedDatatypeArray[0]);
console.log("Accessing number -------"+ mixedDatatypeArray[1]+ " ,datatype is--- " + typeof mixedDatatypeArray[1]);

//multi dimensional array
var multidimensionalArray : (string | number)[][]= [['apple',1,'orange'],[4,'coke','pepsi']];
console.log(multidimensionalArray[0][1]);
console.log(multidimensionalArray[1][2]);

//creating an array object
let arrayObject : string[] = new Array('Apple','oranges', 'water'); //one cannot specify the array size in typescript
for(var i = 0; i<arrayObject.length ; i++)
console.log("Array created by an object--------"  +    arrayObject[i])

//typescript Spread operator
//the spread operator can be used to initialize array from another array. 
let arr1 = [1,2,3];
let arr2 = [4,5,6];
//create new array from existing array
let copyArray = [...arr1];
console.log("CopiedArray: "+copyArray);
//create new array from existing array with more elements
let newArray = [...arr1, 7, 8];
console.log("newArray: "+newArray);
//create array by merging two arrays
let mergedArray = [...arr1, ...arr2];
console.log("mergedArray: "+mergedArray);

//push function appends values at the end and return the length

var length = arr1.push(10, 56);
console.log("pushed 10 and 56 at the end in arr1---" + arr1+ "---------and the length is----" + length)

//Array.splice() changes the content of an array , adding new elements and removing old elements
var arrayForSpliceDemo = [1,2,3,4,5,6,7,8,9,10];
var deletedElements= arrayForSpliceDemo.splice(2, 4, ... [100,200]);
console.log(arrayForSpliceDemo);
console.log("deletedElements----------" + deletedElements);

//Array.reduce() is an inbuilt function which is used to apply a function against two values of the array as to reduce to a single value
var reduceDemoArray = [10,20, 30];
var emptyArray = [];
var index = 2;
var reducedValue = reduceDemoArray.reduce(function(a, b)
{
   

    return a*b/2;
    // [10,20,30] 
    // 10*20 = 200
    // 200/2 = 100
    // [100, 30]
    // 100*30 = 3000
    // 3000/2 = 1500

    // reducedValue = 1500

});
console.log("The total reduced value is = "+reducedValue);

//The Array.some() is a function to check for some element in the array that pass the test implemented by the provided function

var ArraySomeDemo = [1,-2, 7 , 9,3]
function isNegative(element: number)
{
    return element<0;
}
var isNegativePresent = ArraySomeDemo.some(isNegative);
console.log( "is Negative Present?  "+ isNegativePresent);


//The Array.map() is a function that is used to create a new array with the result of calling a provided function on every element in this array
var mapArrayDemo = [2,4,5,6,3];
var afterMappingArray = mapArrayDemo.map( (elem)=>
{
   return elem*elem;  //we must return a value to be filled in the aferMappingArray
}
);
console.log("After mapping all the elements of the array the array are-----"+ afterMappingArray);

var afterMappingArray2 = mapArrayDemo.map(function(val, index)
{
    console.log("key : ", index, "value : ", val*val)
    return val*val
})
console.log("After mapping all the elements of the array the array are-----"+ afterMappingArray2);


// The Array.filter() is a function that is used to create a new array with all elements that pass the test implemented by the provided function 
var filterDemoArray = [3,5,2,1,6,3,32];
var afterFilterArray = filterDemoArray.filter(function(value)
{
    return (value %2 ==1);
});
console.log("After filtering all the elements of the array are-----"+ afterFilterArray);


// test question --------------------------------------------------------------------------------------------------------------------------------------
// expected output
// studentName-----kav--------marks--210
// studentName-----maf--------marks--120
// studentName-----floof--------marks--273
interface Student {
    id: number;
    name: string;
}
 
interface Mark {
    id: number;
    studentId: number;
    subject: string;
    marks: number;
}
// Example data
const students1: Student[] = [
    { id: 1, name: 'kav' },
    { id: 2, name: 'maf' },
    { id: 3, name: 'floof' }
];
 
const marks1: Mark[] = [
    { id: 1, studentId: 1, subject: 'maths', marks: 70 },
    { id: 2, studentId: 1, subject: 'science', marks: 80 },
    { id: 3, studentId: 1, subject: 'english', marks: 60 },
    { id: 4, studentId: 2, subject: 'science', marks: 50 },
    { id: 5, studentId: 2, subject: 'maths', marks: 40 },
    { id: 6, studentId: 2, subject: 'english', marks: 30 },
    { id: 7, studentId: 3, subject: 'maths', marks: 90 },
    { id: 8, studentId: 3, subject: 'science', marks: 91 },
    { id: 9, studentId: 3, subject: 'english', marks: 92 }
    // ... other marks
];
class StudentWithTotalMarks{
    name: string;
    totalMarks : number;
    constructor(name : string, totalMarks: number){
        this.name = name;
        this.totalMarks = totalMarks;
    }
}

var studentTotalMarks   = students1.map(
    (student)=>{
    const   studentMarks = marks.filter( mark => mark.studentId === student.id).reduce((a,b)=>
       a + b.marks, 0
       );
  
       return new StudentWithTotalMarks(student.name, studentMarks)
       

    }

)
for(var i=0; i<studentTotalMarks.length;i++)
console.log("studentName-----" +studentTotalMarks[i].name + "--------marks--" + studentTotalMarks[i].totalMarks)
