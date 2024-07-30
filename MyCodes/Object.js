const user={
    name:"poorvi",
    email:"poorvi1314@gmail.com"
}

const ob1={1:"a",2:"b"}
const ob2={5:"p",8:"j"}
const ob3={...ob1,...ob2}
console.log(ob3);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(user.hasOwnProperty('isLogged'));