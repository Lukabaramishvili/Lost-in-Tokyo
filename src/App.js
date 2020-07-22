import React from 'react';
import 'tachyons';
import menu from './data/menu.js';
import './App.css';
import logoSvg from './images/logo.svg';

const Highlight = ({children, color}) => (
  <span className={`relative highlight highlight-${color}`}>
    <span className="relative z-2">{children}</span>
  </span>
)

const NavItem = ({className, href, children, logo}) => (
  <li className = {`mh2-ns f6 f4-1 tc ${className}`}>
    <a className='white no-underline' href={href}>
      {logo ? <img src={logoSvg} alt='Logo' className="db center logo" /> : children}
      </a>
  </li>
)

const Nav = () => (
  <nav className="pt3 pt4-ns mb4 mb0-ns">
    <ul className="list flex flex-wrap flex-nowrap-ns justify-between items-center pa0 ma0">
      {menu.map(item => (
        <NavItem {...item}/>
      ))}
    </ul>
  </nav>
)

const Intro = () => (
  <div className="m-auto-ns f4 f3-m f2-l tc w-80-l normal">
    {/* a div with a margin-bottom (mb3 and mb4 on non-small screens) */}
    <div className="mb3 mb4-ns">
      <Highlight color='aqua'>Lost in Tokyo</Highlight> is a directory of fun places to see, play in and <Highlight color='yellow'>explore</Highlight>, in <Highlight color='blue'>Tokyo</Highlight>, Japan.
    </div>
    <div>
      From <Highlight color='blue'>museum</Highlight> and <Highlight color='blue'>galleries</Highlight>, to <Highlight color='pink'>robot restaurants</Highlight> and <Highlight color='pink'>kitten cafes</Highlight>, Tokyo is the gift that
      keeps on giving. <Highlight color='yellow'>Dattebayo</Highlight>!
    </div>
  </div>
)

const App = () => (
  <div>
    <div className="min-vh-100 ph4 flex flex-column">
      <Nav/>
      {/* our navigation component */}
      <Intro />
    </div>
    <div className="flex flex-wrap container">{/* our attractions list component */}</div>
  </div>
)

export default App;
