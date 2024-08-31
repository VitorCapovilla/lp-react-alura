import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import Select from '../Select';

import './Formularo.css'

const Formulario = () =>{

    const times =[
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX & Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const save = (evento) => {
        evento.preventDefault();
        console.log("Formulario saved")
    }

    return (
        <section className='formulario'>
            <form onSubmit={save}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome"/>
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo"/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
                <Select obrigatorio={true} label="Time" itens={times}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;