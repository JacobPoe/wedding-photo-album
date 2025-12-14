const express = require('express');
const fs = require('fs/promises');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config.js');

const app = express();
const compiler = webpack(config);

const ASSET_PATH_COMPRESSED = process.env.ASSET_PATH_COMPRESSED || path.join(__dirname, 'assets');
const ASSET_PATH_FULLSIZE = process.env.ASSET_PATH_FULLSIZE || path.join(__dirname, 'assets');
const PORT = process.env.PORT || 3000;

// Webpack middleware
app.use(webpackDevMiddleware(compiler));

// Static file serving for all compressed album images
app.use('/assets/compressed', express.static(ASSET_PATH_COMPRESSED));

// Static file serving for all fullsize album images
app.use('/assets/fullsize', express.static(ASSET_PATH_FULLSIZE));

// Static file serving for /public
app.use(express.static(path.join(__dirname, 'public')));

// Load photo categories from compressed asset subdirectories to render as tabs
app.get('/api/directories', async (req, res) => {
    const dirs = await fs.readdir(ASSET_PATH_COMPRESSED);
    res.json(dirs);
})

// Fetch a list of all images in a category to populate state for pagination
app.get('/api/images', async (req, res) => {
    const category = req.query.category;

    const allFiles = await fs.readdir(`${ASSET_PATH_COMPRESSED}/${category}`);
    const imageFiles = allFiles.filter(f =>
        /\.(jpg|jpeg|png)$/i.test(f)
    );

    res.json({
        total: imageFiles.length,
        files: imageFiles.map(filename => filename)
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Dev server running on http://localhost:${PORT}`);
});