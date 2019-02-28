import React from 'react'
import website from '../img/website.svg';
import github from '../img/github.svg'
import kaggle from '../img/kaggle.svg'
import bitbucket from '../img/bitbucket.svg'

const Navbar = class extends React.Component {

  componentDidMount() {
    // Get all "navbar-burger" elements
   const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
   if ($navbarBurgers.length > 0) {
 
     // Add a click event on each of them
     $navbarBurgers.forEach( el => {
       el.addEventListener('click', () => {
 
         // Get the target from the "data-target" attribute
         const target = el.dataset.target;
         const $target = document.getElementById(target);
 
         // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
         el.classList.toggle('is-active');
         $target.classList.toggle('is-active');
 
       });
     });
   }
 }
 
 render() {
   return (
  
  <nav className="navbar is-transparent" role="navigation" aria-label="main-navigation">
    <div className="nav-container">
      <a className="logo-box" href="/">
        <img src="/img/top.jpg" alt="Top Logo"/>
      </a>
      <h2 className="title_">
        H. Muraoka's Blog
      </h2>
      <div className="tag-container">
        <div className="tag-box">
          <span>#React</span>
          <span>#TypeScript</span>
          <span>#Go</span>
        </div>
        <div className="tag-box">
          <span>#Kotlin</span>
          <span>#Python</span>
          <span>#ML</span>
        </div>
      </div>
      <ul className="icon-list" >
        <li>
          <a href="https://www.kgjoi.com">
            <img src={website} alt="Website" />
            <span>Website</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/company1101">
              <img src={github} alt="Github" />
              <span>Github</span>
          </a>
        </li>
        <li>
          <a href="https://bitbucket.org/company1101/">
            <img src={bitbucket} alt="BitBucket" />
            <span>Bitbucket</span>
          </a>
        </li>
        <li>
          <a href="https://www.kaggle.com/pseprop">
            <img src={kaggle} alt="https://" />
            <span>Kaggle</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
  )}
}

export default Navbar
