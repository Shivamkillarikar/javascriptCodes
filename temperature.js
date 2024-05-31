function convert() {
    let temperature = parseFloat(document.getElementById("1").value);
    if (!isNaN(temperature)) {
        if(document.getElementById("2").checked) {
        let celcius = (temperature - 32) * 5/9;
        document.getElementById("Result").textContent = celcius.toFixed(2);
        }else if(document.getElementById("3").checked) {
            let fahrenheit = (temperature * 9 /5) + 32;
            document.getElementById("Result").textContent=fahrenheit.toFixed(2);
        }
    } else {
        document.getElementById("Result").textContent = "Please enter a valid number";
    }
}