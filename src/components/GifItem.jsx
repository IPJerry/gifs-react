
export const GifItem = ( { title, url} ) => {

  // console.log(props) //para ver las propiedades que recibimos

  return (
    <div className="card">
      <img src= { url } alt={ title } />
      <p> { title }</p>
    </div>
  )
}
