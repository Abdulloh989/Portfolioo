
function calc() {

    // console.log( document.getElementById("number-one").value)
    // console.log( document.getElementById("action").value)
    // console.log( document.getElementById("number-two").value)

    var numberOne = document.getElementById('number-one').value;
    var numberTwo = document.getElementById('number-two').value;
    var actoin = document.getElementById('action').value;
    var result;

    if (numberTwo == 0 && actoin == "divide"){
        document.getElementById('result').innerHTML = "<div class='alert alert-danger mt-3'> Xatolik! Sonni no'lga bo'lish mumkin emas !<button type='button' class='close' data-dismiss='alert'>&times;</button></div>"
    } else{



    if (actoin == "add"){
        result = parseFloat(numberOne) + parseFloat(numberTwo) ;
    } else if (actoin == "multiply"){
        result = numberOne * numberTwo;
    } else if (actoin == "divide"){
        result = numberOne / numberTwo;
    }  else {
        result = numberOne - numberTwo;
    }

    document.getElementById('result').innerHTML = "<div class='alert alert-primary mt-3'>Natija:<b>"+result+"</b><button type='button' class='close' data-dismiss='alert'>&times;</button></div>"
}
}


console.log(Math.pow(3, 5))