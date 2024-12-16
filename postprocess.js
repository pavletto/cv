const fs = require('fs');
const path = require('path');

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID ;

const GA_SCRIPT = `
  <script async src="https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_TRACKING_ID}');
  </script>
`;

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

            if (content.includes('</body>')) {
                content = content.replace('</body>', `${GA_SCRIPT}\n</body>`);
            } else {
                console.warn(`Тег </body> не найден в файле: ${file}`);
            }

            fs.writeFileSync(file, content, 'utf8');
            console.log(`Обработан файл: ${file}`);
        } catch (err) {
            console.error(`Ошибка при обработке файла ${file}:`, err);
        }
    });
}

function main() {
    if (!fs.existsSync(EXPORT_DIR)) {
        console.error(`Директория экспорта "${EXPORT_DIR}" не найдена. Выполните "next export" перед запуском этого скрипта.`);
        process.exit(1);
    }

    const htmlFiles = getAllHtmlFiles(EXPORT_DIR);

    if (htmlFiles.length === 0) {
        console.warn(`В директории "${EXPORT_DIR}" не найдено HTML-файлов.`);
        return;
    }

    processHtmlFiles(htmlFiles);
}

main();
