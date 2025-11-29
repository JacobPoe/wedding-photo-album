const loadImagesWithOffset = async (offset, limit = 100) => {
    const response = await fetch(`/api/images?offset=${offset}&limit=${limit}`);
    return response.json(); // { total, offset, limit, files }
}

export { loadImagesWithOffset };