function ConClick() {
    let inputtemp = document.getElementById("InputVal").value;
    inputtemp = parseFloat(inputtemp);
    let result = (inputtemp*1.8)+32;
    document.getElementById("OutputVal").value = result;
}

function resetForm() {
    document.getElementById('InputVal').value = '';
    document.getElementById('OutputVal').value = '';
}