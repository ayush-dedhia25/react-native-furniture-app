const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const productRouter = require('./routes/productsRoutes');

// Load the environment variables
dotenv.config({});

/** @type {express.Application} */
const app = express();

// Global middlewares
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.use('/api/products', productRouter);

// Connect to the mongoose database first, then start the server.
mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => {
		const port = process.env.PORT ?? 3001;
		app.listen(3000, () => console.log(`Server running at http://localhost:${port}`));
		console.log('Connected to the mongodb database!');
	})
	.catch((err) => {
		console.log(err.message);
	});
