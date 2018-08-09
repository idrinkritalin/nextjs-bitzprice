import Link from 'next/link'
import { FaBitcoin } from 'react-icons/fa'

const NavBar = () => (
   <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
         <div className="container">
            <a className="navbar-brand" href="#">
             <FaBitcoin /> BitzPrice
            </a>
            <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
               <li className="nav-item">
                  <Link href="/"><a className="nav-link">Home</a></Link>
               </li>
            </ul>
            </div>
         </div>
      </nav>
   </div>
)

export default NavBar