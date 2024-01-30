const person = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};
for(const prop in person){
    console.log("Key : ", prop , " | Type : ", typeof(person[prop]));
}