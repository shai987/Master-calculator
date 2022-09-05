import express from 'express';
import CC from 'currency-converter-lt'; // currency NPM 
const router = express.Router();
const currencyConverter = new CC();

// GET - tasks/currency        
router.get('/currency', async (req, res) => {
        const currencies = currencyConverter.currencies;
        res.render('currency', { currencies });
});

// POST - tasks/currency        
router.post('/currency', async (req, res) => {
        const { from, to, amount } = req.body;
        const currencies = currencyConverter.currencies;
        try {
                // when all the variables existing and the amount is a number 
                if (from && to && amount && !isNaN(amount)) {
                        const response = await currencyConverter.from(from).to(to).amount(Number(amount)).convert();
                        // I use toLocaleString() in order to formatting a number with comma and i defined the size of the decimal number to 2  
                        res.render('currency', { currencies, from, to, amount, text: `You will get: ${response.toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${currencies[to]} (${to})` });
                        console.log(`You will get: ${response.toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${currencies[to]} (${to})`);
                }
                // When one of the fields is empty or amount is not a number
                else {
                        res.render('currency', { currencies });
                }
        } catch (err) {
                console.log(err.message);
                res.render('currency', { currencies, amount, text: `Not a valid currency code` });
        }
});

// GET - tasks/avg        
router.get('/avg', (req, res) => {
        const { numberOfFiled } = req.query;
        // This variable will determain whether the go button was activated or not
        let flag = false;

        // If the numberOfFiled is not empty flag = true
        if (numberOfFiled) flag = true;

        res.render('avg', { numberOfFiled, flag, grade: [] });
});

// POST - tasks/avg        
router.post('/avg', (req, res) => {
        const { numberOfFiled } = req.query;
        // This variable will determain whether the go button was activated or not
        let flag = false;

        // If the numberOfFiled is not empty flag = true
        if (numberOfFiled) flag = true;

        // Create an empty array of grade that will contain the data from the req.body and than fill it with forEach loop
        const grade = [];
        Object.keys(req.body).forEach(index => {
                grade.push(Number(req.body[index]));
        });

        try {
                const avg = arr => {
                        // With reduce method i get the sum of the grades
                        const sum = arr.reduce((acc, cur) => acc + cur);
                        // Create an empty array of grades and than fill it with forEach loop
                        const newArr = [];
                        arr.forEach(item => {
                                // If the grade is exist push him to newArr array
                                if (item != '') {
                                        newArr.push(item);
                                }
                        });
                        arr = newArr;
                        const average = sum / arr.length;
                        return average.toFixed(2);
                }
                const result = avg(grade);
                res.render('avg', { numberOfFiled, flag, grade, text: `The average for all the values is: ${result}` });
                console.log(`The average for all the values is: ${result}`);
        }
        catch (err) {
                console.log(err.message);
        }
});

export default router;