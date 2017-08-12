# Google Sheets Geocoding Macro

![How It Works](google-sheets-geocoding-macro.gif)

Geocode from addresses to latitude / longitude, and vice versa using Google Sheets.

## Test Sheet

Try the macro out on a [Test Sheet](https://docs.google.com/spreadsheets/d/1PZGulsMOTAjJxjPDzMrkunTCXQlFYOga50m3ZouzxHg/edit?usp=sharing) with sample address data.

## Google Sheets Add-On

Coming soon, it's currently Pending Review. If it's accepted, it will be available as an Add-On for all of your Sheets. Until then, you've got to add it to each sheet you are using.

## Multicolumn Addresses &rarr; Latitude, Longitude

Now it supports geocoding using address data spread across multiple columns. 

The way this works is: you select a set of columns containing the data, and the geocoding process puts the latitude, longitude data in the rightmost two columns. It will overwrite any data in those two columns.

![Multicolumn Address Geocoding](google-sheets-geocoding-macro-forward.png)

## Latitude, Longitude &rarr; Nearest Address

It also supports reverse geocoding. Simply select the latitude, longitude columns and it will place the nearest address data in the rightmost column. It will overwrite any data in that column.

![Reverse Geocoding](google-sheets-geocoding-macro-reverse.png)
