import React from 'react'
import 'aframe';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import sky from '../assets/images/stars.jpeg'
import scenes from '../assets/scenes/hartnell.glb'

const Tardis = () => {
    const loader = new GLTFLoader();

  loader.load(scenes, (d) => {
    const entity = document.getElementById("scene")
    entity.object3D.add(d.scene);
  });
  return (
    <a-scene>
        <a-assets>
            <img src={sky} id="sky" alt="sky" />
        </a-assets>
        <a-sky
            color="#fff"
            material = "src: #sky"
            rotation="0 0 0">
        </a-sky>
        <a-entity id="scene" position="0 -2 0" scale="1 1 1"></a-entity>
  </a-scene>
  )
}

export default Tardis