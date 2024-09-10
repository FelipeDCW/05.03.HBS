const express = require('express')
const hbs = require('hbs')
const app = express()

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


app.get("/",(req, res) =>{
    res.render('index',{
        titulo:'empezando con hbs',
        tituloPestana:'HBS',
        nombre:'empezando con hbs',
        apellido:'empezando con hbs'
    })
})


app.get("/home",(req, res) =>{
    res.render('home',{
        titulo:'empezando con HOME',
        tituloPestana:'HBS',
        nombre:'HOME',
        apellido:'empezando con Home'
    })
    
})

app.get("/features",(req, res) =>{
    res.render('features',{
        titulo:'empezando con features',
        tituloPestana:'features',
        nombre:'features',
        apellido:'empezando con features'
    })
})

app.get("/Pricing",(req, res) =>{
    res.render('Pricing',{
        titulo:'empezando con Pricing',
        tituloPestana:'Pricing',
        nombre:'Pricing',
        apellido:'empezando con Pricing'
    })
})

app.listen(3000)