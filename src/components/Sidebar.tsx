import SocialNetworks from './SocialNetworks'
import InformationContainer from './informationContainer'
import Avatar from '../img/EU-CIRCULO.png'
import '../styles/components/sidebar.sass'


const Sidebar = () => {
    return (
    <aside id="sidebar">
        <img src={Avatar} alt="Vinícius Mendes" />
        <p className="title">Desenvolvedor</p>
        <SocialNetworks />
        <InformationContainer />
        <a href="" className="btn">
            Download Currículo
        </a>
        </aside>
    )
}

export default Sidebar