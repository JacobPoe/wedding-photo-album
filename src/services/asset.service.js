const loadAssets = async (offset, limit = 100) => {
    const response = await fetch(`/api/images?offset=${offset}&limit=${limit}`);
    return response.json(); // { total, offset, limit, files }
}

const buildTileMeta = (files) => {
    return files.map((filename, index) => {
        return {
            id: `${index}_${filename}`,
            url: filename
        }
    })
}

export { buildTileMeta, loadAssets };