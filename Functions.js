//LengthPage
// for ft to meter
function LengthConverter(valNum) {

    document.getElementById("outputMeters").innerHTML = valNum / 3.2808;
}
function clearOutput() {
    document.getElementById("inputFeet").value = "";
    LengthConverter("");
}
//Inch to mm
function LengthConverterInchToMM(valNum) {

    document.getElementById("outputInchTomm").innerHTML = valNum * 25.4;
}
function clearOutputInchToMM() {
    document.getElementById("inputInch").value = "";
    LengthConverterInchToMM("");
}

//Yards to Meter
function LengthConverterYardsToM(valNum) {

    document.getElementById("outputYardsTOM").innerHTML = valNum / 1.094;
}
function clearOutputYardsToM() {
    document.getElementById("inputYardsToM").value = "";
    LengthConverterYardsToM("");
}

// miles To km

function LengthConverterMilesTokm(valNum) {

    document.getElementById("outputMILESTOkM").innerHTML = valNum * 1.609;
}
function clearOutputmILEStOKM() {
    document.getElementById("inputMilesTokm").value = "";
    LengthConverterMilesTokm("");
}


//Temperature Page


//farheinite to Celcius

function LengthConverterfarTOcel(valNum) {
    document.getElementById("outputFarTocel").innerHTML = (valNum - 32) * 5 / 9;
}
function clearOutputFartoCel() {
    document.getElementById("inputFarTocel").value = "";
    LengthConverterfarTOcel("");
}
//Celcius to farheinite

function LengthConverterCelTofar(valNum) {
    document.getElementById("outputCeltoFar").innerHTML = (valNum *9/5) +32;
}
function clearOutputCeltoFar() {
    document.getElementById("inputCelcius").value = "";
    LengthConverterCelTofar("");
}

// Area Page


// Square Inch To Square Milimeter
function LengthConverter11(valNum) {

    document.getElementById("outputMeters11").innerHTML = valNum * 645.16;
}
function clearOutput11() {
    document.getElementById("inputFeet11").value = "";
    LengthConverter11("");
}

// Square Feet To Square Meter
function LengthConverter22(valNum) {

    document.getElementById("outputMeters22").innerHTML = valNum / 10.764;
}
function clearOutput22() {
    document.getElementById("inputFeet22").value = ""; 
    LengthConverter22(""); 
}


// Square Yards To Square Meter:
function LengthConverter33(valNum) {

    document.getElementById("outputMeters33").innerHTML = valNum / 1.196;
}
function clearOutput33() {
    document.getElementById("inputFeet33").value = "0"; 
    LengthConverter33(""); 
}


// Masss Page


// for Ounces to Grams
function MassConverter(valNum) {

    document.getElementById("outputGrams").innerHTML = valNum *28.35;
}
function clearOutput1() {
    document.getElementById("InputOunce").value = "0"; // Clear the input field
    MassConverter(""); // Clear the output
}

//Pounds to Kilogram
function MassConverterlbsToKg(valNum) {

    document.getElementById("outputlbsTokg").innerHTML = valNum / 2.205;
}
function clearOutputlbstokg() {
    document.getElementById("InputPounds2").value = "0"; // Clear the input field
    MassConverterlbsToKg(""); // Clear the output
}

// Short Tons TO Mega grams
function MassConverterShortTonstoMegagram(valNum) {

    document.getElementById("outputmegagrams").innerHTML = valNum / 1.102;
}
function clearOutput3() {
    document.getElementById("InputShorttons3").value = "0"; // Clear the input field
    MassConverterShortTonstoMegagram(""); // Clear the output
}