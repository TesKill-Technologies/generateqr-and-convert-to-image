const fs = require('fs');
const QRCode = require('qrcode');

async function generateQRCodeToFile(link, filePath, options={}) {
    try {
        await QRCode.toFile(`./qr/${filePath}.png`, link, { ...options, type: 'png' });
        console.log('PNG QR code saved to', `${filePath}.png`);
        
        await QRCode.toFile(`./qr/${filePath}.svg`, link, { ...options, type: 'svg' });
        console.log('SVG QR code saved to', `${filePath}.svg`);

        fs.appendFileSync('qr_codes.txt', `${filePath}.png = ${link}\n`);
        fs.appendFileSync('qr_codes.txt', `${filePath}.svg = ${link}\n`);
        console.log('File name and URL appended to qr_codes.txt');
    } catch (err) {
        console.error(err);
    }
}

const options = {
    width: 1000,
    height: 1000,
    color: {
        dark: '#000',  
        light: '#fff' 
    }
}

const urls = ["domain.com/path/to/abcdef123456","abcdef1234","abcdef1234567890","https://console.firebase.google.com/project/blindbanking-c7179/authentication/users","fgdfi6846uhfghdfgdgihghdfg474gg4gttgrgrtgrtgrtretgrtrgtergtr","trttytuytiiuiui","https://youtube4kdownloader.com/en77/1234567890","https://www.desmos.com/calculator/safsdfsdgsf123/435346356/lk","https://archive.org/details/macos-collection#reviews/jhjhgjhgjjghjgjhjgh","zfvcxfxcgx121254254/dfgdsgdfhd/dsfsgsfdghds.com"];

urls.forEach((url, index) => {
    const filePath = `${index + 1}`;
    generateQRCodeToFile(url, filePath, options);
});
