import "aframe";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import prop from "../assets/models/delorean.glb";

const Delorean = ({ x, y, z }) => {
  const loader = new GLTFLoader();
  loader.load(prop, (d) => {
    const entity = document.getElementById("prop");
    entity.object3D.add(d.scene);
  });
  return (
    <a-entity
      id="prop"
      position={`${x} ${y} ${z}`}
      scale="4 4 4"
      rotation="0 0 0"
    ></a-entity>
  );
};

export default Delorean;
