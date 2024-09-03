import './Select.css';

const Select = (props) => {

    return (
        <div className='select'>
            <label>{props.label}</label>
            <select required={props.obrigatorio} onChange={evento => props.aoAlterado(evento.target.value)} value={props.valor}>
                <option disabled value="">Selecione o Time</option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default Select