const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

describe('Site Render Test', () => {
    it('should contain the keyword "GHZ782155"', async () => {
        const filePath = path.resolve(__dirname, '../views/sample.ejs');
        const template = fs.readFileSync(filePath, 'utf8');

        const renderedHtml = ejs.render(template);
        expect(renderedHtml).toMatch(/GHZ782155/);
    });
});