function hello(){
    console.log("hello")
}

const hello = ()=>{
      console.log("hello")
}

function add(){
    return a+b
}

const add= (a,b)=>{
    return a+b
}
const a=add(10,20)
console.log(a)

function checkPrime(a){
    let count=0
    for (let i=2;i<a;i++){
        if(a%i==0){
            count++ 
        }
    }
    if(count ==1){
        console.log("Not Prime")
    }else {
    console.log("Prime")
    }
}

//High order function

function abc(){
    console.log("Hello world")
}

function myFunc(abc){   //function passed as a parameter is known as callback function
    return abc
}
a=myFunc(abc())
console.log(a)