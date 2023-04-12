import foto from '../assets/logo.svg'
import './Header.css'

const Header = () => {
  return (
    <div>
      <div className='header'>
         <div>
            <img src={foto} alt="" />
         </div>

         <div>
            <ul className='menu'>
               <li><a href="#Sobre">Sobre</a></li>
               <li><a href="#Sobre">Oportunidade</a></li>
               <li><a href="#Sobre">Metodologia</a></li>
               <li><a href="#Sobre">Ementa</a></li>
               <li><a href="#Sobre">Projetos</a></li>
               <li><a href="#Sobre">Depoimentos</a></li>
               <li><a href="#Sobre">Dúvidas</a></li>
            </ul>
         </div>

         <div>
            <button>PRÉ-VENDA</button>
         </div>
      </div>
    </div>
  )
}

export default Header