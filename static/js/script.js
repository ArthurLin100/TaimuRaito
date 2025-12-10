// static/js/script.js

import { seasons } from './seasons_2025_2100.js';
//GLOBAL VARIABLES
let NextSunriseTime = null;
let NextSunsetTime = null;
let TheNext4Seasons = null;

function collectThe8Seasons(the2Years, thisYear, the8Seasons) {
    for (const event of the2Years) {
        if (event.year == thisYear) { // This year
            if (event.phenom === "Equinox" && event.month === 3) {
              // Found Spring, store to index 0
              // example "2025-03-20T14:00:00Z"
              const [hourStr, minuteStr] = event.time.split(':')
              the8Seasons[0] = new Date(event.year.toString() + "-" + event.month.toString().padStart(2, '0') + "-" + event.day.toString().padStart(2, '0') +
                        "T" + hourStr.padStart(2, '0') + ":" + minuteStr.padStart(2, '0') + ":00Z");
            }
            else if (event.phenom === "Solstice" && event.month === 6){
            // Found Summer, store to index 1
            const [hourStr, minuteStr] = event.time.split(':')
            the8Seasons[1] = new Date(event.year.toString() + "-" + event.month.toString().padStart(2, '0') + "-" + event.day.toString().padStart(2, '0') +
                            "T" + hourStr.padStart(2, '0') + ":" + minuteStr.padStart(2, '0') + ":00Z");
            }
            else if (event.phenom === "Equinox" && event.month === 9){
              // Found Autumn, store to index 2
                const [hourStr, minuteStr] = event.time.split(':')
                the8Seasons[2] = new Date(event.year.toString() + "-" + event.month.toString().padStart(2, '0') + "-" + event.day.toString().padStart(2, '0') +
                          "T" + hourStr.padStart(2, '0') + ":" + minuteStr.padStart(2, '0') + ":00Z");
            }
            else if (event.phenom === "Solstice" && event.month === 12){
              // Found Winter, store to index 3
                const [hourStr, minuteStr] = event.time.split(':')
                the8Seasons[3] = new Date(event.year.toString() + "-" + event.month.toString().padStart(2, '0') + "-" + event.day.toString().padStart(2, '0') +
                          "T" + hourStr.padStart(2, '0') + ":" + minuteStr.padStart(2, '0') + ":00Z");
            }
        }
        else { // Next year
            if (event.phenom === "Equinox" && event.month === 3) {
              // Found Spring, store to index 4
              // example "2025-03-20T14:00:00Z"
              const [hourStr, minuteStr] = event.time.split(':')
              the8Seasons[4] = new Date(event.year.toString() + "-" + event.month.toString().padStart(2, '0') + "-" + event.day.toString().padStart(2, '0') +
                        "T" + hourStr.padStart(2, '0') + ":" + minuteStr.padStart(2, '0') + ":00Z");
            }
            else if (event.phenom === "Solstice" && event.month === 6){
            // Found Summer, store to index 5
            const [hourStr, minuteStr] = event.time.split(':')
            the8Seasons[5] = new Date(event.year.toString() + "-" + event.month.toString().padStart(2, '0') + "-" + event.day.toString().padStart(2, '0') +
                            "T" + hourStr.padStart(2, '0') + ":" + minuteStr.padStart(2, '0') + ":00Z");
            }
            else if (event.phenom === "Equinox" && event.month === 9){
              // Found Autumn, store to index 6
                const [hourStr, minuteStr] = event.time.split(':')
                the8Seasons[6] = new Date(event.year.toString() + "-" + event.month.toString().padStart(2, '0') + "-" + event.day.toString().padStart(2, '0') +
                          "T" + hourStr.padStart(2, '0') + ":" + minuteStr.padStart(2, '0') + ":00Z");
            }
            else if (event.phenom === "Solstice" && event.month === 12){
              // Found Winter, store to index 7
                const [hourStr, minuteStr] = event.time.split(':')
                the8Seasons[7] = new Date(event.year.toString() + "-" + event.month.toString().padStart(2, '0') + "-" + event.day.toString().padStart(2, '0') +
                          "T" + hourStr.padStart(2, '0') + ":" + minuteStr.padStart(2, '0') + ":00Z");
            }
        }
    }
}

function getNext4Seasons() {
    const now = new Date();
    const year = now.getUTCFullYear();
    const seasonsThisYear = seasons[year.toString()];
    const seasonsNextYear = seasons[(year+1).toString()];
    const the2Years = [...seasonsThisYear, ...seasonsNextYear];
    const the8Seasons = Array.from({ length: 8 }, () => ({}));

    collectThe8Seasons(the2Years, year, the8Seasons);
    let cnt = 0;
    for (const season of the8Seasons) {
        if ((season-now) > 0 ){ //this season is in the future, which is what we want
            break;
        }
        cnt++;
    }
    TheNext4Seasons = the8Seasons.slice(cnt, cnt+4);
    //console.table(TheNext4Seasons);
}

// input: Date object
function dateToDisplayStr( date ) {
    const year = date.getFullYear().toString();
    const month = (date.getMonth()+1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const milliseconds = date.getMilliseconds().toString().padStart(3, '0');

    const dateStr = year + "-" + month + "-" + day;
    const timeStr = hours + ":" + minutes + ":" + seconds + "." + milliseconds;
    // console.log(dateStr + " " + timeStr);
    return [dateStr, timeStr];
}

function updateNext4Seasons() {
    const seasonMap = {"03":"Spring", "06":"Summer", "09":"Autumn", "12":"Winter"};
    let seasonString = "";
    getNext4Seasons(); // update TheNext4Seasons
    if (!TheNext4Seasons) return;
    //console.table(TheNext4Seasons);

    const seasonNameElements = document.querySelectorAll('.season-name');
    seasonNameElements.forEach((element, index) => { // update season name
        const season = TheNext4Seasons[index];
        const month = (season.getMonth()+1).toString().padStart(2, '0');
        const seasonName = "Next " + seasonMap[month];
        element.textContent = seasonName;
    });

    const seasonTimeElements = document.querySelectorAll('.season-time');
    seasonTimeElements.forEach((element, index) => { // update season time
        const season = TheNext4Seasons[index];
        const [dateStr, timeStr] = dateToDisplayStr(season);
        element.textContent = dateStr + " " + timeStr;
    });

    //console.log("end of updateNext4Seasons");
}

// Update Current Time
function updateCurrentTime() {
    const timerDisplay = document.getElementById('timer-display');
    if (!timerDisplay) return;

    const now = new Date();

    // format the time string
    const [dateStr, timeStr] = dateToDisplayStr(now);
    timerDisplay.textContent = timeStr;

}

async function updateSunriseSunsetTime() {
    const sunriseDisplay = document.getElementById('sunrise-display');
    const sunsetDisplay = document.getElementById('sunset-display');
    const [sunriseUTC, sunsetUTC] = await getNextSunriseSunset();
    NextSunriseTime = sunriseUTC; //UPDATE the GLOBAL VARIABLE
    NextSunsetTime = sunsetUTC; //UPDATE the GLOBAL VARIABLE

    const [sunriseDateStr, sunriseTimeStr] = dateToDisplayStr(NextSunriseTime);
    const [sunsetDateStr, sunsetTimeStr] = dateToDisplayStr(NextSunsetTime);
    sunriseDisplay.textContent = sunriseTimeStr;
    sunsetDisplay.textContent = sunsetTimeStr;
}


// returning Promise so we can use await in async function getNextSunrise()
function getPosition() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

async function getNextSunriseSunset() {

    const pos = await getPosition();
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;

    // use setDate to get tmr
    const d = new Date();
    d.setDate(d.getDate() + 1);
    //TODO: here i am being lazy, that always calulate the NEXT DAY's sunrise. IDEALLY,
    //      if a user is checking at for example, 01:00, then the next sunrise should happen within the SAME DATE

    const dateStr = d.toISOString().split('T')[0];

    const url = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lon}&date=${dateStr}&formatted=0`;

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Network response was not ok: ${res.status}`);

      const data = await res.json();
      if (data.status !== 'OK' || !data.results || !data.results.sunrise) {
        throw new Error('API returned unexpected data: ' + JSON.stringify(data));
      }

      const sunriseUTC = new Date(data.results.sunrise);
      const sunsetUTC = new Date(data.results.sunset);
      if (isNaN(sunriseUTC) || isNaN(sunsetUTC)) throw new Error('Invalid sunrise/sunset time from API');


      return [sunriseUTC, sunsetUTC];
      /*
      return {
        date: dateStr,
        sunriseUTC: sunriseUTC.toISOString(),
        sunriseLocal: sunriseUTC.toLocaleString()
      };
      */
    } catch (err) {
      console.error('getNextSunriseSunset error:', err);
      throw err;
    }
}

//input: delta of a two Date objects
function dateDeltaToCountdownStr( diffMs, within24HoursFlag ) {
    const totalSeconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const milliseconds = diffMs % 1000;
    const days = (Math.floor(totalSeconds / 86400)); // 60x60x24 = 86400

    if (within24HoursFlag){
        const hours = (Math.floor(totalSeconds / 3600))% 24; // if longer than one day. blindly shift to the current date by %24

        const countdownStr =  hours.toString().padStart(2, '0') + ":" +
                            minutes.toString().padStart(2, '0') + ":" +
                            seconds.toString().padStart(2, '0') + ":" +
                            milliseconds.toString().padStart(3, '0');
        return countdownStr;
    }
    else{
        const hours = (Math.floor((totalSeconds % 86400) / 3600));

        const countdownStr = days.toString() + " Days " +
                            hours.toString().padStart(2, '0') + ":" +
                            minutes.toString().padStart(2, '0') + ":" +
                            seconds.toString().padStart(2, '0') + ":" +
                            milliseconds.toString().padStart(3, '0');
        return countdownStr;
    }
}

function update4SeasonsCountdown() {
    if (!TheNext4Seasons) throw new Error("TheNext4Seasons doesn't exist!");
    const now = new Date();
    const seasonCountdownElements = document.querySelectorAll('.season-countdown');
    seasonCountdownElements.forEach((element, index) => { // update season time
        const season = TheNext4Seasons[index];
        const diffMs = season - now;
        if (diffMs < 0){ // the season is in the past, need to update the season data
            getNext4Seasons();
            return;
        }
        const countdownStr = dateDeltaToCountdownStr(diffMs, 0);
        element.textContent = countdownStr;
    });

    //update progress bar
    const seasonCountdownProgressElements = document.querySelectorAll('.season-countdown-progress');
    seasonCountdownProgressElements.forEach((element, index) => { // update season time
        const season = TheNext4Seasons[index];
        const diffMs = season - now;
        const percent = Math.floor(diffMs / (86400000 * 365) * 100); // 1 day = 24*60*60*1000 =86400000 ms
        element.style.width = percent + "%";

    });
}

function updateSunriseCountdown() {
    if (!NextSunriseTime) return;

    const now = new Date();
    const diffMs = NextSunriseTime - now;

    if (diffMs <= 0) { // passed the sunrise time
      updateSunriseSunsetTime(); // to update NextSunriseTime again
      return; // don't update. wait for next call.
    }

    const countdownStr = dateDeltaToCountdownStr(diffMs, 1);
    document.getElementById('sunrise-countdown-display').textContent = countdownStr;

    //update progress bar
    const bar = document.getElementById('sunrise-countdown-progress');
    const percent = (Math.floor(diffMs / 86400000 * 100)) % 100; // 24*60*60*1000 =86400000 ms. If more than 100, which means more than one day, then truncate to within 1 day
    bar.style.width = percent + "%";

}

function updateSunsetCountdown() {
    if (!NextSunsetTime) return;

    const now = new Date();
    const diffMs = NextSunsetTime - now;

    if (diffMs <= 0) { // passed the sunrise time
      updateSunriseSunsetTime(); // to update NextSunriseTime again
      return; // don't update. wait for next call.
    }

    const countdownStr = dateDeltaToCountdownStr(diffMs, 1);
    document.getElementById('sunset-countdown-display').textContent = countdownStr;

    //update progress bar
    const bar = document.getElementById('sunset-countdown-progress');
    const percent = (Math.floor(diffMs / 86400000 * 100)) % 100; // 24*60*60*1000 =86400000 ms. If more than 100, which means more than one day, then truncate to within 1 day
    console.log("sunset diffMs = " + diffMs);
    console.log("sunset percent = " + percent);
    bar.style.width = percent + "%";
}


document.addEventListener('DOMContentLoaded', () => {
    updateCurrentTime();
    updateSunriseSunsetTime();
    updateNext4Seasons();

    // update every 100ms
    setInterval(updateCurrentTime, 100);
    setInterval(updateSunriseCountdown, 100);
    setInterval(updateSunsetCountdown, 100);
    setInterval(update4SeasonsCountdown, 100);
});
