function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let amPm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12; // Convert 24h to 12h format
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let timeString = `${hours}:${minutes}:${seconds} ${amPm}`;
    document.getElementById("clock").textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock(); // Call immediately to avoid 1s delay