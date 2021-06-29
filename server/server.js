const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static('public'));

let arrCategory = [
    { id: '1c', name: 'Бургеры', products: [1, 2, 3, 4, 5, 6] },
    { id: '2c', name: 'Твистеры', products: [7, 8, 9, 10, 11, 12] },
    { id: '3c', name: 'Курица', products: [13, 14, 15, 16, 17, 18] },
    { id: '4c', name: 'Хиты', products: [4, 5, 7, 14, 16] },
    { id: '5c', name: 'Новое', products: [2, 3, 8, 13, 15] }
]

let products = [
    { id: 1, name: 'Бургер', price: 100, delivery: false, img: 'http://localhost:3000/static/img/burger.png' },
    { id: 2, name: 'Бургер', price: 100, delivery: true, img: 'http://localhost:3000/static/img/newBurger.png' },
    { id: 3, name: 'Бургер', price: 100, delivery: false, img: 'http://localhost:3000/static/img/newBurger.png' },
    { id: 4, name: 'Бургер', price: 100, delivery: false, img: 'http://localhost:3000/static/img/hitBurger.png' },
    { id: 5, name: 'Бургер', price: 100, delivery: true, img: 'http://localhost:3000/static/img/hitBurger.png' },
    { id: 6, name: 'Бургер', price: 100, delivery: true, img: 'http://localhost:3000/static/img/burger.png' },
    { id: 7, name: 'Твистер', price: 100, delivery: false, img: 'http://localhost:3000/static/img/hitTwister.png' },
    { id: 8, name: 'Твистер', price: 100, delivery: true, img: 'http://localhost:3000/static/img/newTwister.png' },
    { id: 9, name: 'Твистер', price: 100, delivery: false, img: 'http://localhost:3000/static/img/twister.png' },
    { id: 10, name: 'Твистер', price: 100, delivery: true, img: 'http://localhost:3000/static/img/twister.png' },
    { id: 11, name: 'Твистер', price: 100, delivery: true, img: 'http://localhost:3000/static/img/twister.png' },
    { id: 12, name: 'Твистер', price: 100, delivery: false, img: 'http://localhost:3000/static/img/twister.png' },
    { id: 13, name: 'Курица', price: 100, delivery: true, img: 'http://localhost:3000/static/img/newChicken.png' },
    { id: 14, name: 'Курица', price: 100, delivery: false, img: 'http://localhost:3000/static/img/hitChicken.png' },
    { id: 15, name: 'Курица', price: 100, delivery: true, img: 'http://localhost:3000/static/img/newChicken.png' },
    { id: 16, name: 'Курица', price: 100, delivery: false, img: 'http://localhost:3000/static/img/hitChicken.png' },
    { id: 17, name: 'Курица', price: 100, delivery: true, img: 'http://localhost:3000/static/img/chicken.png' },
    { id: 18, name: 'Курица', price: 100, delivery: true, img: 'http://localhost:3000/static/img/chicken.png' }   
]

let orders = []

app.get('/getListCategory', (req, res) => {
    res.json(arrCategory)
})

app.get('/getProduct', (req, res) => {
    let id = +req.query.id
    let product = products.find((item) => item.id === id)
    res.json(product)
})

app.post('/order', (req, res) => {
    let order = req.body
    order.id = orders.length + 1    
    console.log(order)
    orders.push(order)
    res.status(200).json(order)
})

app.listen(process.env.PORT || 3000, () => { console.log('Example app listening on port 3000!') });