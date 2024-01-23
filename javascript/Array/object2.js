// singaltone pattern

//const tinderUser= new object()

const tinderUser={}

 tinderUser.id="123asd4"
 tinderUser.name="Rahul"
 tinderUser.isLoggedIn=false

//console.log(tinderUser);

const regularUser={
    email:"su@123",
    fullname:{
        userfullname:{
            firstName:"nagendra",
            lastName:"sharma"
        }

    }
}

//console.log(regularUser.fullname.userfullname.firstName);

const obj1={1:"one", 2:"two", }
const obj2={3:"one", 4:"two", }
const obj4={5:"one", 6:"two", }


//const obj3={obj1,obj2}
//const obj3 =Object.assign({},obj1,obj2,obj4)

const obj3={...obj1,...obj2,...obj4}// use this concept
//console.log(obj3);

const  users=[
    {
        id:1,
        email:"su@123",
    },
    {
        id:2,
        email:"su@123",
    },
    {
        id:3,
        email:"su@123",
    },
    {
        id:4,
        email:"su@123",
    },
    

]
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("id"));

const course={
    courseName:"js",
    courseDuration:"30days",
    coursePrice:0,
    courseAuthor:"Nagendra",
    courseIsAvilable:true,
    courseDescription:"this is a course"
}
//course.coursePrice

const {courseName:courseAuthor} =course

console.log(courseName);
console.log(courseAuthor);


// {
//     name:"Nagendra",
//     "courseName":"js",
//     "courseDuration":"30days",
//     "coursePrice":"free"
// }

[
    {},
    {},
    {},
]

