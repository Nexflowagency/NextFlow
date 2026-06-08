/**
 * ════════════════════════════════════════════════════════════
 *  INSTRUCȚIUNI — citește cu atenție, e simplu!
 * ════════════════════════════════════════════════════════════
 *
 *  PAS 1: Mergi pe https://script.google.com → "New project"
 *  PAS 2: Șterge tot ce e acolo și lipește TOT codul de mai jos
 *  PAS 3: Click pe "Save" (ctrl+S)
 *  PAS 4: Click pe "Deploy" → "New deployment"
 *           ▸ Type: Web app
 *           ▸ Execute as: Me
 *           ▸ Who has access: Anyone
 *         Click "Deploy" → autorizezi contul Google când îți cere
 *  PAS 5: Copiază URL-ul care apare (arată ca https://script.google.com/macros/s/AKfyc.../exec)
 *  PAS 6: Lipește URL-ul în components/ContactSection.tsx la linia cu GOOGLE_SHEETS_URL
 *
 *  Mesajele vor apărea automat în Google Sheet-ul tău:
 *  https://docs.google.com/spreadsheets/d/1O3DGuJFqYQypUNwKffAPdveavobaU8qEmbl1kM311mk
 * ════════════════════════════════════════════════════════════
 */

// ID-ul Google Sheet-ului tău — deja setat, nu schimba nimic!
const SPREADSHEET_ID = '1O3DGuJFqYQypUNwKffAPdveavobaU8qEmbl1kM311mk';

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();

    // Adaugă header-ele dacă foaia e complet goală
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Data', 'Nume', 'Email', 'Telefon', 'Mesaj']);
      sheet.getRange(1, 1, 1, 5)
        .setFontWeight('bold')
        .setBackground('#10B981')
        .setFontColor('#ffffff');
      sheet.setFrozenRows(1);
    }

    const p = e.parameter;
    sheet.appendRow([
      new Date().toLocaleString('ro-RO'),
      p.name    || '',
      p.email   || '',
      p.phone   || '-',
      p.message || '',
    ]);

    // Ajustează lățimea coloanelor automat
    sheet.autoResizeColumns(1, 5);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Testare rapidă din browser — deschide URL-ul web app-ului și trebuie să apară "Script activ ✓"
function doGet() {
  return ContentService.createTextOutput('Script activ ✓');
}
