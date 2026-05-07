const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const path = require('path');

const files = [
  { src: 'post-noapte.html',        out: 'export-post-noapte.png' },
  { src: 'post-reframe.html',       out: 'export-post-reframe.png' },
  { src: 'post-zi/slide1.html',     out: 'export-zi-slide1.png' },
  { src: 'post-zi/slide2.html',     out: 'export-zi-slide2.png' },
  { src: 'post-zi/slide3.html',     out: 'export-zi-slide3.png' },
  { src: 'post-zi/slide4.html',     out: 'export-zi-slide4.png' },
  { src: 'post-zi/slide5.html',     out: 'export-zi-slide5.png' },
  { src: 'post-marco/slide1.html',  out: 'export-marco-slide1.png' },
  { src: 'post-marco/slide2.html',  out: 'export-marco-slide2.png' },
  { src: 'post-marco/slide3.html',  out: 'export-marco-slide3.png' },
  { src: 'post-marco/slide4.html',  out: 'export-marco-slide4.png' },
];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1080, height: 1080 });

  const base = path.resolve(__dirname);

  for (const f of files) {
    const url = 'file://' + path.join(base, f.src);
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.screenshot({ path: path.join(base, f.out), clip: { x: 0, y: 0, width: 1080, height: 1080 } });
    console.log('✓ ' + f.out);
  }

  await browser.close();
  console.log('\nGata! Toate imaginile sunt în /home/user/NextFlow/instagram/');
})();
