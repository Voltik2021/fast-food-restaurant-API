const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let arrCategory = [
    { id: '1c', name: 'Бургеры', products: [1, 2, 3, 4, 5, 6] },
    { id: '2c', name: 'Твистеры', products: [7, 8, 9, 10, 11, 12] },
    { id: '3c', name: 'Курица', products: [13, 14, 15, 16, 17, 18] },
    { id: '4c', name: 'Хиты', products: [4, 5, 7, 14, 16] },
    { id: '5c', name: 'Новое', products: [2, 3, 8, 13, 15] }
]

let products = [
    { id: 1, name: 'Бургер', price: 100, delivery: false, img: 'https://disk.yandex.ru/i/qR820PYnJQXWTw' },
    { id: 2, name: 'Бургер', price: 100, delivery: true, img: 'https://disk.yandex.ru/i/gVQVEMq4HEqPRA' },
    { id: 3, name: 'Бургер', price: 100, delivery: false, img: 'https://disk.yandex.ru/i/gVQVEMq4HEqPRA'},
    { id: 4, name: 'Бургер', price: 100, delivery: false, img: 'https://disk.yandex.ru/i/u1iw7OYI7r61-g' },
    { id: 5, name: 'Бургер', price: 100, delivery: true, img: 'https://disk.yandex.ru/i/u1iw7OYI7r61-g' },
    { id: 6, name: 'Бургер', price: 100, delivery: true, img: 'https://disk.yandex.ru/i/qR820PYnJQXWTw' },
    { id: 7, name: 'Твистер', price: 100, delivery: false, img: 'https://disk.yandex.ru/i/-KO7mh5PXnel4A' },
    { id: 8, name: 'Твистер', price: 100, delivery: true, img: 'https://disk.yandex.ru/i/KMgIZL4DG7YlnQ' },
    { id: 9, name: 'Твистер', price: 100, delivery: false, img: 'https://disk.yandex.ru/i/rvpkPUPUhjdQNQ' },
    { id: 10, name: 'Твистер', price: 100, delivery: true, img: 'https://disk.yandex.ru/i/rvpkPUPUhjdQNQ' },
    { id: 11, name: 'Твистер', price: 100, delivery: true, img: 'https://disk.yandex.ru/i/rvpkPUPUhjdQNQ' },
    { id: 12, name: 'Твистер', price: 100, delivery: false, img: 'https://disk.yandex.ru/i/rvpkPUPUhjdQNQ' },
    { id: 13, name: 'Курица', price: 100, delivery: true, img: 'https://disk.yandex.ru/i/5JPNoTmZGjNkiw' },
    { id: 14, name: 'Курица', price: 100, delivery: false, img: 'https://disk.yandex.ru/i/WwhaOGfOph7YFg' },
    { id: 15, name: 'Курица', price: 100, delivery: true, img: 'https://disk.yandex.ru/i/5JPNoTmZGjNkiw' },
    { id: 16, name: 'Курица', price: 100, delivery: false, img: 'https://disk.yandex.ru/i/WwhaOGfOph7YFg' },
    { id: 17, name: 'Курица', price: 100, delivery: true, img: 'https://disk.yandex.ru/i/Dh7v9P73L-8oCA'},
    { id: 18, name: 'Курица', price: 100, delivery: true, img: 'https://disk.yandex.ru/i/Dh7v9P73L-8oCA' }   
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