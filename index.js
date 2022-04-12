const engine = require("express-handlebars").engine
const express = require('express');
const json = require('./translations.json'); 
const app = express();
port = 3993

// app.engine('hbs', engine({ extename: 'hbs' }));
// app.set('view engine', 'hbs');

app.engine("handlebars", engine())
app.set('view engine', 'handlebars')

app.get('/:lang?', function (req, res) {
    const lang = req.params.lang
    if (lang === 'fr') {
        res.render('home', json.fr);
    }
    else if (lang === 'en'){
        res.render('home', json.en);
    }
    else if (lang === 'es'){
        res.render('home', json.es);
    }
    else{
        res.render('home', json.fr);
    }
});

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});