// Geocode Addresses: Remove User Data
// Copyright (c) 2021 Max Vilimpoc
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

// Remove all user-created sheets.
//
// Remove all user-entered data from unprotected ranges on a specific sheet
// using an App Script installable trigger.

function cleanupEverything() {
    var sheet   = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Test Addresses");
    var sheetId = sheet.getSheetId();
    var sheets  = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  
    for (var i = 0; i < sheets.length; i++) {
      if (i != sheetId) {
        Logger.log(`Removing "${sheets[i].getName()}".`);
        SpreadsheetApp.getActiveSpreadsheet().deleteSheet(sheets[i]);
      }
    }
  
    Logger.log("Clearing user data from protected ranges.");
  
    sheet.getRange("Test Addresses!F3:H22").clear();
    sheet.getRange("Test Addresses!A24:H1000").clear();
  
    Logger.log("Cleared.");
  }
  