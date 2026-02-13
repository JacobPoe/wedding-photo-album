const loadAssets = async (category) => {
    const response = await fetch(`/api/images?category=${category}`);
    return response.json(); // { total, offset, limit, files }
}

const loadDirectories = async () => {
    const response = await fetch(`/api/directories`);
    return response.json();
}

export { loadAssets, loadDirectories };