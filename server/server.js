const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let arrCategory = [
    {id:1, name: 'Бургеры', products: [1, 2, 3, 4, 5, 6]},
    {id:2, name: 'Твистеры', products: [7, 8, 9, 10, 11, 12]},
    {id:3, name: 'Курица', products: [13, 14, 15, 16, 17, 18]},
    {id:4, name: 'Баскеты', products: [19, 20, 21, 22,]},
    {id:5, name: 'Снеки', products: [23, 24, 25, 26, 27, 28]},  
]

let products = [
    {id:1, name: 'Бургер', price:100, delivery:true, img:"#"},
    {id:2, name: 'Бургер', price:100, delivery:true, img:"#"},
    {id:3, name: 'Бургер', price:100, delivery:true, img:"#"},
    {id:4, name: 'Бургер', price:100, delivery:true, img:"#"},
    {id:5, name: 'Бургер', price:100, delivery:true, img:"#"},
    {id:6, name: 'Бургер', price:100, delivery:true, img:"#"},
    {id:7, name: 'Твистер', price:100, delivery:true, img:"#"},
    {id:8, name: 'Твистер', price:100, delivery:true, img:"#"},
    {id:9, name: 'Твистер', price:100, delivery:true, img:"#"},
    {id:10, name: 'Твистер', price:100, delivery:true, img:"#"},
    {id:11, name: 'Твистер', price:100, delivery:true, img:"#"},
    {id:12, name: 'Твистер', price:100, delivery:true, img:"#"},
    {id:13, name: 'Курица', price:100, delivery:true, img:"#"},
    {id:14, name: 'Курица', price:100, delivery:true, img:"#"},
    {id:15, name: 'Курица', price:100, delivery:true, img:"#"},
    {id:16, name: 'Курица', price:100, delivery:true, img:"#"},
    {id:17, name: 'Курица', price:100, delivery:true, img:"#"},
    {id:18, name: 'Курица', price:100, delivery:true, img:"#"},
    {id:19, name: 'Баскет', price:100, delivery:true, img:"#"},
    {id:20, name: 'Баскет', price:100, delivery:true, img:"#"},
    {id:21, name: 'Баскет', price:100, delivery:true, img:"#"},
    {id:22, name: 'Баскет', price:100, delivery:true, img:"#"},
    {id:23, name: 'Снеки', price:100, delivery:true, img:"#"},
    {id:24, name: 'Снеки', price:100, delivery:true, img:"#"},
    {id:25, name: 'Снеки', price:100, delivery:true, img:"#"},
    {id:26, name: 'Снеки', price:100, delivery:true, img:"#"},
    {id:27, name: 'Снеки', price:100, delivery:true, img:"#"},
    {id:28, name: 'Снеки', price:100, delivery:true, img:"#"}
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