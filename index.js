const pdf2html = require('pdf2html');
const fs = require('fs');
//Exemple-etude-technique


const pdfhtml = async()=>{

    const html = await pdf2html.html('Exemple-etude-technique.pdf');
    
    console.log(html);
    fs.writeFile("result.html", html, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    }); 
}
pdfhtml()
