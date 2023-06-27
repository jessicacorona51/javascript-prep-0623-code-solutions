const person = {
  firstName: 'Jessica',
  lastName: 'Corona',
  hobby: 'bowling',
};
console.log(person);

const fullName = "The person's name is: " + person.firstName + " " + person.lastName;
console.log(fullName);

person.job = "clerk";

const currentJob = "The person's current job is: " + person.job;
console.log(currentJob);

person["previousJob"] = "Nanny";

const oldJob = "The person's previous job is: " + person["previousJob"];
console.log(oldJob);

console.log(person);
