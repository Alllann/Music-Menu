setInterval(() => {
    // Code for updating the clock display for Canada (Kelowna) time zone
    const canadaTime = new Date().toLocaleString('en-ca', { timeZone: 'America/Vancouver' });
    updateClock(canadaTime, 'canadaHour', 'canadaMinute', 'canadaSecond');

    // Code for updating the clock display for Romanian time zone
    const romaniaTime = new Date().toLocaleString('ro-RO', { timeZone: 'Europe/Bucharest' });
    updateClock(romaniaTime, 'romaniaHour', 'romaniaMinute', 'romaniaSecond');

}, 1000);

function updateClock(timeString, hourId, minuteId, secondId) {
    const time = timeString.split(' ')[1]; // Extract the time part from the date string
    const [hour, minute, second] = time.split(':').map(Number);

    const hourRotation = 30 * hour + minute / 2;
    const minuteRotation = 6 * minute;
    const secondRotation = 6 * second;

    document.getElementById(hourId).style.transform = `rotate(${hourRotation}deg)`;
    document.getElementById(minuteId).style.transform = `rotate(${minuteRotation}deg)`;
    document.getElementById(secondId).style.transform = `rotate(${secondRotation}deg)`;
}
