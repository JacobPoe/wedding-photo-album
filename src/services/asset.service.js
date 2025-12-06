const loadAsset = async (id) => {
    const response = await fetch(`/api/assets?id=${id}`);
    return response.json();
}

const loadAssets = async (category, offset, limit = 100) => {
    const response = await fetch(`/api/images?category=${category}&offset=${offset}&limit=${limit}`);
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
            url: `/assets/compressed/${subdirectory}/${filename}`,
        }
    })
}

export { buildTabMeta, buildTileMeta, loadAssets, loadDirectories };