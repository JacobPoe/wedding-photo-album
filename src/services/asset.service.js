const loadAssets = async (offset, limit = 100) => {
    const response = await fetch(`/api/images?offset=${offset}&limit=${limit}`);
    return response.json(); // { total, offset, limit, files }
}

const loadDirectories = async () => {
    const response = await fetch(`/api/directories`);
    return response.json();
}

const buildTabMeta = (directories) => {
    return directories.map((dir) => {
        return dir.replace(/_-/g, ' ');
    })
}

const buildTileMeta = (files) => {
    return files.map((filename, index) => {
        return {
            id: `${index}_${filename}`,
            url: filename
        }
    })
}

export { buildTabMeta, buildTileMeta, loadAssets, loadDirectories };