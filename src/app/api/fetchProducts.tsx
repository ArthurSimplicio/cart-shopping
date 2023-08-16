
const fetchProducts = async (query:string|number) => {
    const res = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    const data = await res.json();
    return data.results;
}
export default fetchProducts