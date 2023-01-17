import React from 'react';
import './App.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { linkData } from './data/linkdata';

function App() {
  return (
    <BrowserRouter>
      <div className='navMenu'>
      <div className='navMenuItem'>
      <h2>3D worlds | WIP</h2>
            <p>
              An experimental project dealing with the creation of immersive 3d worlds with the use use of threejs & aframe
            </p>
            <p className='ghLink'><a href="https://github.com/safwbdev/3dworld"><i class="fa-brands fa-square-github"></i> <span>GH Repo</span></a></p>
            <hr />
            <h2>Instructions:</h2>
            <ul>
            <li>Use WASD or Arrow buttons to move around</li>
            <li>click and hold down you mouse button to adjust your view</li>
            <li>i.e. Controls are similar to an FPS</li>

            </ul>
            
        </div>
      </div>
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
            <div className='buttonRow'>
          <NavLink to={link.uri} className="mainLink">Explore</NavLink>
              </div>
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
