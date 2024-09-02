import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import Select from '../Select';

import './Formularo.css'

const Formulario = (props) =>{

    const times =[
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX & Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [nome, setNome]   = useState('')
    const [cargo, setCargo] = useState('')
    const [img, setImg]     = useState('')
    const [time, setTime]   = useState('')

    const save = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            img,
            time
        })
    }

    return (
        <section className='formulario'>
            <form onSubmit={save}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    obrigatorio={false}
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={img}
                    aoAlterado={valor => setImg(valor)}
                />
                <Select 
                    obrigatorio={true}
                    label="Time" 
                    itens={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;