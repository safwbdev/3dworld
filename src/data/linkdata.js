import Cyber from "../Scenes/Cyber";
import Gotham from "../Scenes/Gotham";
import Tardis from "../Scenes/Tardis";

export const linkData = [
  {
    uri: "/cyberpunk",
    label: "Cyberpunk",
    element: <Cyber />,
    sources: [
      {
        name: "0418.rick",
        link: "https://sketchfab.com/3d-models/vaporwave-mountains-655309efbf7647f9a6f573a1196cfdc9",
      },
      {
        name: "Meloque",
        link: "https://sketchfab.com/3d-models/delorean-time-machine-low-poly-a36c5afa1bb24e16a3adfbcf08eb9390",
      },
    ],
  },
  {
    uri: "/gotham",
    label: "Gotham Exterior",
    element: <Gotham />,
    sources: [
      {
        name: "athmos001",
        link: "https://sketchfab.com/3d-models/gotham-by-night-be102daeda5d47ec8920b2ad42670aff",
      },
    ],
  },
  {
    uri: "/tardis",
    label: "The Tardis",
    element: <Tardis />,
    sources: [
      {
        name: "Matt Dixon",
        link: "https://sketchfab.com/3d-models/hartnells-tardis-console-room-3047323171e841828be441bbff70583e",
      },
    ],
  },
];
