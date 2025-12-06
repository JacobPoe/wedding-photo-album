const loadAsset = async (id) => {
    const response = await fetch(`/api/assets?id=${id}`);
    return response.json();
}

const loadAssets = async (category) => {
    const response = await fetch(`/api/images?category=${category}`);
    return response.json(); // { total, offset, limit, files }
}

const loadDirectories = async () => {
    const response = await fetch(`/api/directories`);
    return response.json();
}

const buildTabMeta = (directories) => {
    return directories.map((dir) => {
        return dir.replace(/[_-]/g, ' ');
    })
}

const buildTileMeta = (subdirectory, files) => {
    return files.map((filename, index) => {
        return {
            id: `${index}_${filename}`,
            name: filename,
            url: `/assets/compressed/${subdirectory}/${filename}`,
        }
    })
}

export { buildTabMeta, buildTileMeta, loadAssets, loadDirectories };