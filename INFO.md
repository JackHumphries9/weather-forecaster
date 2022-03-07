# Additional Information

I used this document when developing the code because it allowed me to note down different information about the API because the documentation isn't very helpful. I've also tried my best not to critisise how poor this API is and how it doens't conform to modern standard at all. In my opinion I found it horrendous and I should have used a different one but I wanted to get the data from the horses mouth, so to speak.

The api usually gives a response like this for a specific location

` GET http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/310013?res=3hourly&key=<YOURAPIKEY>`

[Click here to skip the JSON ](#weather-types)

```json
	"SiteRep": {
		"Wx": {
			"Param": [
				{"name": "F", "units": "C", "$": "Feels Like Temperature"},
				{"name": "G", "units": "mph", "$": "Wind Gust"},
				{"name": "H", "units": "%", "$": "Screen Relative Humidity"},
				{"name": "T", "units": "C", "$": "Temperature"},
				{"name": "V", "units": "", "$": "Visibility"},
				{"name": "D", "units": "compass", "$": "Wind Direction"},
				{"name": "S", "units": "mph", "$": "Wind Speed"},
				{"name": "U", "units": "", "$": "Max UV Index"},
				{"name": "W", "units": "", "$": "Weather Type"},
				{"name": "Pp", "units": "%", "$": "Precipitation Probability"}
			]
		},
		"DV": {
			"dataDate": "2022-03-07T14:00:00Z",
			"type": "Forecast",
			"Location": {
				"i": "310013",
				"lat": "53.479",
				"lon": "-2.2465",
				"name": "MANCHESTER",
				"country": "ENGLAND",
				"continent": "EUROPE",
				"elevation": "36.0",
				"Period": [
					{
						"type": "Day",
						"value": "2022-03-07Z",
						"Rep": [
							{
								"D": "ESE",
								"F": "1",
								"G": "16",
								"H": "83",
								"Pp": "8",
								"S": "4",
								"T": "3",
								"V": "GO",
								"W": "8",
								"U": "1",
								"$": "540"
							},
							{
								"D": "ESE",
								"F": "3",
								"G": "18",
								"H": "69",
								"Pp": "9",
								"S": "7",
								"T": "6",
								"V": "VG",
								"W": "8",
								"U": "2",
								"$": "720"
							},
							{
								"D": "ESE",
								"F": "5",
								"G": "20",
								"H": "58",
								"Pp": "5",
								"S": "9",
								"T": "7",
								"V": "VG",
								"W": "7",
								"U": "1",
								"$": "900"
							},
							{
								"D": "ESE",
								"F": "3",
								"G": "22",
								"H": "60",
								"Pp": "0",
								"S": "11",
								"T": "7",
								"V": "VG",
								"W": "0",
								"U": "0",
								"$": "1080"
							},
							{
								"D": "SE",
								"F": "-1",
								"G": "27",
								"H": "68",
								"Pp": "1",
								"S": "13",
								"T": "4",
								"V": "VG",
								"W": "0",
								"U": "0",
								"$": "1260"
							}
						]
					},
					{
						"type": "Day",
						"value": "2022-03-08Z",
						"Rep": [
							{
								"D": "SE",
								"F": "-2",
								"G": "25",
								"H": "69",
								"Pp": "5",
								"S": "13",
								"T": "3",
								"V": "VG",
								"W": "7",
								"U": "0",
								"$": "0"
							},
							{
								"D": "ESE",
								"F": "-3",
								"G": "25",
								"H": "70",
								"Pp": "0",
								"S": "11",
								"T": "2",
								"V": "VG",
								"W": "0",
								"U": "0",
								"$": "180"
							},
							{
								"D": "ESE",
								"F": "-4",
								"G": "25",
								"H": "70",
								"Pp": "0",
								"S": "11",
								"T": "1",
								"V": "VG",
								"W": "0",
								"U": "0",
								"$": "360"
							},
							{
								"D": "ESE",
								"F": "-2",
								"G": "27",
								"H": "65",
								"Pp": "0",
								"S": "13",
								"T": "3",
								"V": "VG",
								"W": "1",
								"U": "1",
								"$": "540"
							},
							{
								"D": "SE",
								"F": "4",
								"G": "31",
								"H": "54",
								"Pp": "0",
								"S": "18",
								"T": "8",
								"V": "VG",
								"W": "1",
								"U": "2",
								"$": "720"
							},
							{
								"D": "SSE",
								"F": "7",
								"G": "31",
								"H": "55",
								"Pp": "4",
								"S": "16",
								"T": "10",
								"V": "VG",
								"W": "7",
								"U": "1",
								"$": "900"
							},
							{
								"D": "SSE",
								"F": "6",
								"G": "31",
								"H": "67",
								"Pp": "15",
								"S": "16",
								"T": "9",
								"V": "GO",
								"W": "7",
								"U": "0",
								"$": "1080"
							},
							{
								"D": "S",
								"F": "5",
								"G": "27",
								"H": "81",
								"Pp": "12",
								"S": "13",
								"T": "8",
								"V": "GO",
								"W": "7",
								"U": "0",
								"$": "1260"
							}
						]
					},
					{
						"type": "Day",
						"value": "2022-03-09Z",
						"Rep": [
							{
								"D": "SSE",
								"F": "4",
								"G": "22",
								"H": "87",
								"Pp": "1",
								"S": "9",
								"T": "7",
								"V": "VG",
								"W": "2",
								"U": "0",
								"$": "0"
							},
							{
								"D": "SSE",
								"F": "3",
								"G": "22",
								"H": "87",
								"Pp": "4",
								"S": "11",
								"T": "6",
								"V": "VG",
								"W": "7",
								"U": "0",
								"$": "180"
							},
							{
								"D": "SSE",
								"F": "3",
								"G": "25",
								"H": "86",
								"Pp": "5",
								"S": "11",
								"T": "6",
								"V": "VG",
								"W": "7",
								"U": "0",
								"$": "360"
							},
							{
								"D": "SSE",
								"F": "4",
								"G": "29",
								"H": "80",
								"Pp": "5",
								"S": "16",
								"T": "8",
								"V": "VG",
								"W": "7",
								"U": "1",
								"$": "540"
							},
							{
								"D": "S",
								"F": "7",
								"G": "38",
								"H": "65",
								"Pp": "6",
								"S": "20",
								"T": "11",
								"V": "VG",
								"W": "7",
								"U": "2",
								"$": "720"
							},
							{
								"D": "S",
								"F": "8",
								"G": "36",
								"H": "60",
								"Pp": "10",
								"S": "20",
								"T": "12",
								"V": "VG",
								"W": "7",
								"U": "1",
								"$": "900"
							},
							{
								"D": "S",
								"F": "7",
								"G": "34",
								"H": "71",
								"Pp": "17",
								"S": "18",
								"T": "10",
								"V": "GO",
								"W": "7",
								"U": "0",
								"$": "1080"
							},
							{
								"D": "S",
								"F": "5",
								"G": "29",
								"H": "82",
								"Pp": "22",
								"S": "16",
								"T": "9",
								"V": "GO",
								"W": "7",
								"U": "0",
								"$": "1260"
							}
						]
					},
					{
						"type": "Day",
						"value": "2022-03-10Z",
						"Rep": [
							{
								"D": "SSW",
								"F": "5",
								"G": "22",
								"H": "87",
								"Pp": "20",
								"S": "11",
								"T": "8",
								"V": "GO",
								"W": "7",
								"U": "0",
								"$": "0"
							},
							{
								"D": "SW",
								"F": "4",
								"G": "20",
								"H": "87",
								"Pp": "11",
								"S": "11",
								"T": "7",
								"V": "VG",
								"W": "7",
								"U": "0",
								"$": "180"
							},
							{
								"D": "SSW",
								"F": "3",
								"G": "18",
								"H": "90",
								"Pp": "12",
								"S": "9",
								"T": "6",
								"V": "GO",
								"W": "7",
								"U": "0",
								"$": "360"
							},
							{
								"D": "S",
								"F": "5",
								"G": "20",
								"H": "86",
								"Pp": "8",
								"S": "9",
								"T": "8",
								"V": "VG",
								"W": "7",
								"U": "1",
								"$": "540"
							},
							{
								"D": "S",
								"F": "8",
								"G": "25",
								"H": "71",
								"Pp": "8",
								"S": "13",
								"T": "10",
								"V": "VG",
								"W": "7",
								"U": "2",
								"$": "720"
							},
							{
								"D": "S",
								"F": "9",
								"G": "29",
								"H": "64",
								"Pp": "7",
								"S": "13",
								"T": "12",
								"V": "VG",
								"W": "7",
								"U": "1",
								"$": "900"
							},
							{
								"D": "S",
								"F": "7",
								"G": "25",
								"H": "70",
								"Pp": "6",
								"S": "13",
								"T": "10",
								"V": "VG",
								"W": "7",
								"U": "0",
								"$": "1080"
							},
							{
								"D": "SSE",
								"F": "6",
								"G": "29",
								"H": "73",
								"Pp": "6",
								"S": "16",
								"T": "9",
								"V": "VG",
								"W": "7",
								"U": "0",
								"$": "1260"
							}
						]
					},
					{
						"type": "Day",
						"value": "2022-03-11Z",
						"Rep": [
							{
								"D": "SSE",
								"F": "6",
								"G": "29",
								"H": "79",
								"Pp": "5",
								"S": "16",
								"T": "9",
								"V": "VG",
								"W": "7",
								"U": "0",
								"$": "0"
							},
							{
								"D": "SSE",
								"F": "6",
								"G": "29",
								"H": "83",
								"Pp": "9",
								"S": "16",
								"T": "9",
								"V": "VG",
								"W": "8",
								"U": "0",
								"$": "180"
							},
							{
								"D": "SSE",
								"F": "6",
								"G": "31",
								"H": "82",
								"Pp": "10",
								"S": "16",
								"T": "10",
								"V": "VG",
								"W": "7",
								"U": "0",
								"$": "360"
							},
							{
								"D": "SSE",
								"F": "7",
								"G": "34",
								"H": "80",
								"Pp": "16",
								"S": "18",
								"T": "11",
								"V": "VG",
								"W": "7",
								"U": "1",
								"$": "540"
							},
							{
								"D": "S",
								"F": "9",
								"G": "34",
								"H": "78",
								"Pp": "55",
								"S": "18",
								"T": "12",
								"V": "GO",
								"W": "7",
								"U": "2",
								"$": "720"
							},
							{
								"D": "S",
								"F": "9",
								"G": "29",
								"H": "79",
								"Pp": "61",
								"S": "16",
								"T": "12",
								"V": "GO",
								"W": "14",
								"U": "1",
								"$": "900"
							},
							{
								"D": "S",
								"F": "8",
								"G": "25",
								"H": "83",
								"Pp": "43",
								"S": "13",
								"T": "11",
								"V": "GO",
								"W": "9",
								"U": "0",
								"$": "1080"
							},
							{
								"D": "S",
								"F": "6",
								"G": "22",
								"H": "87",
								"Pp": "16",
								"S": "11",
								"T": "9",
								"V": "GO",
								"W": "2",
								"U": "0",
								"$": "1260"
							}
						]
					}
				]
			}
		}
	}
}

```

# Weather Types

The weather gives back a `weatherType` integer which corresponds to what the weather is currently. The list below is a reference I used to decide what `weatherType` should be what icon.

[List of all codes](https://www.metoffice.gov.uk/services/data/datapoint/code-definitions)

- 0=moon
- 1=sun
- 2=cloud-moon
- 3=cloud-sun
- 4=
- 5=smog
- 6=smog
- 7=cloud
- 8=cloud
- 9=cloud-moon-rain
- 10=cloud-sun-rain
- 11=cloud-rain
- 12=cloud-rain
- 13=cloud-moon-rain
- 14=cloud-sun-rain
- 15=cloud-showers-heavy
- 16=cloud-moon-rain
- 17=cloud-sun-rain
- 18=cloud-rain
- 19=cloud-moon-rain
- 20=cloud-sun-rain
- 21=cloud-rain
- 22=cloud-moon-rain
- 23=cloud-sun-rain
- 24=snowflake
- 25=snowflake
- 26=snowflake
- 27=snowflake
- 28=bolt-lightning
- 29=bolt-lightning
- 30=bolt-lightning

Then, when implementing this list is all the different unique ones from the list

unique icons=
moon, sun, cloud-moon, cloud-sun, smog, cloud, cloud-moon-rain, cloud-sun-rain, cloud-rain, cloud-showers-heavy, snowflake, bolt-lightning

# Location ID's

This is taken directly from the API. If you hit the `sitelist` endpoint you can get a list of all the sites with their ID's

`GET http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/datatype/sitelist?key=<APIkey>`

```json
{
	"Locations": {
		"Location": [
			{
				"elevation": "7.0",
				"id": "3066",
				"latitude": "57.6494",
				"longitude": "-3.5606",
				"name": "Kinloss",
				"region": "gr",
				"unitaryAuthArea": "Moray"
			},
            ...
            ]
        }
}
```

(I'm goin to save you and not copy the location data here because its so long (that's what she said))

So I extracted the ones I needed from the locations.

- 310016 = Plymouth
- 350758 = Cardiff
- 5 = London
- 310002 = Birmingham
- 310115 = Norwich
- 310013 = Manchester
- 352798 = Newcastle
- 351351 = Edinburgh
- 310009 = Glasgow
- 350347 = Belfast
