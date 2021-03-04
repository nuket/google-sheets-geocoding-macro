# Google Sheets Geocoding Macro

![How It Works](images/google-sheets-geocoding-macro.gif)

Geocode from addresses to latitude / longitude, and vice versa using Google
Sheets.

## Test Sheet

Try the script out on a [Test
Sheet](https://docs.google.com/spreadsheets/d/1tkzPt_yGfFG2MOs6-xBodajY79_WV8s4LpU6mhszAk4/edit?usp=sharing)
with sample address data. You can enter your own address data and geocode it  in
the rows below.

You **must** be logged into a Google Account before the Geocode menu will
appear.

Any data you enter will be automatically deleted every Sunday at 4AM CEST, this
isn't for long term storage.

## Multicolumn Addresses &rarr; Latitude, Longitude

Now it supports geocoding using address data spread across multiple columns. 

The way this works is: You select a set of columns containing the data, and the
geocoding process puts the latitude, longitude data in the **rightmost two
columns**. It will overwrite any data in those two columns.

Some care is needed, as it will concatenate all columns except the rightmost two
columns to create the address string.

![Multicolumn Address Geocoding](images/google-sheets-geocoding-macro-forward.png)

## Latitude, Longitude &rarr; Nearest Address

It also supports reverse geocoding. 

Simply select the latitude, longitude columns and it will place the nearest
address data in the rightmost column. It will overwrite any data in that column.

Less care is needed, as it will automatically use the leftmost two columns as
the latitude, longitude pair.

![Reverse Geocoding](images/google-sheets-geocoding-macro-reverse.png)

## Latitude, Longitude &rarr; Address Components

It now supports reverse geocoding and splitting the address components into different columns.

See the Reverse To Components tab in the [Test
Sheet](https://docs.google.com/spreadsheets/d/1tkzPt_yGfFG2MOs6-xBodajY79_WV8s4LpU6mhszAk4/edit?usp=sharing).

![Reverse Geocoding to Address Components](images/google-sheets-geocoding-macro-reverse-to-components.apng)

## Adding It To Your Own Sheet

Step 1. Create or Open a Google Sheet and add addresses to it.

![open google sheet](images/step-01-open-sheet.png)

Step 2. Tools -> Script Editor

![edit the script](images/step-02-script-editor.png)

Step 3. Copy [this script
code](https://raw.githubusercontent.com/nuket/google-sheets-geocoding-macro/master/Code.gs)
into the Code.gs editor, replacing everything.

![use geocoding script code](images/step-03-script-editor.png)

Step 4. Save

![save code](images/step-04-script-editor.png)

Step 5. Reload Sheet

![reload sheet](images/step-05-geocode-menu-appears.apng)

Step 6. Run Geocode, Click Through Warnings

![run geocode, click through warnings](images/step-06-geocode-and-warnings.apng)

That's it.

## Troubleshooting

* I don't see the Geocode menu!

  You **must** be logged into a Google Account before the Geocode menu will
  appear. Anonymous / not logged-in users will not work, Incognito Mode will not
  work.

* It gives me a bunch of warnings when I run it the first time.

  If you're using the Test Sheet, this means that the script will have access to
  the data you are entering. Don't enter anything you wouldn't want me to see,
  because as the owner of the shared Sheet, I see the data that gets put into
  it.

  If you've added the script to your own sheet, this means that the script will
  have access to the data you are entering. Since you're the owner of your
  Sheet, this isn't an issue. You can always audit the script by reading the
  source code in this repository.
  