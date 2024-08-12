export const getGifts = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=z5bXGMegI4g7pROeZdO9VfL2e4NyE7ys&q=${category}&limit=10`
    const respuesta = await fetch (url);

    const {data} = await respuesta.json();

    const gifs = data.map( img => ({

        id: img.id, 
        title: img.title,
        url: img.images.downsized_medium.url

    }));

        return gifs;
        
}
