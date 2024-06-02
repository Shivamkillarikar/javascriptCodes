function time() {
    const now = new Date();
    let hours = now.getHours();
    const meridiam = hours>=12 ? "PM" : "AM";
    hours= hours % 12 || 12;
    hours= hours.toString().padStart(2,0)
    let minutes = now.getMinutes().toString().padStart(2,0);
    let seconds = now.getSeconds().toString().padStart(2,0);
    t = `${hours} : ${minutes} : ${seconds} ${meridiam}`;
    document.getElementById("clock").textContent=t;
}
time();
setInterval(time,1000);