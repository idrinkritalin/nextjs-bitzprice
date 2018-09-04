import Link from 'next/link'
import { FaBitcoin } from 'react-icons/fa'

const NavBar = () => (
   <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
         <div className="container">
            <a className="navbar-brand" href="#">
             <h1 className="nav-title"><FaBitcoin /> BitzPrice</h1>
            </a>
            <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
               <li className="nav-item"></li>
            </ul>
            </div>
         </div>
      </nav>

      <style jsx>
      {`
         .nav-title {
            color: white
         }
      `}
      </style>
   </div>
)

export default NavBar