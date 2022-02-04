function Recipe({title,calories,image}) {
    return ( 
        <div className='each-box'>
            <h1>{title}</h1>
            <p>{calories}</p>
            <img className='recipe-photo'src={image} alt ={title}></img>
        </div>
    );
}

export default Recipe;