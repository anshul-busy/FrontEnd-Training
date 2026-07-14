
function calculateGrade(){

    const marks = document.getElementById("marksInput").value
    const heading= document.getElementById("grade")
     if(marks.value == ""){
        alert("Value cannot be empty")
        return false
    }
    if(marks>=90){
        heading.innerText="A grade"

    }else if(marks<90 && marks>=75){
        heading.innerText="B grade"
    
    }else if(marks<75 && marks>=60){
        heading.innerText="C grade"
    }else if(marks<60 && marks>=45){
        heading.innerText="D grade"
    }else {
        heading.innerText="E grade"
    }
}

function inputChecker(){
   
}