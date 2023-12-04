
let someAarray = [3,8,9,'a', 'b', 'c', 2,5,7,'p'];

function examineNumbers(someArray){
let newArray = [];
    for(i=0; i<someArray.length;i++)

    if(i % 2 == 0){
        newArray = someAarray.push(i);
    
    }

 else if(i % 2 ==1){
    newArray = someAarray.push(i);
    
 }

else{
    return "this is  a character"
}
examineNumbers();
}

