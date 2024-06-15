// Write a program that prints all the male people’s first name given a complex object 
const person = [
    {
        firstName : "Abhishek",
        lastName : "Pandey",
        gender : "Male"
    },
    {
        firstName : "Ritik",
        lastName : "Kumar",
        gender : "Male",
    },
    {
        firstName : "Naina",
        lastName : "Desai",
        gender : "Female"
    },
    {
        firstName : "Rishabh",
        lastName : "Gupta",
        gender : "Male"
    },
    {
        firstName : "Shivani",
        lastName : "Jha",
        gender : "Female"
    }
];
for(let i=0;i<person.length;i++){
    if(person[i].gender == "Male"){
        console.log(person[i].firstName);
    }
}