const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Registration = mongoose.model('Registration');
const path = require('path');
const auth = require('http-auth');

const basic = auth.basic({
    file: path.join(__dirname, '../users.htpasswd'),
  });

// render is using 'form' which points to the file located at views/form.pug
// The pointing is set by the app.set("views") option) in app.js
router.get('/register', (req, res) => {
    res.render('form', { title: 'User Registration' });
});

router.get('/registrations', basic.check((req, res) => {
    Registration.find()
        .then((registrations) => {
            res.render('users', { title: 'Listing registrations', registrations });
        })
        .catch(() => { res.send('Sorry! Something went wrong.'); });
}));
  

router.get('/', (req, res) => {
    return res.send('GET HTTP method on user resource');
});

router.post('/',
    [
        check('name')
            .isLength({ min: 1 })
            .withMessage('Please enter a name'),
        check('email')
            .isLength({ min: 1 })
            .withMessage('Please enter an email'),
    ],
    (req, res) => {    
        const errors = validationResult(req);

        if (errors.isEmpty()) {
            const registration = new Registration(req.body);
            registration.save()
                .then(() => { res.send('Thank you for your registration!'); })
                .catch((err) => {
                    console.log(err);
                    res.send('Sorry! Something went wrong.');
                })
        } 
        else {
            console.log(req.body);
            res.render('form', {
                title: 'Registration form',
                errors: errors.array(),
                data: req.body,
            });
        }
    }
);

router.put('/:userId', (req, res) => {
    return res.send(
        `PUT HTTP method on user/${req.params.userId} resource`,
    );
});

router.delete('/:userId', (req, res) => {
    return res.send(
        `DELETE HTTP method on user/${req.params.userId} resource`,
    );
});

module.exports = router;