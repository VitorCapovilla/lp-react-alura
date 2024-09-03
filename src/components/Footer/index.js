import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='social'>
                <img src='/imagens/fb.png' alt='Facebook Icon'></img>
                <img src='/imagens/tw.png' alt='Twitter Icon'></img>
                <img src='/imagens/ig.png' alt='Instagram Icon'></img>
            </div>
            <div className='logo'>
                <img src='/imagens/logo.png' alt='Logo Icon'></img>
            </div>
            <div className='creditos'>
                <h5>Desenvolvido por Capovilla</h5>
            </div>
        </div>
    )
}

export default Footer