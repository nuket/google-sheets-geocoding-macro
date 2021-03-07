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
// Remove all user-created images.
//
// Remove all user-entered data from unprotected ranges on a specific sheet
// using an App Script installable trigger.

function cleanupEverything() {
  let spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheets      = spreadsheet.getSheets();

  Logger.log("Clearing user-created Sheets.");

  for (let s of sheets) {
    // Do not delete _these_ sheets.
    if (s.getName() === 'Test Addresses' || s.getName() === 'Reverse To Components' || s.getName() === 'Mapping') continue;

    Logger.log(`Removing "${s.getName()}".`);
    spreadsheet.deleteSheet(s);
  }

  Logger.log("Clearing user-created Images.");

  let allImages = spreadsheet.getSheetByName('Mapping').getImages();

  for (let i of allImages) {
    Logger.log(`Removing "${i}".`);
    i.remove();
  }

  Logger.log("Clearing user data from protected ranges.");

  spreadsheet.getRange("Test Addresses!F3:H22").clear();
  spreadsheet.getRange("Test Addresses!F3:G22").setHorizontalAlignment('normal');
  spreadsheet.getRange("Test Addresses!H3:H22").setHorizontalAlignment('left');
  
  spreadsheet.getRange("Test Addresses!A24:H1000").clear();
  spreadsheet.getRange("Test Addresses!A24:H1000").setHorizontalAlignment('left');
  spreadsheet.getRange("Test Addresses!F24:G1000").setHorizontalAlignment('normal');
  
  spreadsheet.getRange("Reverse To Components!D3:L9").clear();
  spreadsheet.getRange("Reverse To Components!D3:L9").setHorizontalAlignment('left');

  spreadsheet.getRange("Reverse To Components!A11:L1000").clear();
  spreadsheet.getRange("Reverse To Components!A11:L1000").setHorizontalAlignment('left');
  spreadsheet.getRange("Reverse To Components!B11:C1000").setHorizontalAlignment('normal');

  spreadsheet.getRange("Mapping!A3:Z1000").clear();
  spreadsheet.getRange("Mapping!A3:Z1000").setHorizontalAlignment('normal');

  Logger.log("Cleared.");
}
