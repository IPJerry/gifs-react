import { useState } from 'react';
import { AddCategory, GifGrid  } from './components';


export const GifExpertApp = () => {

    //Creamos un hok par las categorias
    const [ categories, setCategories ] = useState( ['Motos'] );

    const onAddCategory = ( newCategory ) => {
        // categories.push(newCategory) // ( ... ) se utiliza para crear un nuevo array categories que incluye todas las categorias actuales y la nueva categoria
        

        if ( categories.includes(newCategory) ) return;
        setCategories([ newCategory, ...categories]);

    };
    
  return (
    <>
        <h1> GifExpertApp </h1>

        <AddCategory 
            // setCategories = { setCategories }
            onNewCategory = { ( event ) => onAddCategory( event ) }
        />

        {/* <button onClick={onAddCategory}> Agregar </button> */}

            { categories.map( (category ) =>//Map itera sobre un arreglo
                (
                    <GifGrid 
                        key={ category }
                        category={ category }
                    />
                )
            ) }
    </>
  )
}
