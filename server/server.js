const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let arrCategory = [
    { id: 1, name: 'Бургеры', products: [1, 2, 3, 4, 5, 6] },
    { id: 2, name: 'Твистеры', products: [7, 8, 9, 10, 11, 12] },
    { id: 3, name: 'Курица', products: [13, 14, 15, 16, 17, 18] },
    { id: 4, name: 'Хиты', products: [4, 5, 7, 14, 16] },
    { id: 5, name: 'Новое', products: [2, 3, 8, 13, 15] }
]

let products = [
    { id: 1, name: 'Бургер', price: 100, delivery: true, img: './src/img/burger.png' },
    { id: 2, name: 'Бургер', price: 100, delivery: true, img: './src/img/newBurger.png' },
    { id: 3, name: 'Бургер', price: 100, delivery: true, img: './src/img/newBurger.png' },
    { id: 4, name: 'Бургер', price: 100, delivery: true, img: './src/img/hitBurger.png' },
    { id: 5, name: 'Бургер', price: 100, delivery: true, img: './src/img/hitBurger.png' },
    { id: 6, name: 'Бургер', price: 100, delivery: true, img: './src/img/burger.png' },
    { id: 7, name: 'Твистер', price: 100, delivery: true, img: './src/img/hitTwister.png' },
    { id: 8, name: 'Твистер', price: 100, delivery: true, img: './src/img/newTwister.png' },
    { id: 9, name: 'Твистер', price: 100, delivery: true, img: './src/img/twister.png' },
    { id: 10, name: 'Твистер', price: 100, delivery: true, img: './src/img/twister.png' },
    { id: 11, name: 'Твистер', price: 100, delivery: true, img: './src/img/twister.png' },
    { id: 12, name: 'Твистер', price: 100, delivery: true, img: './src/img/twister.png' },
    { id: 13, name: 'Курица', price: 100, delivery: true, img: './src/img/newСhicken.png' },
    { id: 14, name: 'Курица', price: 100, delivery: true, img: './src/img/hitСhicken.png' },
    { id: 15, name: 'Курица', price: 100, delivery: true, img: './src/img/newСhicken.png' },
    { id: 16, name: 'Курица', price: 100, delivery: true, img: './src/img/hitСhicken.png' },
    { id: 17, name: 'Курица', price: 100, delivery: true, img: './src/img/chicken.png' },
    { id: 18, name: 'Курица', price: 100, delivery: true, img: './src/img/chicken.png' }   
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
    orders.push(order)
    res.status(200).json(order)
})

app.listen(process.env.PORT || 3000, () => { console.log('Example app listening on port 3000!') });