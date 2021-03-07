// Geocode Addresses
// Copyright (c) 2016 - 2021 Max Vilimpoc
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

// Maps Premium Plan Keys (Your Own)
//
// "Enables the use of an externally established Google Maps APIs Premium Plan 
// account, to leverage additional quota allowances. Your client ID and signing
// key can be obtained from the Google Enterprise Support Portal."
//
// https://developers.google.com/apps-script/reference/maps/maps#setAuthentication(String,String)
//
// If you have this information and want to use it to increase your geocoding 
// quota, enter it here as a string.

var mapsClientId   = null; // something like 'gme-123456789'
var mapsSigningKey = null; // something like 'VhSEZvOXVSdnlxTnpJcUE'

// Bias the geocoding results in favor of these geographic regions.
// The regions are specified as ccTLD codes.
// 
// See: https://en.wikipedia.org/wiki/Country_code_top-level_domain
//
// Used:
// https://mbrownnyc.wordpress.com/misc/iso-3166-cctld-csv/
// http://www.convertcsv.com/csv-to-json.htm
// to generate the functions for menu item handling.
/*
var REGIONS = {
  "Afghanistan": "af",
  "Aland Islands": "ax",
  "Albania": "al",
  "Algeria": "dz",
  "American Samoa": "as",
  "Andorra": "ad",
  "Angola": "ao",
  "Anguilla": "ai",
  "Antarctica": "aq",
  "Antigua and Barbuda": "ag",
  "Argentina": "ar",
  "Armenia": "am",
  "Aruba": "aw",
  "Ascension Island": "ac",
  "Australia": "au",
  "Austria": "at",
  "Azerbaijan": "az",
  "Bahamas": "bs",
  "Bahrain": "bh",
  "Bangladesh": "bd",
  "Barbados": "bb",
  "Belarus": "by",
  "Belgium": "be",
  "Belize": "bz",
  "Benin": "bj",
  "Bermuda": "bm",
  "Bhutan": "bt",
  "Bolivia": "bo",
  "Bosnia and Herzegovina": "ba",
  "Botswana": "bw",
  "Bouvet Island": "bv",
  "Brazil": "br",
  "British Indian Ocean Territory": "io",
  "Brunei Darussalam": "bn",
  "Bulgaria": "bg",
  "Burkina Faso": "bf",
  "Burundi": "bi",
  "Cambodia": "kh",
  "Cameroon": "cm",
  "Canada": "ca",
  "Cape Verde": "cv",
  "Cayman Islands": "ky",
  "Central African Republic": "cf",
  "Chad": "td",
  "Chile": "cl",
  "China": "cn",
  "Christmas Island": "cx",
  "Cocos (Keeling) Islands": "cc",
  "Colombia": "co",
  "Comoros": "km",
  "Congo": "cg",
  "Cook Islands": "ck",
  "Costa Rica": "cr",
  "Cote d'Ivoire": "ci",
  "Croatia": "hr",
  "Cuba": "cu",
  "Cyprus": "cy",
  "Czech Republic": "cz",
  "Democratic People's Republic of Korea (North Korea)": "kp",
  "Denmark": "dk",
  "Djibouti": "dj",
  "Dominica": "dm",
  "Dominican Republic": "do",
  "Ecuador": "ec",
  "Egypt": "eg",
  "El Salvador": "sv",
  "Equatorial Guinea": "gq",
  "Eritrea": "er",
  "Estonia": "ee",
  "Ethiopia": "et",
  "European Union": "eu",
  "Falkland Islands (Malvinas)": "fk",
  "Faroe Islands": "fo",
  "Federated States of Micronesia": "fm",
  "Fiji": "fj",
  "Finland": "fi",
  "France": "fr",
  "French Guiana": "gf",
  "French Polynesia": "pf",
  "French Southern Territories": "tf",
  "Gabon": "ga",
  "Gambia": "gm",
  "Georgia": "ge",
  "Germany": "de",
  "Ghana": "gh",
  "Gibraltar": "gi",
  "Greece": "gr",
  "Greenland": "gl",
  "Grenada": "gd",
  "Guadeloupe": "gp",
  "Guam": "gu",
  "Guatemala": "gt",
  "Guernsey": "gg",
  "Guinea": "gn",
  "Guinea-Bissau": "gw",
  "Guyana": "gy",
  "Haiti": "ht",
  "Heard Island and McDonald Islands": "hm",
  "Holy See (Vatican City State)": "va",
  "Honduras": "hn",
  "Hong Kong": "hk",
  "Hungary": "hu",
  "Iceland": "is",
  "India": "in",
  "Indonesia": "id",
  "Iraq": "iq",
  "Ireland": "ie",
  "Islamic Republic of Iran": "ir",
  "Isle of Man": "im",
  "Israel": "il",
  "Italy": "it",
  "Jamaica": "jm",
  "Japan": "jp",
  "Jersey": "je",
  "Jordan": "jo",
  "Kazakhstan": "kz",
  "Kenya": "ke",
  "Kiribati": "ki",
  "Kuwait": "kw",
  "Kyrgyzstan": "kg",
  "Lao People's Democratic Republic": "la",
  "Latvia": "lv",
  "Lebanon": "lb",
  "Lesotho": "ls",
  "Liberia": "lr",
  "Libyan Arab Jamahiriya": "ly",
  "Liechtenstein": "li",
  "Lithuania": "lt",
  "Luxembourg": "lu",
  "Macao": "mo",
  "Madagascar": "mg",
  "Malawi": "mw",
  "Malaysia": "my",
  "Maldives": "mv",
  "Mali": "ml",
  "Malta": "mt",
  "Marshall Islands": "mh",
  "Martinique": "mq",
  "Mauritania": "mr",
  "Mauritius": "mu",
  "Mayotte": "yt",
  "Mexico": "mx",
  "Moldova": "md",
  "Monaco": "mc",
  "Mongolia": "mn",
  "Montenegro": "me",
  "Montserrat": "ms",
  "Morocco": "ma",
  "Mozambique": "mz",
  "Myanmar": "mm",
  "Namibia": "na",
  "Nauru": "nr",
  "Nepal": "np",
  "Netherlands": "nl",
  "Netherlands Antilles": "an",
  "New Caledonia": "nc",
  "New Zealand": "nz",
  "Nicaragua": "ni",
  "Niger": "ne",
  "Nigeria": "ng",
  "Niue": "nu",
  "Norfolk Island": "nf",
  "Northern Mariana Islands": "mp",
  "Norway": "no",
  "Oman": "om",
  "Pakistan": "pk",
  "Palau": "pw",
  "Palestinian Territory (occupied)": "ps",
  "Panama": "pa",
  "Papua New Guinea": "pg",
  "Paraguay": "py",
  "Peru": "pe",
  "Philippines": "ph",
  "Pitcairn": "pn",
  "Poland": "pl",
  "Portugal": "pt",
  "Portuguese Timor": "tp",
  "Puerto Rico": "pr",
  "Qatar": "qa",
  "Republic of Korea (South Korea)": "kr",
  "Reunion": "re",
  "Romania": "ro",
  "Russian Federation": "ru",
  "Rwanda": "rw",
  "Saint Barthelemy": "bl",
  "Saint Helena": "sh",
  "Saint Kitts and Nevis": "kn",
  "Saint Lucia": "lc",
  "Saint Martin": "mf",
  "Saint Pierre and Miquelon": "pm",
  "Saint Vincent and the Grenadines": "vc",
  "Samoa": "ws",
  "San Marino": "sm",
  "Sao Tome and Principe": "st",
  "Saudi Arabia": "sa",
  "Senegal": "sn",
  "Serbia": "rs",
  "Seychelles": "sc",
  "Sierra Leone": "sl",
  "Singapore": "sg",
  "Slovakia": "sk",
  "Slovenia": "si",
  "Solomon Islands": "sb",
  "Somalia": "so",
  "South Africa": "za",
  "South Georgia and the South Sandwich Islands": "gs",
  "Soviet Union": "su",
  "Spain": "es",
  "Sri Lanka": "lk",
  "Sudan": "sd",
  "Suriname": "sr",
  "Svalbard and Jan Mayen": "sj",
  "Swaziland": "sz",
  "Sweden": "se",
  "Switzerland": "ch",
  "Syrian Arab Republic": "sy",
  "Taiwan": "tw",
  "Tajikistan": "tj",
  "Thailand": "th",
  "The Democratic Republic of the Congo": "cd",
  "The Former Yugoslav Republic of Macedonia": "mk",
  "Timor-Leste": "tl",
  "Togo": "tg",
  "Tokelau": "tk",
  "Tonga": "to",
  "Trinidad and Tobago": "tt",
  "Tunisia": "tn",
  "Turkey": "tr",
  "Turkmenistan": "tm",
  "Turks and Caicos Islands": "tc",
  "Tuvalu": "tv",
  "Uganda": "ug",
  "Ukraine": "ua",
  "United Arab Emirates": "ae",
  "United Kingdom": "uk",
  "United Kingdom": "gb",
  "United Republic of Tanzania ": "tz",
  "United States": "us",
  "United States Minor Outlying Islands": "um",
  "Uruguay": "uy",
  "Uzbekistan": "uz",
  "Vanuatu": "vu",
  "Venezuela": "ve",
  "Viet Nam": "vn",
  "Virgin Islands  British": "vg",
  "Virgin Islands  US": "vi",
  "Wallis and Futuna": "wf",
  "Western Sahara": "eh",
  "Yemen": "ye",
  "Yugoslavia": "yu",
  "Zambia": "zm",
  "Zimbabwe": "zw"
};
*/

function getGeocodingRegion() {
  return PropertiesService.getDocumentProperties().getProperty('GEOCODING_REGION') || 'us';
}

/*
function setGeocodingRegion(region) {
  PropertiesService.getDocumentProperties().setProperty('GEOCODING_REGION', region);
  updateMenu();
}

function promptForGeocodingRegion() {
  var ui = SpreadsheetApp.getUi();

  var result = ui.prompt(
    'Set the Geocoding Country Code (currently: ' + getGeocodingRegion() + ')',
    'Enter the 2-letter country code (ccTLD) that you would like ' +
    'the Google geocoder to search first for results. ' +
    'For example: Use \'uk\' for the United Kingdom, \'us\' for the United States, etc. ' +
    'For more country codes, see: https://en.wikipedia.org/wiki/Country_code_top-level_domain',
    ui.ButtonSet.OK_CANCEL
  );

  // Process the user's response.
  if (result.getSelectedButton() == ui.Button.OK) {
    setGeocodingRegion(result.getResponseText());
  }
}
*/

// Forward Geocoding -- convert address to GPS position.
function addressToPosition() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var cells = sheet.getActiveRange();
  
  var popup = SpreadsheetApp.getUi();
  
  // Must have selected at least 3 columns (Address, Lat, Lng).
  // Must have selected at least 1 row.
  
  var columnCount = cells.getNumColumns();
  var rowCount = cells.getNumRows();

  if (columnCount < 3) {
    popup.alert("Select at least 3 columns: Address in the leftmost column(s); the geocoded Latitude, Longitude will go into the last 2 columns.");
    return;
  }
  
  var addressRow;

//  var addressColumnStart = 1; // Address data is in columns [1 .. columnCount - 2].
//  var addressColumnStop  = columnCount - 2; 
  
  var addressColumn;
  
  var latColumn = columnCount - 1; // Latitude  goes into the next-to-last column.
  var lngColumn = columnCount;     // Longitude goes into the last column.
  
  var geocoder = Maps.newGeocoder().setRegion(getGeocodingRegion());
  var location;

  var addresses = sheet.getRange(cells.getRow(), cells.getColumn(), rowCount, columnCount - 2).getValues();
  
  // For each row of selected data...
  for (addressRow = 1; addressRow <= rowCount; ++addressRow) {
    var address = addresses[addressRow - 1].join(' ');

    // Replace problem characters.
    address = address.replace(/'/g, "%27");
    address = address.trim();

    // Skip blank addresses.
    if (0 == address.length) continue;

    Logger.log(address);
    
    // Geocode the address and plug the lat, lng pair into the 
    // last 2 elements of the current range row.
    location = geocoder.geocode(address);
   
    Logger.log(location.status);

    // Only change cells if geocoder seems to have gotten a 
    // valid response.
    if (location.status == 'OK') {
      lat = location["results"][0]["geometry"]["location"]["lat"];
      lng = location["results"][0]["geometry"]["location"]["lng"];
      
      cells.getCell(addressRow, latColumn).setValue(lat);
      cells.getCell(addressRow, lngColumn).setValue(lng);

      Logger.log(lat);
      Logger.log(lng);
    } else {
      Logger.log(location.status);
    }
  }
};

// Reverse Geocode -- GPS position to nearest address.
function positionToAddress() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var cells = sheet.getActiveRange();

  var popup = SpreadsheetApp.getUi();
  
  // Must have selected at least 3 columns (Address, Lat, Lng).
  // Must have selected at least 1 row.

  var columnCount = cells.getNumColumns();

  if (columnCount < 3) {
    popup.alert("Select at least 3 columns: Latitude, Longitude in the first 2 columns; the reverse-geocoded Address will go into the last column.");
    return;
  }

  var latColumn     = 1;
  var lngColumn     = 2;

  var addressRow;
  var addressColumn = columnCount;

  var geocoder = Maps.newGeocoder().setRegion(getGeocodingRegion());
  var location;
  
  for (addressRow = 1; addressRow <= cells.getNumRows(); ++addressRow) {
    var lat = cells.getCell(addressRow, latColumn).getValue();
    var lng = cells.getCell(addressRow, lngColumn).getValue();
    
    // Geocode the lat, lng pair to an address.
    location = geocoder.reverseGeocode(lat, lng);
   
    // Only change cells if geocoder seems to have gotten a 
    // valid response.
    Logger.log(location.status);
    if (location.status == 'OK') {
      var address = location["results"][0]["formatted_address"];

      cells.getCell(addressRow, addressColumn).setValue(address);
    }
  }
};

// Reverse Geocode -- GPS position to nearest address, broken out into components.
function positionToAddressComponents() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var cells = sheet.getActiveRange();
  
  // Must have selected 8 columns (Lat, Lng, +6 components).
  // Must have selected at least 1 row.

  var columnCount = cells.getNumColumns();

  if (columnCount != 11) {
    SpreadsheetApp.getUi().alert("Latitude, Longitude in the first 2 columns; the reverse-geocoded Address will go into the following columns.");
    return;
  }

  var latColumn     = 1;
  var lngColumn     = 2;

  var addressRow;
  var addressColumn = 3;

  var geocoder = Maps.newGeocoder().setRegion(getGeocodingRegion());
  var location;
  
  for (addressRow = 1; addressRow <= cells.getNumRows(); ++addressRow) {
    var lat = cells.getCell(addressRow, latColumn).getValue();
    var lng = cells.getCell(addressRow, lngColumn).getValue();
    
    // Geocode the lat, lng pair to an address.
    location = geocoder.reverseGeocode(lat, lng);
   
    // Only change cells if geocoder seems to have gotten a 
    // valid response.
    //
    // [{short_name=49, long_name=49, types=[street_number]}, {long_name=Bleibtreustraße, types=[route], short_name=Bleibtreustraße}, {long_name=Bezirk Charlottenburg-Wilmersdorf, types=[political, sublocality, sublocality_level_1], short_name=Bezirk Charlottenburg-Wilmersdorf}, {short_name=Berlin, types=[locality, political], long_name=Berlin}, {types=[administrative_area_level_1, political], short_name=Berlin, long_name=Berlin}, {short_name=DE, long_name=Germany, types=[country, political]}, {types=[postal_code], short_name=10623, long_name=10623}]

    Logger.log(location.status);
    if (location.status == 'OK') {
      const L = location["results"][0]["address_components"];
      
      const outStreetNumber  = getAddressComponent(L, 'street_number',               'short_name');
      const outStreet        = getAddressComponent(L, 'route',                       'short_name');
      const outBorough       = getAddressComponent(L, 'sublocality',                 'short_name');
      const outCity          = getAddressComponent(L, 'locality',                    'short_name');
      const outStateLong     = getAddressComponent(L, 'administrative_area_level_1', 'long_name');
      const outStateShort    = getAddressComponent(L, 'administrative_area_level_1', 'short_name');
      const outCountryLong   = getAddressComponent(L, 'country',                     'long_name');
      const outCountryShort  = getAddressComponent(L, 'country',                     'short_name');
      const outPostcodeShort = getAddressComponent(L, 'postal_code',                 'short_name');

      cells.getCell(addressRow, addressColumn + 0).setValue(outStreetNumber);
      cells.getCell(addressRow, addressColumn + 1).setValue(outStreet);
      cells.getCell(addressRow, addressColumn + 2).setValue(outBorough);
      cells.getCell(addressRow, addressColumn + 3).setValue(outCity);
      cells.getCell(addressRow, addressColumn + 4).setValue(outStateLong);
      cells.getCell(addressRow, addressColumn + 5).setValue(outStateShort);
      cells.getCell(addressRow, addressColumn + 6).setValue(outCountryLong);
      cells.getCell(addressRow, addressColumn + 7).setValue(outCountryShort);
      cells.getCell(addressRow, addressColumn + 8).setValue(outPostcodeShort);
    }
  }
};

function getAddressComponent(result, whichType, whichName) {
  for (let r of result) {
    for (let t of r["types"]) {
      if (t === whichType) {
        Logger.log(r[whichName]);
        return r[whichName];
      }
    }
  }
  
  return '';
}

// @param coords is an array of [lat, lng] arrays.
function staticMapFromCoords(coords) {
  let map = Maps.newStaticMap()
    .setSize(1280, 720);

  Logger.log(`Mapping ${coords.length} locations.`);

  for (let c of coords) {
    map.addMarker(c[0], c[1]);
  }

  return map;
}

function makePreview(map, sheet) {
  // Add image to sheet. No wipeouts.

  let allImages = sheet.getImages();
  for (let i of allImages) {
    i.remove();
  }

  const originCol = 4 + allImages.length;
  const originRow = 3 + allImages.length;

  let sheetImage = sheet.insertImage(map.getBlob(), originCol, originRow);
  sheetImage.setAltTextDescription(map.getMapUrl);
}

function makeMap() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Mapping');

  let range  = sheet.getRange('A3:B1000');
  let values = range.getValues();

  let filteredValues = values.filter((value) => { return (typeof(value[0]) === 'number' && typeof(value[1]) === 'number'); });

  let map = staticMapFromCoords(filteredValues);

  makePreview(map, sheet);
}

function generateMenu() {
  // var setGeocodingRegionMenuItem = 'Set Geocoding Region (Currently: ' + getGeocodingRegion() + ')';
  
  // {
  //   name: setGeocodingRegionMenuItem,
  //   functionName: "promptForGeocodingRegion"
  // },
  
  var entries = [{
    name: "Geocode Selected Cells (Address to Latitude, Longitude)",
    functionName: "addressToPosition"
  },
  {
    name: "Geocode Selected Cells (Latitude, Longitude to Address)",
    functionName: "positionToAddress"
  },
  {
    name: "Geocode Selected Cells (Latitude, Longitude to Address Components)",
    functionName: "positionToAddressComponents"
  },
  {
    name: "Map Cells In Mapping Sheet (Latitude, Longitude -> Map Image)",
    functionName: "makeMap"
  }
  ];
  
  return entries;
}

function updateMenu() {
  SpreadsheetApp.getActiveSpreadsheet().updateMenu('Geocode', generateMenu())
}

/**
 * Adds a custom menu to the active spreadsheet, containing a single menu item
 * for invoking the readRows() function specified above.
 *
 * The onOpen() function, when defined, is automatically invoked whenever the
 * spreadsheet is opened.
 *
 * For more information on using the Spreadsheet API, see
 * https://developers.google.com/apps-script/service_spreadsheet
 */
function onOpen() {
  if (mapsClientId && mapsSigningKey) Maps.setAuthentication(mapsClientId, mapsSigningKey);

  SpreadsheetApp.getActiveSpreadsheet().addMenu('Geocode', generateMenu());
};
