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

function addressToPosition() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var cells = sheet.getActiveRange();
  
  // Must have selected 3 columns (Address, Lat, Lng).
  // Must have selected at least 1 row.

  if (cells.getNumColumns() != 3) {
    Logger.log("Must select at least 3 columns: Address, Lat, Lng columns.");
    return;
  }
  
  var addressColumn = 1;
  var addressRow;
  
  var latColumn = addressColumn + 1;
  var lngColumn = addressColumn + 2;
  
  var geocoder = Maps.newGeocoder().setRegion(getGeocodingRegion());
  var location;
  
  for (addressRow = 1; addressRow <= cells.getNumRows(); ++addressRow) {
    var address = cells.getCell(addressRow, addressColumn).getValue();
    
    // Geocode the address and plug the lat, lng pair into the 
    // 2nd and 3rd elements of the current range row.
    location = geocoder.geocode(address);
   
    // Only change cells if geocoder seems to have gotten a 
    // valid response.
    if (location.status == 'OK') {
      lat = location["results"][0]["geometry"]["location"]["lat"];
      lng = location["results"][0]["geometry"]["location"]["lng"];
      
      cells.getCell(addressRow, latColumn).setValue(lat);
      cells.getCell(addressRow, lngColumn).setValue(lng);
    }
  }
};

function positionToAddress() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var cells = sheet.getActiveRange();
  
  // Must have selected 3 columns (Address, Lat, Lng).
  // Must have selected at least 1 row.

  if (cells.getNumColumns() != 3) {
    Logger.log("Must select at least 3 columns: Address, Lat, Lng columns.");
    return;
  }

  var addressColumn = 1;
  var addressRow;
  
  var latColumn = addressColumn + 1;
  var lngColumn = addressColumn + 2;
  
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

function generateMenu() {
  // var setGeocodingRegionMenuItem = 'Set Geocoding Region (Currently: ' + getGeocodingRegion() + ')';
  
  // {
  //   name: setGeocodingRegionMenuItem,
  //   functionName: "promptForGeocodingRegion"
  // },
  
  var entries = [{
    name: "Geocode Selected Cells (Address to   Lat, Long)",
    functionName: "addressToPosition"
  },
  {
    name: "Geocode Selected Cells (Address from Lat, Long)",
    functionName: "positionToAddress"
  }];
  
  return entries;
}

function updateMenu() {
  SpreadsheetApp.getActiveSpreadsheet().updateMenu('Geocode', generateMenu())
}

/**
 * Adds a custom menu to the active spreadsheet, containing a single menu item
 * for invoking the readRows() function specified above.
 * The onOpen() function, when defined, is automatically invoked whenever the
 * spreadsheet is opened.
 *
 * For more information on using the Spreadsheet API, see
 * https://developers.google.com/apps-script/service_spreadsheet
 */
function onOpen() {
  SpreadsheetApp.getActiveSpreadsheet().addMenu('Geocode', generateMenu());
  // SpreadsheetApp.getActiveSpreadsheet().addMenu('Region',  generateRegionMenu());
  // SpreadsheetApp.getUi()
  //   .createMenu();
};

