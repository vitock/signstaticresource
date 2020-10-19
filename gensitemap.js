

const fs = require('fs');
let arr  = fs.readdirSync(`${__dirname}/www`);

let count = 0;
let arrsite = [];
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if(/\.html$/.test(element) && element != 'g.html'){
        console.log(element);
        count ++ ;
    }
}

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if(/\.html$/.test(element) && element != 'g.html'){
        console.log(element);
        let html = `<url>
            <loc>http://iewl.herokuapp.com/www/${element}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>${(1/count).toFixed(2)}</priority>
        </url>`
        arrsite.push(html);
    }
}

let html = 
`<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="sitemap.xsl"?>
<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${arrsite.join('\n')}
</urlset>
`

fs.writeFileSync(`${__dirname}/sitemap.xml`,html)

console.log(html)

 


 
