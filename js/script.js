var CelFah = true; //Saves boolean value for button function.//

function ConClickCF() {
    var inputtempCF = document.getElementById("InputValCF").value; //Fetch the user value and saves it.//

    if (inputtempCF == "") { //Alert popup will occur and reset the form if user press the converse button without inputing a value.//
        document.getElementById("InputValCF").value = "0";
        document.getElementById("OutputValCF").value = "";
        document.getElementById("CalculationCF").value = "";

        alert("Nilai yang dimasukan tidak valid! Silahkan input angka yang valid untuk melakukan konversi.");
        return;
    }

    inputtempCF = parseFloat(inputtempCF); //Turn user input into float value.//

    if (CelFah == true) { //Convert user input into the desired temperature.//
        var resultCF = (inputtempCF*1.8)+32;

        document.getElementById("OutputValCF").value = resultCF;
        document.getElementById("CalculationCF").value = `(9/5) * ${inputtempCF}°C + 32 = ${resultCF}°F`;

        document.getElementById("ConvSeqCF").innerHTML = "Rangkaian kalkulasi Celsius (°C) ke Fahrenheit (°F)";
    } else if (CelFah == false) { //Reverse which temperature to/got convert.//
        var resultCF = (inputtempCF-32)/1.8;

        document.getElementById("OutputValCF").value = resultCF;
        document.getElementById("CalculationCF").value = `(${inputtempCF}°F - 32)  / 1.8 = ${resultCF}°C`;

        document.getElementById("ConvSeqCF").innerHTML = "Rangkaian kalkulasi Fahrenheit (°F) ke Celsius (°C)";
    } else {
        console.log("error"); //Print an error message into console if .//
    }
    
    
}

function resetFormCF() { //Reset the form value.//
    document.getElementById('InputValCF').value = '0';
    document.getElementById('OutputValCF').value = '';
    document.getElementById('CalculationCF').value = '';
}

function reverseCF() { //Change boolean value for adjusting temperatue input/output.//
    CelFah = !CelFah;

    document.getElementById("InputValCF").value = "0";
    document.getElementById("OutputValCF").value = "";
    document.getElementById("CalculationCF").value = "";

    if (CelFah == false) {
        document.getElementById("ConvSeqCF").innerHTML = "Rangkaian kalkulasi Fahrenheit (°F) ke Celsius (°C)";
    } else if (CelFah == true) {
        document.getElementById("ConvSeqCF").innerHTML = "Rangkaian kalkulasi Celsius (°C) ke Fahrenheit (°F)";
    } else  {
        console.log(error);
    }
}

var CelVin = true;

function ConClickCK() {
    var inputtempCK = document.getElementById("InputValCK").value;

    if (inputtempCK == "") {
        document.getElementById("InputValCK").value = "0";
        document.getElementById("OutputValCK").value = "";
        document.getElementById("CalculationCK").value = "";

        alert("Nilai yang dimasukan tidak valid! Silahkan input angka yang valid untuk melakukan konversi.");
        return;
    }

    inputtempCK = parseFloat(inputtempCK);

    if (CelVin == true) {
        var resultCK = inputtempCK+273;

        document.getElementById("OutputValCK").value = resultCK;
        document.getElementById("CalculationCK").value = `${inputtempCK}°C + 273 = ${resultCK}°K`;

        document.getElementById("ConvSeqCK").innerHTML = "Rangkaian kalkulasi Celsius (°C) ke Kelvin(°K)";
    } else if (CelVin == false) {
        var resultCK = inputtempCK-273;

        document.getElementById("OutputValCK").value = resultCK;
        document.getElementById("CalculationCK").value = `${inputtempCK}°K - 273= ${resultCK}°C`;

        document.getElementById("ConvSeqCK").innerHTML = "Rangkaian kalkulasi Kelvin(°K) ke Celsius (°C)";
    } else {
        console.log("error");
    }
    
    
}

function resetFormCK() {
    document.getElementById('InputValCK').value = '0';
    document.getElementById('OutputValCK').value = '';
    document.getElementById('CalculationCK').value = '';
}

function reverseCK() {
    CelVin = !CelVin;

    document.getElementById("InputValCK").value = "0";
    document.getElementById("OutputValCK").value = "";
    document.getElementById("CalculationCK").value = "";

    if (CelVin == false) {
        document.getElementById("ConvSeqCK").innerHTML = "Rangkaian kalkulasi Kelvin(°K) ke Celsius (°C)";
    } else if (CelVin == true) {
        document.getElementById("ConvSeqCK").innerHTML = "Rangkaian kalkulasi Celsius (°C) ke Kelvin(°K)";
    } else  {
        console.log(error);
    }
}

var FahKel = true;

function ConClickKF() {
    var inputtempKF = document.getElementById("InputValKF").value;

    if (inputtempKF == "") {
        document.getElementById("InputValKF").value = "0";
        document.getElementById("OutputValKF").value = "";
        document.getElementById("CalculationKF").value = "";

        alert("Nilai yang dimasukan tidak valid! Silahkan input angka yang valid untuk melakukan konversi.");
        return;
    }

    inputtempKF = parseFloat(inputtempKF);

    if (FahKel == true) {
        var resultKF = 5/9 * (inputtempKF - 32) + 273;

        document.getElementById("OutputValKF").value = resultKF;
        document.getElementById("CalculationKF").value = `5/9 * (${inputtempKF}°F - 32) + 273 = ${resultKF}°K`;

        document.getElementById("ConvSeqKF").innerHTML = "Rangkaian kalkulasi Fahrenheit (°F) ke Kelvin(°K)";
    } else if (FahKel == false) {
        var resultKF = 9/5 * (inputtempKF - 273) + 32;

        document.getElementById("OutputValKF").value = resultKF;
        document.getElementById("CalculationKF").value = `9/5 * (${inputtempKF}°K - 273) + 32 = ${resultKF}°F`;

        document.getElementById("ConvSeqCK").innerHTML = "Rangkaian kalkulasi Kelvin(°K) ke Fahrenheit (°F)";
    } else {
        console.log("error");
    }
    
    
}

function resetFormKF() {
    document.getElementById('InputValKF').value = '0';
    document.getElementById('OutputValKF').value = '';
    document.getElementById('CalculationKF').value = '';
}

function reverseKF() {
    FahKel = !FahKel;

    document.getElementById("InputValKF").value = "0";
    document.getElementById("OutputValKF").value = "";
    document.getElementById("CalculationKF").value = "";

    if (FahKel == false) {
        document.getElementById("ConvSeqKF").innerHTML = "Rangkaian kalkulasi Kelvin(°K) ke Fahrenheit (°F)";
    } else if (FahKel == true) {
        document.getElementById("ConvSeqKF").innerHTML = "Rangkaian kalkulasi Fahrenheit (°F) ke Kelvin(°K)";
    } else  {
        console.log(error);
    }
}