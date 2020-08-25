import React, { useState } from 'react';
import 'tachyons';
import menu from './data/menu.js';
import './App.css';
import attractions from './data/attractions';

const Highlight = ({children, color}) => (
  <span className={`relative highlight highlight-${color}`}>
    <span className="relative z-2">{children}</span>
  </span>
)

const NavItem = ({className, href, children, logo}) => (
  <li className = {`mh2-ns f6 f4-1 tc ${className}`}>
    <a className='white no-underline' href={href}>
      {logo ? <img src={require('./images/logo.svg')} alt='Logo' className="db center logo" /> : children}
      </a>
  </li>
)

const Nav = () => (
  <nav className="pt3 pt4-ns mb4 mb0-ns">
    <ul className="list flex flex-wrap flex-nowrap-ns justify-between items-center pa0 ma0">
      {menu.map(item => (
        <NavItem key={item.children} {...item}/>
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

const Attraction = ({title, description, className, image, link}) => {

  const [showInfo, setShowInfo] = useState(false);

  const handleShowInfo = () => {
    setShowInfo(true);
  }

  const handleShowInfoClose = () => {
    setShowInfo(false);
  }

  return (
  <div
    onMouseEnter={handleShowInfo}
    onMouseLeave={handleShowInfoClose}
    className={`ph4 ph5-ns ph0-l mb4 mb5-ns w-100 overflow-hidden pointer attraction ${className}`}
  >
    <div className="relative">
      <div className="absolute w-100 h-100 flex items-center pa3 pa4-ns bg-aqua overlay"
      style={{ transform: showInfo ? "none" : "translateY(-100%)" }}
      >
        <div>
          <h1 className="f4 f3-ns mt0 mb2 regular black normal lh-title">
          {link ? (
          <a
            className="f4 f3-ns mt0 mb2 regular black normal lh-title no-underline"
            href={`${link}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </a>
        ) : (
          title
        )}
        </h1>
          <p className="lh-title lh-copy-ns mv0 black f6 measure-l">{description}</p>
        </div>
      </div>
      <img src={require (`./images/${image}`)} alt='attraction'/>
    </div>
  </div>
)}

const App = () => (
  <div>
    <div className="min-vh-100 ph4 flex flex-column">
      <Nav/>
      <Intro />
    </div>
    <div className="flex flex-wrap container">
      {attractions.map(attraction => <Attraction key={attraction.title} {...attraction} />)}
    </div>
  </div>
)

export default App;
