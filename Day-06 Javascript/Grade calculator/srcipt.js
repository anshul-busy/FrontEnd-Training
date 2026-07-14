
function calculateGrade(){

    const marks = document.getElementById("marksInput").value
    const heading= document.getElementById("grade")
    if(marks>=90){
        console.log("A grade")
    }else if(marks<90 && marks>=75){
        console.log("B grade")
    }else if(marks<75 && marks>=60){
        console.log("C grade")
    }else if(marks<60 && marks>=45){
        console.log("D grade")
    }else {
        console.log("E grade (FAIL)")
    }
}

function inputChecker(){
    if(document.getElementById("marksInput").value = ""){
        alert("Value cannot be empty")
    }
}