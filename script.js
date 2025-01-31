function toggleTheme() {
    document.body.classList.toggle("dark-theme");
}

// Prayer countdown
function updateCountdown() {
    const now = new Date();
    const times = [
        { name: "Fajr", time: "4:30" },
        { name: "Dhuhr", time: "13:30" },
        { name: "Asr", time: "16:45" },
        { name: "Maghrib", time: "19:15" },
        { name: "Isha", time: "20:45" }
    ];

    let nextPrayer = times.reduce((prev, curr) => {
        const [hours, minutes] = curr.time.split(":");
        const prayerTime = new Date();
        prayerTime.setHours(parseInt(hours), parseInt(minutes), 0);
        return (prayerTime > now && (!prev || prayerTime < prev.time)) ? { name: curr.name, time: prayerTime } : prev;
    }, null);

    if (nextPrayer) {
        const diff = (nextPrayer.time - now) / 1000;
        const hours = Math.floor(diff / 3600);
        const minutes = Math.floor((diff % 3600) / 60);
        document.getElementById("countdown").innerText = `Next Prayer: ${nextPrayer.name} in ${hours}h ${minutes}m`;
    }
}

setInterval(updateCountdown, 1000);
