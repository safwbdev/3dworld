import React from 'react';
import './App.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { linkData } from './data/linkdata';

function App() {
  return (
    <BrowserRouter>
      <div className='navMenu'>
        {linkData.map((link) => (
          <div className='navMenuItem'>
            <h2>{link.label}</h2>
            <p>Sources used:</p>
            <ul className='sourceList'>
              {link.sources.map((source) =>(
                <li>
                  <a href={source.link} target="_blank" rel="noreferrer">
                    {source.name}
                  </a>
                  </li>

              ))}
            </ul>
          <NavLink to={link.uri} className="mainLink">Explore</NavLink>
        </div>
        ))}
      </div>
      <Routes>
      {linkData.map((link) => (
          <Route exact path={link.uri} element={link.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
