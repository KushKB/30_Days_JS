let no=+25;                     // For converting any string we use '+' to convert it into number
let str="Hello this is string";
let boolea=true;
let arry=[1,2,3,4,5];
const cars=new Array("first","second","third");   // another type of initializing an array using new keyword

const obj={                     // object
    first:"This is obj variable",
    sec:"This is second"
}

const obj_2=[       // object inside array
    {
        first:"Hello this is Kush and this is revision of JS",
        sec:"This is second",
    },
    {
        first:"Hello this is Kush and this is second array",
        sec:"This is second, second time",
    }
]

console.log(typeof obj);
console.log(typeof obj_2);
console.log(Array.isArray(obj_2));
console.log(Array.isArray(obj));

console.log(obj_2[0].first);

