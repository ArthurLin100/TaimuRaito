/* ===how How was this table obtained===

import requests
import json

START_YEAR = 2025
END_YEAR = 2100

result = {}

for year in range(START_YEAR, END_YEAR + 1):
    url = f"https://aa.usno.navy.mil/api/seasons?year={year}"
    print(f"Fetching {year} ...")
    res = requests.get(url)

    if res.status_code != 200:
        print(f"Failed: {year}, status {res.status_code}")
        continue

    data = res.json()
    result[year] = data["data"]   # only keep the 4 timestamps

# Save as pure JSON
with open("seasons_2025_2100.json", "w", encoding="utf-8") as f:
    json.dump(result, f, ensure_ascii=False, indent=2)

# Save as JS Module (ESM)
with open("seasons_2025_2100.js", "w", encoding="utf-8") as f:
    f.write("export const seasons = ")
    json.dump(result, f, ensure_ascii=False, indent=2)
    f.write(";\n")

print("Done.")
*/
export const seasons = {
  "2025": [
    {
      "day": 4,
      "month": 1,
      "phenom": "Perihelion",
      "time": "13:28",
      "year": 2025
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "09:01",
      "year": 2025
    },
    {
      "day": 21,
      "month": 6,
      "phenom": "Solstice",
      "time": "02:42",
      "year": 2025
    },
    {
      "day": 3,
      "month": 7,
      "phenom": "Aphelion",
      "time": "19:55",
      "year": 2025
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "18:19",
      "year": 2025
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "15:03",
      "year": 2025
    }
  ],
  "2026": [
    {
      "day": 3,
      "month": 1,
      "phenom": "Perihelion",
      "time": "17:15",
      "year": 2026
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "14:46",
      "year": 2026
    },
    {
      "day": 21,
      "month": 6,
      "phenom": "Solstice",
      "time": "08:24",
      "year": 2026
    },
    {
      "day": 6,
      "month": 7,
      "phenom": "Aphelion",
      "time": "17:30",
      "year": 2026
    },
    {
      "day": 23,
      "month": 9,
      "phenom": "Equinox",
      "time": "00:05",
      "year": 2026
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "20:50",
      "year": 2026
    }
  ],
  "2027": [
    {
      "day": 3,
      "month": 1,
      "phenom": "Perihelion",
      "time": "02:33",
      "year": 2027
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "20:25",
      "year": 2027
    },
    {
      "day": 21,
      "month": 6,
      "phenom": "Solstice",
      "time": "14:11",
      "year": 2027
    },
    {
      "day": 5,
      "month": 7,
      "phenom": "Aphelion",
      "time": "05:06",
      "year": 2027
    },
    {
      "day": 23,
      "month": 9,
      "phenom": "Equinox",
      "time": "06:02",
      "year": 2027
    },
    {
      "day": 22,
      "month": 12,
      "phenom": "Solstice",
      "time": "02:42",
      "year": 2027
    }
  ],
  "2028": [
    {
      "day": 5,
      "month": 1,
      "phenom": "Perihelion",
      "time": "12:28",
      "year": 2028
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "02:17",
      "year": 2028
    },
    {
      "day": 20,
      "month": 6,
      "phenom": "Solstice",
      "time": "20:02",
      "year": 2028
    },
    {
      "day": 3,
      "month": 7,
      "phenom": "Aphelion",
      "time": "22:18",
      "year": 2028
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "11:45",
      "year": 2028
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "08:19",
      "year": 2028
    }
  ],
  "2029": [
    {
      "day": 2,
      "month": 1,
      "phenom": "Perihelion",
      "time": "18:13",
      "year": 2029
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "08:02",
      "year": 2029
    },
    {
      "day": 21,
      "month": 6,
      "phenom": "Solstice",
      "time": "01:48",
      "year": 2029
    },
    {
      "day": 6,
      "month": 7,
      "phenom": "Aphelion",
      "time": "05:12",
      "year": 2029
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "17:38",
      "year": 2029
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "14:14",
      "year": 2029
    }
  ],
  "2030": [
    {
      "day": 3,
      "month": 1,
      "phenom": "Perihelion",
      "time": "10:12",
      "year": 2030
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "13:52",
      "year": 2030
    },
    {
      "day": 21,
      "month": 6,
      "phenom": "Solstice",
      "time": "07:31",
      "year": 2030
    },
    {
      "day": 4,
      "month": 7,
      "phenom": "Aphelion",
      "time": "12:57",
      "year": 2030
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "23:27",
      "year": 2030
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "20:09",
      "year": 2030
    }
  ],
  "2031": [
    {
      "day": 4,
      "month": 1,
      "phenom": "Perihelion",
      "time": "20:48",
      "year": 2031
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "19:41",
      "year": 2031
    },
    {
      "day": 21,
      "month": 6,
      "phenom": "Solstice",
      "time": "13:17",
      "year": 2031
    },
    {
      "day": 6,
      "month": 7,
      "phenom": "Aphelion",
      "time": "07:10",
      "year": 2031
    },
    {
      "day": 23,
      "month": 9,
      "phenom": "Equinox",
      "time": "05:15",
      "year": 2031
    },
    {
      "day": 22,
      "month": 12,
      "phenom": "Solstice",
      "time": "01:55",
      "year": 2031
    }
  ],
  "2032": [
    {
      "day": 3,
      "month": 1,
      "phenom": "Perihelion",
      "time": "05:11",
      "year": 2032
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "01:22",
      "year": 2032
    },
    {
      "day": 20,
      "month": 6,
      "phenom": "Solstice",
      "time": "19:09",
      "year": 2032
    },
    {
      "day": 5,
      "month": 7,
      "phenom": "Aphelion",
      "time": "11:53",
      "year": 2032
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "11:11",
      "year": 2032
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "07:56",
      "year": 2032
    }
  ],
  "2033": [
    {
      "day": 4,
      "month": 1,
      "phenom": "Perihelion",
      "time": "11:51",
      "year": 2033
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "07:22",
      "year": 2033
    },
    {
      "day": 21,
      "month": 6,
      "phenom": "Solstice",
      "time": "01:01",
      "year": 2033
    },
    {
      "day": 3,
      "month": 7,
      "phenom": "Aphelion",
      "time": "20:52",
      "year": 2033
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "16:51",
      "year": 2033
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "13:46",
      "year": 2033
    }
  ],
  "2034": [
    {
      "day": 4,
      "month": 1,
      "phenom": "Perihelion",
      "time": "04:47",
      "year": 2034
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "13:17",
      "year": 2034
    },
    {
      "day": 21,
      "month": 6,
      "phenom": "Solstice",
      "time": "06:44",
      "year": 2034
    },
    {
      "day": 6,
      "month": 7,
      "phenom": "Aphelion",
      "time": "18:49",
      "year": 2034
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "22:39",
      "year": 2034
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "19:34",
      "year": 2034
    }
  ],
  "2035": [
    {
      "day": 3,
      "month": 1,
      "phenom": "Perihelion",
      "time": "00:54",
      "year": 2035
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "19:02",
      "year": 2035
    },
    {
      "day": 21,
      "month": 6,
      "phenom": "Solstice",
      "time": "12:33",
      "year": 2035
    },
    {
      "day": 5,
      "month": 7,
      "phenom": "Aphelion",
      "time": "18:21",
      "year": 2035
    },
    {
      "day": 23,
      "month": 9,
      "phenom": "Equinox",
      "time": "04:39",
      "year": 2035
    },
    {
      "day": 22,
      "month": 12,
      "phenom": "Solstice",
      "time": "01:31",
      "year": 2035
    }
  ],
  "2036": [
    {
      "day": 5,
      "month": 1,
      "phenom": "Perihelion",
      "time": "14:17",
      "year": 2036
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "01:03",
      "year": 2036
    },
    {
      "day": 20,
      "month": 6,
      "phenom": "Solstice",
      "time": "18:32",
      "year": 2036
    },
    {
      "day": 3,
      "month": 7,
      "phenom": "Aphelion",
      "time": "21:17",
      "year": 2036
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "10:23",
      "year": 2036
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "07:13",
      "year": 2036
    }
  ],
  "2037": [
    {
      "day": 3,
      "month": 1,
      "phenom": "Perihelion",
      "time": "04:00",
      "year": 2037
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "06:50",
      "year": 2037
    },
    {
      "day": 21,
      "month": 6,
      "phenom": "Solstice",
      "time": "00:22",
      "year": 2037
    },
    {
      "day": 6,
      "month": 7,
      "phenom": "Aphelion",
      "time": "12:05",
      "year": 2037
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "16:13",
      "year": 2037
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "13:07",
      "year": 2037
    }
  ],
  "2038": [
    {
      "day": 3,
      "month": 1,
      "phenom": "Perihelion",
      "time": "05:01",
      "year": 2038
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "12:40",
      "year": 2038
    },
    {
      "day": 21,
      "month": 6,
      "phenom": "Solstice",
      "time": "06:09",
      "year": 2038
    },
    {
      "day": 4,
      "month": 7,
      "phenom": "Aphelion",
      "time": "19:46",
      "year": 2038
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "22:02",
      "year": 2038
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "19:02",
      "year": 2038
    }
  ],
  "2039": [
    {
      "day": 5,
      "month": 1,
      "phenom": "Perihelion",
      "time": "06:41",
      "year": 2039
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "18:32",
      "year": 2039
    },
    {
      "day": 21,
      "month": 6,
      "phenom": "Solstice",
      "time": "11:57",
      "year": 2039
    },
    {
      "day": 5,
      "month": 7,
      "phenom": "Aphelion",
      "time": "13:25",
      "year": 2039
    },
    {
      "day": 23,
      "month": 9,
      "phenom": "Equinox",
      "time": "03:49",
      "year": 2039
    },
    {
      "day": 22,
      "month": 12,
      "phenom": "Solstice",
      "time": "00:40",
      "year": 2039
    }
  ],
  "2040": [
    {
      "day": 3,
      "month": 1,
      "phenom": "Perihelion",
      "time": "11:32",
      "year": 2040
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "00:11",
      "year": 2040
    },
    {
      "day": 20,
      "month": 6,
      "phenom": "Solstice",
      "time": "17:46",
      "year": 2040
    },
    {
      "day": 5,
      "month": 7,
      "phenom": "Aphelion",
      "time": "19:01",
      "year": 2040
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "09:45",
      "year": 2040
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "06:33",
      "year": 2040
    }
  ],
  "2041": [
    {
      "day": 3,
      "month": 1,
      "phenom": "Perihelion",
      "time": "21:52",
      "year": 2041
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "06:07",
      "year": 2041
    },
    {
      "day": 20,
      "month": 6,
      "phenom": "Solstice",
      "time": "23:36",
      "year": 2041
    },
    {
      "day": 4,
      "month": 7,
      "phenom": "Aphelion",
      "time": "01:38",
      "year": 2041
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "15:26",
      "year": 2041
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "12:18",
      "year": 2041
    }
  ],
  "2042": [
    {
      "day": 4,
      "month": 1,
      "phenom": "Perihelion",
      "time": "09:06",
      "year": 2042
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "11:53",
      "year": 2042
    },
    {
      "day": 21,
      "month": 6,
      "phenom": "Solstice",
      "time": "05:16",
      "year": 2042
    },
    {
      "day": 6,
      "month": 7,
      "phenom": "Aphelion",
      "time": "13:10",
      "year": 2042
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "21:11",
      "year": 2042
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "18:04",
      "year": 2042
    }
  ],
  "2043": [
    {
      "day": 2,
      "month": 1,
      "phenom": "Perihelion",
      "time": "22:15",
      "year": 2043
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "17:27",
      "year": 2043
    },
    {
      "day": 21,
      "month": 6,
      "phenom": "Solstice",
      "time": "10:58",
      "year": 2043
    },
    {
      "day": 6,
      "month": 7,
      "phenom": "Aphelion",
      "time": "02:24",
      "year": 2043
    },
    {
      "day": 23,
      "month": 9,
      "phenom": "Equinox",
      "time": "03:07",
      "year": 2043
    },
    {
      "day": 22,
      "month": 12,
      "phenom": "Solstice",
      "time": "00:01",
      "year": 2043
    }
  ],
  "2044": [
    {
      "day": 5,
      "month": 1,
      "phenom": "Perihelion",
      "time": "12:52",
      "year": 2044
    },
    {
      "day": 19,
      "month": 3,
      "phenom": "Equinox",
      "time": "23:20",
      "year": 2044
    },
    {
      "day": 20,
      "month": 6,
      "phenom": "Solstice",
      "time": "16:51",
      "year": 2044
    },
    {
      "day": 3,
      "month": 7,
      "phenom": "Aphelion",
      "time": "15:24",
      "year": 2044
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "08:48",
      "year": 2044
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "05:43",
      "year": 2044
    }
  ],
  "2045": [
    {
      "day": 3,
      "month": 1,
      "phenom": "Perihelion",
      "time": "14:56",
      "year": 2045
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "05:07",
      "year": 2045
    },
    {
      "day": 20,
      "month": 6,
      "phenom": "Solstice",
      "time": "22:34",
      "year": 2045
    },
    {
      "day": 6,
      "month": 7,
      "phenom": "Aphelion",
      "time": "12:51",
      "year": 2045
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "14:33",
      "year": 2045
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "11:35",
      "year": 2045
    }
  ],
  "2046": [
    {
      "day": 3,
      "month": 1,
      "phenom": "Perihelion",
      "time": "00:57",
      "year": 2046
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "10:58",
      "year": 2046
    },
    {
      "day": 21,
      "month": 6,
      "phenom": "Solstice",
      "time": "04:14",
      "year": 2046
    },
    {
      "day": 5,
      "month": 7,
      "phenom": "Aphelion",
      "time": "06:06",
      "year": 2046
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "20:21",
      "year": 2046
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "17:28",
      "year": 2046
    }
  ],
  "2047": [
    {
      "day": 5,
      "month": 1,
      "phenom": "Perihelion",
      "time": "11:44",
      "year": 2047
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "16:52",
      "year": 2047
    },
    {
      "day": 21,
      "month": 6,
      "phenom": "Solstice",
      "time": "10:03",
      "year": 2047
    },
    {
      "day": 5,
      "month": 7,
      "phenom": "Aphelion",
      "time": "06:32",
      "year": 2047
    },
    {
      "day": 23,
      "month": 9,
      "phenom": "Equinox",
      "time": "02:08",
      "year": 2047
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "23:07",
      "year": 2047
    }
  ],
  "2048": [
    {
      "day": 3,
      "month": 1,
      "phenom": "Perihelion",
      "time": "18:05",
      "year": 2048
    },
    {
      "day": 19,
      "month": 3,
      "phenom": "Equinox",
      "time": "22:34",
      "year": 2048
    },
    {
      "day": 20,
      "month": 6,
      "phenom": "Solstice",
      "time": "15:54",
      "year": 2048
    },
    {
      "day": 6,
      "month": 7,
      "phenom": "Aphelion",
      "time": "05:07",
      "year": 2048
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "08:00",
      "year": 2048
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "05:02",
      "year": 2048
    }
  ],
  "2049": [
    {
      "day": 3,
      "month": 1,
      "phenom": "Perihelion",
      "time": "10:27",
      "year": 2049
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "04:28",
      "year": 2049
    },
    {
      "day": 20,
      "month": 6,
      "phenom": "Solstice",
      "time": "21:47",
      "year": 2049
    },
    {
      "day": 4,
      "month": 7,
      "phenom": "Aphelion",
      "time": "09:06",
      "year": 2049
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "13:42",
      "year": 2049
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "10:52",
      "year": 2049
    }
  ],
  "2050": [
    {
      "day": 4,
      "month": 1,
      "phenom": "Perihelion",
      "time": "19:35",
      "year": 2050
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "10:19",
      "year": 2050
    },
    {
      "day": 21,
      "month": 6,
      "phenom": "Solstice",
      "time": "03:33",
      "year": 2050
    },
    {
      "day": 6,
      "month": 7,
      "phenom": "Aphelion",
      "time": "01:57",
      "year": 2050
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "19:28",
      "year": 2050
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "16:38",
      "year": 2050
    }
  ],
  "2051": [
    {
      "day": 3,
      "month": 1,
      "phenom": "Perihelion",
      "time": "05:31",
      "year": 2051
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "15:59",
      "year": 2051
    },
    {
      "day": 21,
      "month": 6,
      "phenom": "Solstice",
      "time": "09:18",
      "year": 2051
    },
    {
      "day": 6,
      "month": 7,
      "phenom": "Aphelion",
      "time": "10:23",
      "year": 2051
    },
    {
      "day": 23,
      "month": 9,
      "phenom": "Equinox",
      "time": "01:27",
      "year": 2051
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "22:34",
      "year": 2051
    }
  ],
  "2052": [
    {
      "day": 5,
      "month": 1,
      "phenom": "Perihelion",
      "time": "09:18",
      "year": 2052
    },
    {
      "day": 19,
      "month": 3,
      "phenom": "Equinox",
      "time": "21:56",
      "year": 2052
    },
    {
      "day": 20,
      "month": 6,
      "phenom": "Solstice",
      "time": "15:16",
      "year": 2052
    },
    {
      "day": 3,
      "month": 7,
      "phenom": "Aphelion",
      "time": "16:38",
      "year": 2052
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "07:15",
      "year": 2052
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "04:17",
      "year": 2052
    }
  ],
  "2053": [
    {
      "day": 3,
      "month": 1,
      "phenom": "Perihelion",
      "time": "22:18",
      "year": 2053
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "03:47",
      "year": 2053
    },
    {
      "day": 20,
      "month": 6,
      "phenom": "Solstice",
      "time": "21:04",
      "year": 2053
    },
    {
      "day": 6,
      "month": 7,
      "phenom": "Aphelion",
      "time": "12:30",
      "year": 2053
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "13:06",
      "year": 2053
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "10:10",
      "year": 2053
    }
  ],
  "2054": [
    {
      "day": 2,
      "month": 1,
      "phenom": "Perihelion",
      "time": "17:59",
      "year": 2054
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "09:34",
      "year": 2054
    },
    {
      "day": 21,
      "month": 6,
      "phenom": "Solstice",
      "time": "02:47",
      "year": 2054
    },
    {
      "day": 5,
      "month": 7,
      "phenom": "Aphelion",
      "time": "15:41",
      "year": 2054
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "18:59",
      "year": 2054
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "16:10",
      "year": 2054
    }
  ],
  "2055": [
    {
      "day": 5,
      "month": 1,
      "phenom": "Perihelion",
      "time": "12:24",
      "year": 2055
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "15:28",
      "year": 2055
    },
    {
      "day": 21,
      "month": 6,
      "phenom": "Solstice",
      "time": "08:40",
      "year": 2055
    },
    {
      "day": 4,
      "month": 7,
      "phenom": "Aphelion",
      "time": "20:52",
      "year": 2055
    },
    {
      "day": 23,
      "month": 9,
      "phenom": "Equinox",
      "time": "00:49",
      "year": 2055
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "21:55",
      "year": 2055
    }
  ],
  "2056": [
    {
      "day": 4,
      "month": 1,
      "phenom": "Perihelion",
      "time": "03:44",
      "year": 2056
    },
    {
      "day": 19,
      "month": 3,
      "phenom": "Equinox",
      "time": "21:11",
      "year": 2056
    },
    {
      "day": 20,
      "month": 6,
      "phenom": "Solstice",
      "time": "14:28",
      "year": 2056
    },
    {
      "day": 6,
      "month": 7,
      "phenom": "Aphelion",
      "time": "08:54",
      "year": 2056
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "06:39",
      "year": 2056
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "03:52",
      "year": 2056
    }
  ],
  "2057": [
    {
      "day": 3,
      "month": 1,
      "phenom": "Perihelion",
      "time": "03:10",
      "year": 2057
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "03:08",
      "year": 2057
    },
    {
      "day": 20,
      "month": 6,
      "phenom": "Solstice",
      "time": "20:19",
      "year": 2057
    },
    {
      "day": 4,
      "month": 7,
      "phenom": "Aphelion",
      "time": "16:41",
      "year": 2057
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "12:23",
      "year": 2057
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "09:43",
      "year": 2057
    }
  ],
  "2058": [
    {
      "day": 5,
      "month": 1,
      "phenom": "Perihelion",
      "time": "04:00",
      "year": 2058
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "09:05",
      "year": 2058
    },
    {
      "day": 21,
      "month": 6,
      "phenom": "Solstice",
      "time": "02:04",
      "year": 2058
    },
    {
      "day": 5,
      "month": 7,
      "phenom": "Aphelion",
      "time": "15:42",
      "year": 2058
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "18:08",
      "year": 2058
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "15:25",
      "year": 2058
    }
  ],
  "2059": [
    {
      "day": 3,
      "month": 1,
      "phenom": "Perihelion",
      "time": "10:44",
      "year": 2059
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "14:44",
      "year": 2059
    },
    {
      "day": 21,
      "month": 6,
      "phenom": "Solstice",
      "time": "07:47",
      "year": 2059
    },
    {
      "day": 6,
      "month": 7,
      "phenom": "Aphelion",
      "time": "21:25",
      "year": 2059
    },
    {
      "day": 23,
      "month": 9,
      "phenom": "Equinox",
      "time": "00:03",
      "year": 2059
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "21:18",
      "year": 2059
    }
  ],
  "2060": [
    {
      "day": 4,
      "month": 1,
      "phenom": "Perihelion",
      "time": "22:56",
      "year": 2060
    },
    {
      "day": 19,
      "month": 3,
      "phenom": "Equinox",
      "time": "20:38",
      "year": 2060
    },
    {
      "day": 20,
      "month": 6,
      "phenom": "Solstice",
      "time": "13:46",
      "year": 2060
    },
    {
      "day": 3,
      "month": 7,
      "phenom": "Aphelion",
      "time": "22:59",
      "year": 2060
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "05:48",
      "year": 2060
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "03:01",
      "year": 2060
    }
  ],
  "2061": [
    {
      "day": 4,
      "month": 1,
      "phenom": "Perihelion",
      "time": "07:33",
      "year": 2061
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "02:26",
      "year": 2061
    },
    {
      "day": 20,
      "month": 6,
      "phenom": "Solstice",
      "time": "19:32",
      "year": 2061
    },
    {
      "day": 6,
      "month": 7,
      "phenom": "Aphelion",
      "time": "07:19",
      "year": 2061
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "11:31",
      "year": 2061
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "08:49",
      "year": 2061
    }
  ],
  "2062": [
    {
      "day": 2,
      "month": 1,
      "phenom": "Perihelion",
      "time": "21:16",
      "year": 2062
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "08:07",
      "year": 2062
    },
    {
      "day": 21,
      "month": 6,
      "phenom": "Solstice",
      "time": "01:11",
      "year": 2062
    },
    {
      "day": 5,
      "month": 7,
      "phenom": "Aphelion",
      "time": "23:47",
      "year": 2062
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "17:20",
      "year": 2062
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "14:43",
      "year": 2062
    }
  ],
  "2063": [
    {
      "day": 5,
      "month": 1,
      "phenom": "Perihelion",
      "time": "13:41",
      "year": 2063
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "13:59",
      "year": 2063
    },
    {
      "day": 21,
      "month": 6,
      "phenom": "Solstice",
      "time": "07:02",
      "year": 2063
    },
    {
      "day": 4,
      "month": 7,
      "phenom": "Aphelion",
      "time": "15:21",
      "year": 2063
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "23:08",
      "year": 2063
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "20:21",
      "year": 2063
    }
  ],
  "2064": [
    {
      "day": 4,
      "month": 1,
      "phenom": "Perihelion",
      "time": "11:54",
      "year": 2064
    },
    {
      "day": 19,
      "month": 3,
      "phenom": "Equinox",
      "time": "19:39",
      "year": 2064
    },
    {
      "day": 20,
      "month": 6,
      "phenom": "Solstice",
      "time": "12:46",
      "year": 2064
    },
    {
      "day": 6,
      "month": 7,
      "phenom": "Aphelion",
      "time": "10:56",
      "year": 2064
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "04:57",
      "year": 2064
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "02:09",
      "year": 2064
    }
  ],
  "2065": [
    {
      "day": 2,
      "month": 1,
      "phenom": "Perihelion",
      "time": "15:10",
      "year": 2065
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "01:28",
      "year": 2065
    },
    {
      "day": 20,
      "month": 6,
      "phenom": "Solstice",
      "time": "18:33",
      "year": 2065
    },
    {
      "day": 5,
      "month": 7,
      "phenom": "Aphelion",
      "time": "01:37",
      "year": 2065
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "10:43",
      "year": 2065
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "08:01",
      "year": 2065
    }
  ],
  "2066": [
    {
      "day": 5,
      "month": 1,
      "phenom": "Perihelion",
      "time": "05:45",
      "year": 2066
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "07:20",
      "year": 2066
    },
    {
      "day": 21,
      "month": 6,
      "phenom": "Solstice",
      "time": "00:17",
      "year": 2066
    },
    {
      "day": 5,
      "month": 7,
      "phenom": "Aphelion",
      "time": "01:43",
      "year": 2066
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "16:27",
      "year": 2066
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "13:46",
      "year": 2066
    }
  ],
  "2067": [
    {
      "day": 3,
      "month": 1,
      "phenom": "Perihelion",
      "time": "17:05",
      "year": 2067
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "12:54",
      "year": 2067
    },
    {
      "day": 21,
      "month": 6,
      "phenom": "Solstice",
      "time": "05:56",
      "year": 2067
    },
    {
      "day": 7,
      "month": 7,
      "phenom": "Aphelion",
      "time": "03:13",
      "year": 2067
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "22:20",
      "year": 2067
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "19:43",
      "year": 2067
    }
  ],
  "2068": [
    {
      "day": 4,
      "month": 1,
      "phenom": "Perihelion",
      "time": "14:29",
      "year": 2068
    },
    {
      "day": 19,
      "month": 3,
      "phenom": "Equinox",
      "time": "18:49",
      "year": 2068
    },
    {
      "day": 20,
      "month": 6,
      "phenom": "Solstice",
      "time": "11:54",
      "year": 2068
    },
    {
      "day": 4,
      "month": 7,
      "phenom": "Aphelion",
      "time": "04:06",
      "year": 2068
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "04:07",
      "year": 2068
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "01:33",
      "year": 2068
    }
  ],
  "2069": [
    {
      "day": 4,
      "month": 1,
      "phenom": "Perihelion",
      "time": "18:25",
      "year": 2069
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "00:45",
      "year": 2069
    },
    {
      "day": 20,
      "month": 6,
      "phenom": "Solstice",
      "time": "17:41",
      "year": 2069
    },
    {
      "day": 5,
      "month": 7,
      "phenom": "Aphelion",
      "time": "23:15",
      "year": 2069
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "09:52",
      "year": 2069
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "07:22",
      "year": 2069
    }
  ],
  "2070": [
    {
      "day": 3,
      "month": 1,
      "phenom": "Perihelion",
      "time": "02:50",
      "year": 2070
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "06:35",
      "year": 2070
    },
    {
      "day": 20,
      "month": 6,
      "phenom": "Solstice",
      "time": "23:23",
      "year": 2070
    },
    {
      "day": 6,
      "month": 7,
      "phenom": "Aphelion",
      "time": "12:01",
      "year": 2070
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "15:45",
      "year": 2070
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "13:20",
      "year": 2070
    }
  ],
  "2071": [
    {
      "day": 5,
      "month": 1,
      "phenom": "Perihelion",
      "time": "09:44",
      "year": 2071
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "12:35",
      "year": 2071
    },
    {
      "day": 21,
      "month": 6,
      "phenom": "Solstice",
      "time": "05:21",
      "year": 2071
    },
    {
      "day": 4,
      "month": 7,
      "phenom": "Aphelion",
      "time": "20:40",
      "year": 2071
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "21:38",
      "year": 2071
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "19:04",
      "year": 2071
    }
  ],
  "2072": [
    {
      "day": 4,
      "month": 1,
      "phenom": "Perihelion",
      "time": "21:02",
      "year": 2072
    },
    {
      "day": 19,
      "month": 3,
      "phenom": "Equinox",
      "time": "18:21",
      "year": 2072
    },
    {
      "day": 20,
      "month": 6,
      "phenom": "Solstice",
      "time": "11:14",
      "year": 2072
    },
    {
      "day": 6,
      "month": 7,
      "phenom": "Aphelion",
      "time": "13:26",
      "year": 2072
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "03:28",
      "year": 2072
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "00:56",
      "year": 2072
    }
  ],
  "2073": [
    {
      "day": 2,
      "month": 1,
      "phenom": "Perihelion",
      "time": "14:41",
      "year": 2073
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "00:14",
      "year": 2073
    },
    {
      "day": 20,
      "month": 6,
      "phenom": "Solstice",
      "time": "17:07",
      "year": 2073
    },
    {
      "day": 5,
      "month": 7,
      "phenom": "Aphelion",
      "time": "10:53",
      "year": 2073
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "09:16",
      "year": 2073
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "06:51",
      "year": 2073
    }
  ],
  "2074": [
    {
      "day": 5,
      "month": 1,
      "phenom": "Perihelion",
      "time": "11:25",
      "year": 2074
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "06:09",
      "year": 2074
    },
    {
      "day": 20,
      "month": 6,
      "phenom": "Solstice",
      "time": "22:59",
      "year": 2074
    },
    {
      "day": 4,
      "month": 7,
      "phenom": "Aphelion",
      "time": "14:25",
      "year": 2074
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "15:04",
      "year": 2074
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "12:36",
      "year": 2074
    }
  ],
  "2075": [
    {
      "day": 4,
      "month": 1,
      "phenom": "Perihelion",
      "time": "02:14",
      "year": 2075
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "11:47",
      "year": 2075
    },
    {
      "day": 21,
      "month": 6,
      "phenom": "Solstice",
      "time": "04:41",
      "year": 2075
    },
    {
      "day": 7,
      "month": 7,
      "phenom": "Aphelion",
      "time": "06:43",
      "year": 2075
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "20:59",
      "year": 2075
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "18:27",
      "year": 2075
    }
  ],
  "2076": [
    {
      "day": 3,
      "month": 1,
      "phenom": "Perihelion",
      "time": "23:33",
      "year": 2076
    },
    {
      "day": 19,
      "month": 3,
      "phenom": "Equinox",
      "time": "17:39",
      "year": 2076
    },
    {
      "day": 20,
      "month": 6,
      "phenom": "Solstice",
      "time": "10:37",
      "year": 2076
    },
    {
      "day": 4,
      "month": 7,
      "phenom": "Aphelion",
      "time": "11:19",
      "year": 2076
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "02:51",
      "year": 2076
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "00:14",
      "year": 2076
    }
  ],
  "2077": [
    {
      "day": 4,
      "month": 1,
      "phenom": "Perihelion",
      "time": "20:52",
      "year": 2077
    },
    {
      "day": 19,
      "month": 3,
      "phenom": "Equinox",
      "time": "23:31",
      "year": 2077
    },
    {
      "day": 20,
      "month": 6,
      "phenom": "Solstice",
      "time": "16:24",
      "year": 2077
    },
    {
      "day": 5,
      "month": 7,
      "phenom": "Aphelion",
      "time": "10:10",
      "year": 2077
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "08:36",
      "year": 2077
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "06:01",
      "year": 2077
    }
  ],
  "2078": [
    {
      "day": 3,
      "month": 1,
      "phenom": "Perihelion",
      "time": "04:23",
      "year": 2078
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "05:11",
      "year": 2078
    },
    {
      "day": 20,
      "month": 6,
      "phenom": "Solstice",
      "time": "21:58",
      "year": 2078
    },
    {
      "day": 6,
      "month": 7,
      "phenom": "Aphelion",
      "time": "19:39",
      "year": 2078
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "14:25",
      "year": 2078
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "11:58",
      "year": 2078
    }
  ],
  "2079": [
    {
      "day": 5,
      "month": 1,
      "phenom": "Perihelion",
      "time": "00:14",
      "year": 2079
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "11:01",
      "year": 2079
    },
    {
      "day": 21,
      "month": 6,
      "phenom": "Solstice",
      "time": "03:50",
      "year": 2079
    },
    {
      "day": 4,
      "month": 7,
      "phenom": "Aphelion",
      "time": "21:26",
      "year": 2079
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "20:14",
      "year": 2079
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "17:44",
      "year": 2079
    }
  ],
  "2080": [
    {
      "day": 5,
      "month": 1,
      "phenom": "Perihelion",
      "time": "07:55",
      "year": 2080
    },
    {
      "day": 19,
      "month": 3,
      "phenom": "Equinox",
      "time": "16:45",
      "year": 2080
    },
    {
      "day": 20,
      "month": 6,
      "phenom": "Solstice",
      "time": "09:35",
      "year": 2080
    },
    {
      "day": 6,
      "month": 7,
      "phenom": "Aphelion",
      "time": "06:40",
      "year": 2080
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "01:57",
      "year": 2080
    },
    {
      "day": 20,
      "month": 12,
      "phenom": "Solstice",
      "time": "23:33",
      "year": 2080
    }
  ],
  "2081": [
    {
      "day": 2,
      "month": 1,
      "phenom": "Perihelion",
      "time": "18:56",
      "year": 2081
    },
    {
      "day": 19,
      "month": 3,
      "phenom": "Equinox",
      "time": "22:35",
      "year": 2081
    },
    {
      "day": 20,
      "month": 6,
      "phenom": "Solstice",
      "time": "15:17",
      "year": 2081
    },
    {
      "day": 5,
      "month": 7,
      "phenom": "Aphelion",
      "time": "21:26",
      "year": 2081
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "07:38",
      "year": 2081
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "05:23",
      "year": 2081
    }
  ],
  "2082": [
    {
      "day": 5,
      "month": 1,
      "phenom": "Perihelion",
      "time": "13:51",
      "year": 2082
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "04:31",
      "year": 2082
    },
    {
      "day": 20,
      "month": 6,
      "phenom": "Solstice",
      "time": "21:04",
      "year": 2082
    },
    {
      "day": 4,
      "month": 7,
      "phenom": "Aphelion",
      "time": "16:22",
      "year": 2082
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "13:24",
      "year": 2082
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "11:05",
      "year": 2082
    }
  ],
  "2083": [
    {
      "day": 4,
      "month": 1,
      "phenom": "Perihelion",
      "time": "11:27",
      "year": 2083
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "10:11",
      "year": 2083
    },
    {
      "day": 21,
      "month": 6,
      "phenom": "Solstice",
      "time": "02:44",
      "year": 2083
    },
    {
      "day": 7,
      "month": 7,
      "phenom": "Aphelion",
      "time": "15:14",
      "year": 2083
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "19:12",
      "year": 2083
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "16:54",
      "year": 2083
    }
  ],
  "2084": [
    {
      "day": 3,
      "month": 1,
      "phenom": "Perihelion",
      "time": "16:49",
      "year": 2084
    },
    {
      "day": 19,
      "month": 3,
      "phenom": "Equinox",
      "time": "16:00",
      "year": 2084
    },
    {
      "day": 20,
      "month": 6,
      "phenom": "Solstice",
      "time": "08:41",
      "year": 2084
    },
    {
      "day": 4,
      "month": 7,
      "phenom": "Aphelion",
      "time": "22:43",
      "year": 2084
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "01:00",
      "year": 2084
    },
    {
      "day": 20,
      "month": 12,
      "phenom": "Solstice",
      "time": "22:42",
      "year": 2084
    }
  ],
  "2085": [
    {
      "day": 5,
      "month": 1,
      "phenom": "Perihelion",
      "time": "04:33",
      "year": 2085
    },
    {
      "day": 19,
      "month": 3,
      "phenom": "Equinox",
      "time": "21:54",
      "year": 2085
    },
    {
      "day": 20,
      "month": 6,
      "phenom": "Solstice",
      "time": "14:33",
      "year": 2085
    },
    {
      "day": 4,
      "month": 7,
      "phenom": "Aphelion",
      "time": "21:34",
      "year": 2085
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "06:44",
      "year": 2085
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "04:29",
      "year": 2085
    }
  ],
  "2086": [
    {
      "day": 3,
      "month": 1,
      "phenom": "Perihelion",
      "time": "15:22",
      "year": 2086
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "03:36",
      "year": 2086
    },
    {
      "day": 20,
      "month": 6,
      "phenom": "Solstice",
      "time": "20:10",
      "year": 2086
    },
    {
      "day": 7,
      "month": 7,
      "phenom": "Aphelion",
      "time": "01:39",
      "year": 2086
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "12:33",
      "year": 2086
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "10:23",
      "year": 2086
    }
  ],
  "2087": [
    {
      "day": 4,
      "month": 1,
      "phenom": "Perihelion",
      "time": "16:38",
      "year": 2087
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "09:29",
      "year": 2087
    },
    {
      "day": 21,
      "month": 6,
      "phenom": "Solstice",
      "time": "02:07",
      "year": 2087
    },
    {
      "day": 5,
      "month": 7,
      "phenom": "Aphelion",
      "time": "02:06",
      "year": 2087
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "18:29",
      "year": 2087
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "16:09",
      "year": 2087
    }
  ],
  "2088": [
    {
      "day": 5,
      "month": 1,
      "phenom": "Perihelion",
      "time": "14:59",
      "year": 2088
    },
    {
      "day": 19,
      "month": 3,
      "phenom": "Equinox",
      "time": "15:18",
      "year": 2088
    },
    {
      "day": 20,
      "month": 6,
      "phenom": "Solstice",
      "time": "07:57",
      "year": 2088
    },
    {
      "day": 5,
      "month": 7,
      "phenom": "Aphelion",
      "time": "22:11",
      "year": 2088
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "00:19",
      "year": 2088
    },
    {
      "day": 20,
      "month": 12,
      "phenom": "Solstice",
      "time": "21:57",
      "year": 2088
    }
  ],
  "2089": [
    {
      "day": 2,
      "month": 1,
      "phenom": "Perihelion",
      "time": "17:01",
      "year": 2089
    },
    {
      "day": 19,
      "month": 3,
      "phenom": "Equinox",
      "time": "21:07",
      "year": 2089
    },
    {
      "day": 20,
      "month": 6,
      "phenom": "Solstice",
      "time": "13:44",
      "year": 2089
    },
    {
      "day": 6,
      "month": 7,
      "phenom": "Aphelion",
      "time": "07:15",
      "year": 2089
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "06:08",
      "year": 2089
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "03:53",
      "year": 2089
    }
  ],
  "2090": [
    {
      "day": 5,
      "month": 1,
      "phenom": "Perihelion",
      "time": "04:45",
      "year": 2090
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "03:03",
      "year": 2090
    },
    {
      "day": 20,
      "month": 6,
      "phenom": "Solstice",
      "time": "19:37",
      "year": 2090
    },
    {
      "day": 4,
      "month": 7,
      "phenom": "Aphelion",
      "time": "15:09",
      "year": 2090
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "12:00",
      "year": 2090
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "09:44",
      "year": 2090
    }
  ],
  "2091": [
    {
      "day": 4,
      "month": 1,
      "phenom": "Perihelion",
      "time": "19:22",
      "year": 2091
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "08:43",
      "year": 2091
    },
    {
      "day": 21,
      "month": 6,
      "phenom": "Solstice",
      "time": "01:20",
      "year": 2091
    },
    {
      "day": 7,
      "month": 7,
      "phenom": "Aphelion",
      "time": "12:55",
      "year": 2091
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "17:52",
      "year": 2091
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "15:39",
      "year": 2091
    }
  ],
  "2092": [
    {
      "day": 3,
      "month": 1,
      "phenom": "Perihelion",
      "time": "15:29",
      "year": 2092
    },
    {
      "day": 19,
      "month": 3,
      "phenom": "Equinox",
      "time": "14:35",
      "year": 2092
    },
    {
      "day": 20,
      "month": 6,
      "phenom": "Solstice",
      "time": "07:16",
      "year": 2092
    },
    {
      "day": 5,
      "month": 7,
      "phenom": "Aphelion",
      "time": "05:57",
      "year": 2092
    },
    {
      "day": 21,
      "month": 9,
      "phenom": "Equinox",
      "time": "23:43",
      "year": 2092
    },
    {
      "day": 20,
      "month": 12,
      "phenom": "Solstice",
      "time": "21:33",
      "year": 2092
    }
  ],
  "2093": [
    {
      "day": 5,
      "month": 1,
      "phenom": "Perihelion",
      "time": "10:16",
      "year": 2093
    },
    {
      "day": 19,
      "month": 3,
      "phenom": "Equinox",
      "time": "20:36",
      "year": 2093
    },
    {
      "day": 20,
      "month": 6,
      "phenom": "Solstice",
      "time": "13:08",
      "year": 2093
    },
    {
      "day": 4,
      "month": 7,
      "phenom": "Aphelion",
      "time": "13:21",
      "year": 2093
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "05:30",
      "year": 2093
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "03:22",
      "year": 2093
    }
  ],
  "2094": [
    {
      "day": 4,
      "month": 1,
      "phenom": "Perihelion",
      "time": "00:17",
      "year": 2094
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "02:23",
      "year": 2094
    },
    {
      "day": 20,
      "month": 6,
      "phenom": "Solstice",
      "time": "18:43",
      "year": 2094
    },
    {
      "day": 7,
      "month": 7,
      "phenom": "Aphelion",
      "time": "10:07",
      "year": 2094
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "11:18",
      "year": 2094
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "09:14",
      "year": 2094
    }
  ],
  "2095": [
    {
      "day": 4,
      "month": 1,
      "phenom": "Perihelion",
      "time": "03:56",
      "year": 2095
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "08:16",
      "year": 2095
    },
    {
      "day": 21,
      "month": 6,
      "phenom": "Solstice",
      "time": "00:40",
      "year": 2095
    },
    {
      "day": 5,
      "month": 7,
      "phenom": "Aphelion",
      "time": "13:09",
      "year": 2095
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "17:12",
      "year": 2095
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "15:02",
      "year": 2095
    }
  ],
  "2096": [
    {
      "day": 5,
      "month": 1,
      "phenom": "Perihelion",
      "time": "21:56",
      "year": 2096
    },
    {
      "day": 19,
      "month": 3,
      "phenom": "Equinox",
      "time": "14:04",
      "year": 2096
    },
    {
      "day": 20,
      "month": 6,
      "phenom": "Solstice",
      "time": "06:32",
      "year": 2096
    },
    {
      "day": 5,
      "month": 7,
      "phenom": "Aphelion",
      "time": "13:39",
      "year": 2096
    },
    {
      "day": 21,
      "month": 9,
      "phenom": "Equinox",
      "time": "22:56",
      "year": 2096
    },
    {
      "day": 20,
      "month": 12,
      "phenom": "Solstice",
      "time": "20:47",
      "year": 2096
    }
  ],
  "2097": [
    {
      "day": 3,
      "month": 1,
      "phenom": "Perihelion",
      "time": "00:52",
      "year": 2097
    },
    {
      "day": 19,
      "month": 3,
      "phenom": "Equinox",
      "time": "19:49",
      "year": 2097
    },
    {
      "day": 20,
      "month": 6,
      "phenom": "Solstice",
      "time": "12:14",
      "year": 2097
    },
    {
      "day": 6,
      "month": 7,
      "phenom": "Aphelion",
      "time": "16:04",
      "year": 2097
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "04:37",
      "year": 2097
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "02:39",
      "year": 2097
    }
  ],
  "2098": [
    {
      "day": 5,
      "month": 1,
      "phenom": "Perihelion",
      "time": "02:34",
      "year": 2098
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "01:42",
      "year": 2098
    },
    {
      "day": 20,
      "month": 6,
      "phenom": "Solstice",
      "time": "18:04",
      "year": 2098
    },
    {
      "day": 4,
      "month": 7,
      "phenom": "Aphelion",
      "time": "16:43",
      "year": 2098
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "10:25",
      "year": 2098
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "08:22",
      "year": 2098
    }
  ],
  "2099": [
    {
      "day": 5,
      "month": 1,
      "phenom": "Perihelion",
      "time": "06:18",
      "year": 2099
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "07:19",
      "year": 2099
    },
    {
      "day": 20,
      "month": 6,
      "phenom": "Solstice",
      "time": "23:43",
      "year": 2099
    },
    {
      "day": 7,
      "month": 7,
      "phenom": "Aphelion",
      "time": "08:08",
      "year": 2099
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "16:12",
      "year": 2099
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "14:05",
      "year": 2099
    }
  ],
  "2100": [
    {
      "day": 3,
      "month": 1,
      "phenom": "Perihelion",
      "time": "13:54",
      "year": 2100
    },
    {
      "day": 20,
      "month": 3,
      "phenom": "Equinox",
      "time": "13:05",
      "year": 2100
    },
    {
      "day": 21,
      "month": 6,
      "phenom": "Solstice",
      "time": "05:33",
      "year": 2100
    },
    {
      "day": 6,
      "month": 7,
      "phenom": "Aphelion",
      "time": "15:59",
      "year": 2100
    },
    {
      "day": 22,
      "month": 9,
      "phenom": "Equinox",
      "time": "22:02",
      "year": 2100
    },
    {
      "day": 21,
      "month": 12,
      "phenom": "Solstice",
      "time": "19:52",
      "year": 2100
    }
  ]
};
