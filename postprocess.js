const fs = require('fs');
const path = require('path');

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

const GA_SCRIPT = GA_TRACKING_ID && /^[A-Za-z0-9-]+$/.test(GA_TRACKING_ID) ? `
  <script async src="https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_TRACKING_ID}');
  </script>
` : '';

const EXPORT_DIR = 'out';

function getAllHtmlFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir, { withFileTypes: true });

    list.forEach((file) => {
        const filePath = path.join(dir, file.name);
        if (file.isDirectory()) {
            results = results.concat(getAllHtmlFiles(filePath));
        } else if (file.isFile() && path.extname(file.name).toLowerCase() === '.html') {
            results.push(filePath);
        }
    });

    return results;
}

function processHtmlFiles(files) {
    files.forEach((file) => {
        try {
            let content = fs.readFileSync(file, 'utf8');

            content = content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

            if (GA_SCRIPT && content.includes('</body>')) {
                content = content.replace('</body>', `${GA_SCRIPT}\n</body>`);
            }

            fs.writeFileSync(file, content, 'utf8');
            console.log(`Processed file: ${file}`);
        } catch (err) {
            console.error(`Error processing file ${file}:`, err);
            process.exitCode = 1;
        }
    });
}

function main() {
    if (!fs.existsSync(EXPORT_DIR)) {
        console.error(`Export directory "${EXPORT_DIR}" not found. Run "next build" before executing this script.`);
        process.exit(1);
    }

    const htmlFiles = getAllHtmlFiles(EXPORT_DIR);

    if (htmlFiles.length === 0) {
        console.warn(`No HTML files found in the directory "${EXPORT_DIR}".`);
        return;
    }

    processHtmlFiles(htmlFiles);
}

main();
