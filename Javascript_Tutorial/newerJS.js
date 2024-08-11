// default params
function fun(first, second = 2){
    return first + second;
}
console.log(fun(1))

// spread
const intro =  {
    name : "Abhishek Pandey",
    course : "MCA",
    batch : 2025,
    mobile : 7415740587,
    Institute : "Maulana Azad National Institute of Technology"
}
console.log({...intro, category : "General"})

// Rest
function medals(gold, silver, ...others){
    console.log(`gold medal : ${gold}, silver medal : ${silver}, participation certificate : ${others}`)
}
medals("Abhishek", "Pulkit", "Shivani", "Karuna", "Amitesh");

// destructuring
const {name : fullName, mobile : phone} = intro;
console.log(fullName);
console.log(phone)