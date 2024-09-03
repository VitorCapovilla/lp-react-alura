import Cards from '../Cards';
import './Times.css';

const Times = (props) => {
    return (
        props.colaboradores.length > 0 && <section className='time' style={{ backgroundColor: props.corSecundaria}}>
            <h3 style={{ borderBottomColor: props.corPrimaria }}>{props.nomeTime}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Cards key={colaborador.nome} corDeFundo={props.corPrimaria} nome={colaborador.nome} cargo={colaborador.cargo} img={colaborador.img}/>)}
            </div>
        </section>
    )
}

export default Times