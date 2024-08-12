import { GifItem } from "./GifItem";
import { useFetchGifs } from '../Hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    // desestructuramosun objeto, sepuede regresarlo que sea de un customHook
    const { images, isLoading } = useFetchGifs(category);

    console.log(isLoading);

        return (
            <>
                <h1>{ category }</h1>
                {
                    isLoading && ( <h2 > Cargando imagenes ... </h2>)
                }
                
                {/* className se usa cuando usamos JS */}
                <div className="card-grid"> 
                    {
                        images.map( ( image ) => ( 
                            <GifItem 
                                key={ image.id }
                               { ...image }      
                            />
                        ))
                    }
                </div>

            </>
        )
}
