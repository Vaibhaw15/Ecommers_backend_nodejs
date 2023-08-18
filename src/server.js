const express = require('express');
const bodyparser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(helmet());
app.use(morgan('dev'));   //for log purpose
app.use(cors());

mongoose.connect("mongodb+srv://Vaibhaw15:vs155@cluster0.iu1xxrh.mongodb.net/ecommerce?retryWrites=true&w=majority");



const UserRoutes = require('./routes/user_routes');
app.use('/api/user',UserRoutes);

const CategoryRoutes = require('./routes/category_routes');
app.use('/api/category',CategoryRoutes);

const ProductRoutes = require('./routes/product_routes');
app.use("/api/product", ProductRoutes);

const CartRoutes = require('./routes/cart_routes');
app.use("/api/cart", CartRoutes);

const OrderRoutes = require('./routes/order_routes');
app.use("/api/order", OrderRoutes);

const PORT = 9000;
app.listen(PORT, () => {
    console.log(`server started at PORT: ${PORT}`);
});

//user -> Model,Routes and controller