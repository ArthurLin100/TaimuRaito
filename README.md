# Taimu Raito ⏱️🌅

A real-time time tracking web application that displays the current time, upcoming sunrise/sunset times, and astronomical seasons with live countdowns.

**Taimu Raito** (タイム ライト) is inspired by Doraemon's gadget, the *Time Light*, which visualizes the flow of time. This app brings that concept to life by tracking and displaying the passage of time through sunrises, sunsets, and seasons—providing a spark of hope to those awaiting the next sunrise or the arrival of a cherished season.

---

## Features

### ⏱️ Real-time Clock
- Displays current time with millisecond precision
- Adjustable update frequency: 100ms ⚡, 1 second 🐇, 1 minute 🐢, or 1 hour 🦥
- Auto-updating display that syncs with your system time

### 🌅 Sunrise & Sunset Tracking
- Automatically detects your location using Geolocation API
- Calculates next sunrise and sunset times for your position
- Real-time countdown timers with progress bars
- Displays local time and location information

### 🗓️  Astronomical Seasons
Tracks the next 4 upcoming astronomical seasons with accurate times and live countdowns:
- **Spring**: March Equinox
- **Summer**: June Solstice
- **Autumn**: September Equinox
- **Winter**: December Solstice

Data sourced from [usno.navy.mil](https://aa.usno.navy.mil/), providing precise equinox and solstice times. Pre-calculated seasonal data covers 2025-2100 with live countdowns and visual progress indicators.

### 🎨 Modern User Interface
- Responsive design with Bootstrap 5
- Glass-morphism card design
- Smooth animations and progress bars
- Mobile-friendly layout
- Built-in Google Search integration

### 💾 Local Data Storage
- Uses browser's localStorage to save your preferences and custom timer data locally
- Your settings persist across browser sessions
- No data is sent to external servers - everything stays on your device

---

## Technical Stack

- **Frontend Framework**: HTML5, CSS3, JavaScript
- **UI Framework**: Bootstrap 5.3.3
- **APIs**: 
  - Geolocation API (browser - for location detection)
  - [sunrise-sunset.org](https://sunrise-sunset.org/) API (for Sunrise & Sunset times)
- **Data**: Pre-calculated seasonal data (2025-2100) from [usno.navy.mil](https://aa.usno.navy.mil/) stored in seasons_2025_2100.js

---

## File Structure

```
TaimuRaito/
├── index.html                      # Main HTML page - UI layout with modals
├── favicon.ico                     # Browser tab icon
├── LICENSE                         # MIT License
├── README.md                       # Project documentation
└── static/                         # Static assets
    ├── css/
    │   └── style.css               # Custom CSS - glass-morphism cards, grid layouts, backgrounds
    ├── js/
    │   ├── script.js               # Main application logic (563 lines)
    │   └── seasons_2025_2100.js    # Pre-calculated seasonal data (3381 lines)
    └── images/                     # Background and decoration images
        ├── background.jpg          # Main background image
        ├── colorgradient-sq.jpg    # Color gradient for season cards
        ├── sunnight-sq.png         # Sunrise/sunset themed background
        ├── torch.png               # Torch icon variant
        └── torch2.png              # Torch icon (used in header)
```

## How to Use

1. **Open in Browser**: Simply open `index.html` in any modern web browser
2. **Grant Location Access**: The app will ask for permission to access your location
3. **View Time Information**: 
   - Current time displayed at the top
   - Sunrise/sunset times with countdown
   - Next 4 seasonal events with countdown
4. **Adjust Update Frequency**: Use the slider under the clock to change how often the display updates

---

## Features in Detail

### Update Frequency Control
- **100 ms ⚡**
- **1 second 🐇**
- **1 minute 🐢**
- **1 hour 🦥**

### Location-Based Calculations
- Uses browser's Geolocation API
- Calculates sunrise/sunset based on your latitude/longitude
- Displays location information for context

### Seasonal Data
- Accurate to the nearest minute for all equinoxes and solstices
- Data ranges from 2025 to 2100
- UTC time-based calculations

---

**Requirements**: 
- JavaScript enabled
- Geolocation API support
- ES6 Module support

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Copyright © 2025 ArthurLin100**

---


**For time⏱️ and nature🌅 lovers**
