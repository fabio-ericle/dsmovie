import './styles.css';
import { ReactComponent as GithubIcon } from 'assets/images/icon-github.svg';

function Navbar() {
   return (
      <header>
         <nav className="container">
            <div className="dsmovie-nav-content">
               <h1>DSMovie</h1>
               <a href="https://github.com/fabio-ericle" target="_blank" rel="fabio">
                  <div className="dsmovie-contact-container">
                     <GithubIcon style={{ "fill" : "white" }} />
                     <p className="dsmovie-contact-link">/fabio-ericle</p>
                  </div>
               </a>
            </div>
         </nav>
      </header>
   );
}

export default Navbar;