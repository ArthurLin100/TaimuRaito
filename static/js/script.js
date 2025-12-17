// static/js/script.js

import { seasons } from './seasons_2025_2100.js';
//GLOBAL VARIABLES
let NextSunriseTime = null;
let NextSunsetTime = null;
let TheNext4Seasons = null;
let UserTimerInputDate = null;
let UserTimerTotalMs = null;
let UserPosition = null; // Store user's position globally
let UpdateFrequencyMs = 100; // default to 100 ms

// Store interval IDs for updating
let intervalIds = {
    currentTime: null,
    sunriseCountdown: null,
    sunsetCountdown: null,
    seasonsCountdown: null,
    userCountdown: null
};

const updateFreqLabel = document.querySelector('label[for="updateFreqRange"]');
const rangeToFreqMap = [
    { "freq": 100, "label": "100 ms ⚡" },   // 0
    { "freq": 1000, "label": "1 second 🐢" },    // 1
    { "freq": 60000, "label": "1 minute 🐇" },   // 2
    { "freq": 3600000, "label": "1 hour 🦥" }  // 3   
    ];


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
    const timeStr = hours + ":" + minutes + ":" + seconds;
    // + "." + milliseconds;
    // console.log(dateStr + " " + timeStr);
    return [dateStr, timeStr];
}

function updateNext4Seasons() {
    const seasonMap = {"03":"Spring", "06":"Summer", "09":"Autumn", "12":"Winter"};
    let seasonString = "";
    getNext4Seasons(); // update TheNext4Seasons
    if (!TheNext4Seasons) return;    

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
        element.innerHTML = "📆 " +dateStr + "<br>🕰️ " + timeStr;
    });
    
}

// Update Current Time
function updateCurrentTime() {
    const timerDisplay = document.getElementById('timer-display');
    if (!timerDisplay) return;

    const now = new Date();

    // format the time string
    const [dateStr, timeStr] = dateToDisplayStr(now);
    timerDisplay.textContent = "🕰️ " + timeStr + "." + now.getMilliseconds().toString().padStart(3, '0');

}

async function updateSunriseSunsetTime() {
    const date = new Date();
    const sunriseDisplay = document.getElementById('sunrise-display');
    const sunsetDisplay = document.getElementById('sunset-display');
    const [sunriseUTC, sunsetUTC] = await getNextSunriseSunset(date);
    NextSunriseTime = sunriseUTC; //UPDATE the GLOBAL VARIABLE
    NextSunsetTime = sunsetUTC; //UPDATE the GLOBAL VARIABLE

    const [sunriseDateStr, sunriseTimeStr] = dateToDisplayStr(NextSunriseTime);
    const [sunsetDateStr, sunsetTimeStr] = dateToDisplayStr(NextSunsetTime);
    sunriseDisplay.textContent = "🕰️ " + sunriseTimeStr;
    sunsetDisplay.textContent = "🕰️ " + sunsetTimeStr;
}

function formatLatLon(lat, lon, decimals = 4) {
  if (typeof lat !== "number" || typeof lon !== "number") {
    return "";
  }

  const latDir = lat >= 0 ? "N" : "S";
  const lonDir = lon >= 0 ? "E" : "W";

  const latAbs = Math.abs(lat).toFixed(decimals);
  const lonAbs = Math.abs(lon).toFixed(decimals);

  return `${latAbs}° ${latDir}, ${lonAbs}° ${lonDir}`;
}

// returning Promise so we can use await in async function getNextSunrise()
function getPosition() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

async function reverseGeocode(lat, lon) {
    try {
        const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&addressdetails=1&accept-language=en`
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Reverse geocoding error:', error);
        throw error;
    }
}

async function getUserLocationString() {
    if (!UserPosition) {
        return "Unknown Location";
    }
    const lat = UserPosition.coords.latitude;
    const lon = UserPosition.coords.longitude;
    
    try {
        const data = await reverseGeocode(lat, lon);
        const address = data.address;
        const city = address.city || address.town || address.village || address.hamlet || "";
        const state = address.state || "";
        const country = address.country || "";
        let locationString = "";
        if (city) locationString += city;
        if (state) locationString += (locationString ? ", " : "") + state;
        if (country) locationString += (locationString ? ", " : "") + country;
        return locationString || "Unknown Location";
    } catch (error) {
        //display lat lon if reverse geocoding fails
        console.error('Error getting user location string:', error);
        const latLonStr = formatLatLon(lat, lon); //display lat lon instead
        if (latLonStr) {
            return latLonStr;
        }        
        return "Unknown Location";
    }
}

async function updateLocationDisplay() {
    const sunriseLocation = document.getElementById('sunrise-location');
    const sunsetLocation = document.getElementById('sunset-location');
    
    if (!sunriseLocation || !sunsetLocation) return;
    
    try {
        const locationString = await getUserLocationString();
        sunriseLocation.textContent = locationString;
        sunsetLocation.textContent = locationString;
    } catch (error) {
        console.error('Error updating location display:', error);
        sunriseLocation.textContent = "Location unavailable";
        sunsetLocation.textContent = "Location unavailable";
    }
}

async function getNextSunriseSunset( date, recursiveCall = false ) {    
    if (!UserPosition) {
        throw new Error('User position not available');
    }

    const lat = UserPosition.coords.latitude;
    const lon = UserPosition.coords.longitude;

    const dateStr = date.toISOString().split('T')[0];

    const url = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lon}&date=${dateStr}&formatted=0`;

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Network response was not ok: ${res.status}`);

      const data = await res.json();
      if (data.status !== 'OK' || !data.results || !data.results.sunrise) {
        throw new Error('API returned unexpected data: ' + JSON.stringify(data));
      }

      let sunriseUTC = new Date(data.results.sunrise);
      let sunsetUTC = new Date(data.results.sunset);
      if (isNaN(sunriseUTC) || isNaN(sunsetUTC)) throw new Error('Invalid sunrise/sunset time from API');

      if ((sunriseUTC < date || sunsetUTC < date) && recursiveCall === false) {
        //  console.log("Sunrise or sunset already passed for the date:", dateStr);
        // If the calculated sunrise or sunset is before the current date/time, fetch for the next day
        const nextDate = new Date(date);
        nextDate.setDate(nextDate.getDate() + 1);
        let [sunriseUTC2, sunsetUTC2] = await getNextSunriseSunset(nextDate, true); // recursive call for next day
        
        if (sunriseUTC < date) { // if today's sunrise already passed, use tmr's
          sunriseUTC = sunriseUTC2;
        //   console.log("Using next day's sunrise:", sunriseUTC.toISOString());
        }
        if (sunsetUTC < date) { // if today's sunset already passed, use tmr's
          sunsetUTC = sunsetUTC2;
        //   console.log("Using next day's sunset:", sunsetUTC.toISOString());
        }
      }
      
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
                            seconds.toString().padStart(2, '0') + "." +
                            milliseconds.toString().padStart(3, '0');
        return countdownStr;
    }
    else{
        const hours = (Math.floor((totalSeconds % 86400) / 3600));

        const countdownStr = days.toString() + " Days " +
                            hours.toString().padStart(2, '0') + ":" +
                            minutes.toString().padStart(2, '0') + ":" +
                            seconds.toString().padStart(2, '0') + "." +
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
        element.textContent = "⌛" + countdownStr;
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
    document.getElementById('sunrise-countdown-display').textContent = "⌛" + countdownStr;

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
    document.getElementById('sunset-countdown-display').textContent = "⌛" + countdownStr;

    //update progress bar
    const bar = document.getElementById('sunset-countdown-progress');
    const percent = (Math.floor(diffMs / 86400000 * 100)) % 100; // 24*60*60*1000 =86400000 ms. If more than 100, which means more than one day, then truncate to within 1 day
    bar.style.width = percent + "%";
}

function loadUserTimerFromCache() {

//let UserTimerInputDate = null;
//let UserTimerTotalMs = null;    
    const userTimerName = localStorage.getItem("UserTimerName");
    const userTimerInputDateMs = localStorage.getItem("UserTimerInputDate");
    const userTimerTotalMs = localStorage.getItem("UserTimerTotalMs");
    if (userTimerInputDateMs && userTimerTotalMs) { 
        UserTimerInputDate = new Date(parseInt(userTimerInputDateMs));
        UserTimerTotalMs = parseInt(userTimerTotalMs);
        const [dateStr, timeStr] = dateToDisplayStr(UserTimerInputDate);

        const userTimerNameElement = document.getElementById("user-timer-name");
        const userTimerTimeElement = document.getElementById("user-timer-time");
        
        // 設定名稱，如果沒有儲存的名稱就用預設值
        userTimerNameElement.textContent = userTimerName || "My Countdown";
        userTimerTimeElement.innerHTML = "📆 " +dateStr + "<br>🕰️ " + timeStr;        
    }
}

document.getElementById("user-timer-clear-btn").addEventListener("click", () => {
    UserTimerInputDate = null; // clear the GLOBAL VARIABLE
    UserTimerTotalMs = null;
    const userTimerName = document.getElementById("user-timer-name");
    const userTimerTime = document.getElementById("user-timer-time");
    userTimerName.textContent = "My Countdown";
    userTimerTime.textContent = "--:--:--.---";
    document.getElementById('user-timer-countdown').textContent = "--:--:--.---";
    const bar = document.getElementById('user-timer-progress');
    bar.style.width = "0%";
    // clear the input fields
    document.getElementById("user-timer-name-input").value = "";
    document.getElementById("user-timer-time-input").value = "";
    // clear the timer info from cache
    localStorage.removeItem("UserTimerName");    
    localStorage.removeItem("UserTimerInputDate");
    localStorage.removeItem("UserTimerTotalMs");
})

document.getElementById("user-timer-set-btn").addEventListener("click", () => {
    const userTimerNameInput = document.getElementById("user-timer-name-input");
    const userTimerTimeInput = document.getElementById("user-timer-time-input");
    
    if (!userTimerTimeInput.value) {
        alert("Please enter a time.");
        return;
    }

    UserTimerInputDate = new Date(userTimerTimeInput.value); // update the GLOBAL VARIABLE
    const now = new Date();
    const diffMs = UserTimerInputDate - now;
    if (diffMs <= 0) {
        alert("Please enter a future date and time.");
        return;
    }


    UserTimerTotalMs = diffMs; // store the total duration for progress bar calculation
    const [dateStr, timeStr] = dateToDisplayStr(UserTimerInputDate);

    const userTimerName = document.getElementById("user-timer-name");
    const userTimerTime = document.getElementById("user-timer-time");
    userTimerTime.innerHTML = "📆 " +dateStr + "<br>🕰️ " + timeStr;
    
    // always update the name
    const timerName = userTimerNameInput.value || "My Countdown";
    userTimerName.textContent = timerName;
    localStorage.setItem("UserTimerName", timerName); // always save the name

    // store the timer info to cache
    localStorage.setItem("UserTimerInputDate", UserTimerInputDate.getTime());
    localStorage.setItem("UserTimerTotalMs", UserTimerTotalMs);

});

function updateUserCountdown() {
    if (!UserTimerInputDate) return;
    const now = new Date();
    const diffMs = UserTimerInputDate - now;
    if (diffMs <= 0) {
        document.getElementById('user-timer-countdown').textContent = "00:00:00:000";
        return;
    }
    const countdownStr = dateDeltaToCountdownStr(diffMs, 0);
    document.getElementById('user-timer-countdown').textContent = "⌛" + countdownStr;

    //update progress bar
    const bar = document.getElementById('user-timer-progress');
    const percent = (Math.floor(diffMs / UserTimerTotalMs * 100));
    bar.style.width = percent + "%";
}

// Event listeners for updateFreqRange
document.getElementById('updateFreqRange')?.addEventListener('input', (e) => {

    UpdateFrequencyMs = rangeToFreqMap[e.target.value].freq || 100; //update the GLOBAL VARIABLE, default to 100 ms
    console.log('Update frequency changed to:', UpdateFrequencyMs, 'ms');
    updateFreqLabel.textContent = rangeToFreqMap[e.target.value].label;    
    
    // Clear old intervals and create new ones with updated frequency
    clearInterval(intervalIds.currentTime);
    clearInterval(intervalIds.sunriseCountdown);
    clearInterval(intervalIds.sunsetCountdown);
    clearInterval(intervalIds.seasonsCountdown);
    clearInterval(intervalIds.userCountdown);
    
    intervalIds.currentTime = setInterval(updateCurrentTime, UpdateFrequencyMs);
    intervalIds.sunriseCountdown = setInterval(updateSunriseCountdown, UpdateFrequencyMs);
    intervalIds.sunsetCountdown = setInterval(updateSunsetCountdown, UpdateFrequencyMs);
    intervalIds.seasonsCountdown = setInterval(update4SeasonsCountdown, UpdateFrequencyMs);
    intervalIds.userCountdown = setInterval(updateUserCountdown, UpdateFrequencyMs);

    // Save to localStorage
    localStorage.setItem("updateFreqRangeIdx", e.target.value.toString());
});

function loadUserFreqFromCache(){
    // load from localStorage
    const cachedFreq = localStorage.getItem("updateFreqRangeIdx");
    // default to 0 if not found
    const rangeIndex = cachedFreq !== null ? parseInt(cachedFreq) : 0;

    // Apply if found, update the UpdateFrequencyMs and the range input value
    if (cachedFreq) {
        const rangeIdx = parseInt(cachedFreq);
        UpdateFrequencyMs = rangeToFreqMap[rangeIdx].freq || 100; //update the GLOBAL VARIABLE, default to 100 ms        

        // update the label
        updateFreqLabel.textContent = rangeToFreqMap[rangeIdx].label;
        // update updateFreqRange input
        document.getElementById('updateFreqRange').value = rangeIndex;        
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    // Get user position first
    try {
        UserPosition = await getPosition();
        // Update location display after getting position
        updateLocationDisplay();
    } catch (error) {
        console.error('Failed to get user position:', error);
        // Continue with other initialization even if position fails
    }

    updateCurrentTime();
    updateSunriseSunsetTime();
    updateNext4Seasons();
    loadUserTimerFromCache();
    loadUserFreqFromCache();

    // update with initial frequency (UpdateFrequencyMs)
    intervalIds.currentTime = setInterval(updateCurrentTime, UpdateFrequencyMs);
    intervalIds.sunriseCountdown = setInterval(updateSunriseCountdown, UpdateFrequencyMs);
    intervalIds.sunsetCountdown = setInterval(updateSunsetCountdown, UpdateFrequencyMs);
    intervalIds.seasonsCountdown = setInterval(update4SeasonsCountdown, UpdateFrequencyMs);
    intervalIds.userCountdown = setInterval(updateUserCountdown, UpdateFrequencyMs);
});
