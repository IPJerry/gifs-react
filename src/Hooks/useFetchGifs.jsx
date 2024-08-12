import { useEffect, useState } from "react";
import { getGifts } from "../Helpers/getGifs";

export const useFetchGifs = ( category ) => {
    
    const [images, setImages] = useState( [ ]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async(  ) => {
        const newImages = await getGifts( category );
        setImages( newImages );
        setIsLoading( false );
    }

    useEffect( ( ) => {
      //La  primera parte de la funcion es lo que se quiere ejecutar
        getImages( category );
      
    }, [ ]) //Arreglo de dependencias,vacio es que solo se ejecutara una sola vez que se crea y construye el componente
    
    
    // El return es un objeto, los hooks solo son funciones
    return{ 
        images, 
        isLoading
    }
}
