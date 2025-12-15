const loadAssets = async (category) => {
    const response = await fetch(`/api/images?category=${category}`);
    return response.json(); // { total, offset, limit, files }
}

const loadDirectories = async () => {
    const response = await fetch(`/api/directories`);
    return response.json();
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

export { buildTileMeta, loadAssets, loadDirectories };