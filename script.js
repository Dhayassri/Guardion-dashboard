function updateData() {

    let voltage = (220 + Math.random() * 20).toFixed(1);

    let current = (3 + Math.random() * 3).toFixed(1);

    let power = (voltage * current).toFixed(0);

    let temp = (30 + Math.random() * 10).toFixed(1);
    let status = "🟢 NORMAL";

if(voltage < 223)
{
    status = "🔴 VOLTAGE DROP";
}

if(current > 5.5)
{
    status = "🟠 PEAK LOAD";
}

if(temp > 38)
{
    status = "🔥 OVERHEATING";
}

document.getElementById("status").innerText =
    status;

    document.getElementById("voltage").innerText =
        voltage + " V";

    document.getElementById("current").innerText =
        current + " A";

    document.getElementById("power").innerText =
        power + " W";

    document.getElementById("temp").innerText =
        temp + " °C";
}

setInterval(updateData, 1000);