
function VolumeConverter(valNum) {

    document.getElementById("OutputMeters1").innerHTML = valNum * 29.5735;
  
}
function clearOutput1() {
    document.getElementById("Inputfluidounces1").value = "0";
    VolumeConverter(""); 
}
function VolumeConverterGtoL(valNum) {

    document.getElementById("OutputLiters2").innerHTML = valNum * 3.785;
  
}
function clearOutputGtoL() {
    document.getElementById("InputGallons2").value = "0";
    VolumeConverterGtoL("");
}
function VolumeConverter3(valNum) {

    document.getElementById("OutputCubicMeters3").innerHTML = valNum / 35.315;
  
}
function clearOutput3() {
    document.getElementById("InputCubicFt3").value = "0"; 
    VolumeConverter3(""); 
}
function VolumeConverter4(valNum) {

    document.getElementById("OutputCubicMeter4").innerHTML = valNum / 1.308;
  
}
function clearOutput4() {
    document.getElementById("InputCubicYard4").value = "0"; 
    VolumeConverter4(""); 
}
