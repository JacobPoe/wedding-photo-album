const express = require('express');
const fs = require('fs/promises');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config.js');

const app = express();
const compiler = webpack(config);
const ASSET_PATH = process.env.ASSET_PATH || path.join(__dirname, 'assets');
const PORT = process.env.PORT || 3000;

// Webpack middleware
app.use(webpackDevMiddleware(compiler));

// Static file serving for all album images
app.use('/images', express.static(ASSET_PATH));

// Static file serving for /public
app.use(express.static(path.join(__dirname, 'public')));

// Paginated listing
app.get('/api/images', async (req, res) => {
    const offset = parseInt(req.query.offset || '0', 10);
    const limit = parseInt(req.query.limit || '100', 10);

    const allFiles = await fs.readdir(ASSET_PATH);

    const imageFiles = allFiles.filter(f =>
        /\.(jpg|jpeg|png)$/i.test(f)
    );

    const batch = imageFiles.slice(offset, offset + limit);

    res.json({
        total: imageFiles.length,
        offset,
        limit,
        files: batch.map(filename => `/images/${filename}`),
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Dev server running on http://localhost:${PORT}`);
});