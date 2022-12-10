function Card({ textoImagen, description, }) {
    return (
        <div className="CardImagen">
            <div className="Card-imagenes">
                <h1>{textoImagen}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Card;