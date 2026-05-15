/**
 * PAS 1: Deschide Google Sheets → Extensions → Apps Script
 * PAS 2: Șterge tot ce e acolo și lipește TOT codul de mai jos
 * PAS 3: Click pe "Deploy" → "New deployment" → tip: "Web app"
 *        - Execute as: Me
 *        - Who has access: Anyone
 * PAS 4: Click "Deploy" → copiază URL-ul web app-ului
 * PAS 5: Lipește URL-ul în components/ContactSection.tsx la GOOGLE_SHEETS_URL
 */

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Adaugă header-e dacă foaia e goală
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Data', 'Nume', 'Email', 'Telefon', 'Mesaj']);
      sheet.getRange(1, 1, 1, 5).setFontWeight('bold');
    }

    const params = e.parameter;
    sheet.appendRow([
      new Date().toLocaleString('ro-RO'),
      params.name   || '',
      params.email  || '',
      params.phone  || '-',
      params.message || '',
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Necesar pentru testare din browser
function doGet() {
  return ContentService.createTextOutput('Script activ ✓');
}
