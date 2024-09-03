import './Card.css'

const Cards = (props) => {
    return (
        <div className='card'>
            <div className='cabecalho'>
                <img className='img' src={props.img} alt={props.nome}></img>
            </div>

            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
    )
}

export default Cards