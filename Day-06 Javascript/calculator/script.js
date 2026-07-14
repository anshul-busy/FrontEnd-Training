


function  display(val){
  document.getElementById("input") .value += val
}

function clearDisplay(){
    document.getElementById("input").value = ""
}

function calculate(){
   document.getElementById("input").value = eval(document.getElementById("input").value)
   }
