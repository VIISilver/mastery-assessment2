require('dotenv').config();
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const massive = require('massive');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const controller = require('./controllers/controller');

const app = express();

app.use(bodyParser.json());
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());

massive(process.env.CONNECTION_STRING).then(db => {
    console.log('DB Connected')
    app.set('db', db);
})

// Animal Endpoints
app.post('/api/animals', controller.addAnimal);
app.get('/api/animals', controller.getAnimals);
app.put('/api/animals', controller.editAnimal);
app.delete('/api/animals/:id', controller.deleteAnimal);

const PORT = 3005;
app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));