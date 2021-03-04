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
  let spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheets      = spreadsheet.getSheets();

  for (let s of sheets) {
    if (s.getName() === 'Test Addresses' || s.getName() === 'Reverse To Components') continue;

    Logger.log(`Removing "${s.getName()}".`);
    spreadsheet.deleteSheet(s);
  }

  Logger.log("Clearing user data from protected ranges.");

  spreadsheet.getRange("Test Addresses!F3:H22").clearContent();
  spreadsheet.getRange("Test Addresses!A24:H1000").clearContent();
  
  spreadsheet.getRange("Reverse To Components!D3:L9").clearContent();
  spreadsheet.getRange("Reverse To Components!A11:L1000").clearContent();

  Logger.log("Cleared.");
}
