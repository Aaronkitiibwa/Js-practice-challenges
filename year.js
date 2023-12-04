let yearOfbirth= prompt('what is your year of birth?');

function checkAge(a){
  let age =2023-yearOfbirth;
  if(age<18){
    console.log('you are a minor');
  }
  else if(age>18 && age<=36){
console.log('you are a youth');
  }
else {
  console.log('you are an elder');
}
}
console.log(checkAge());


