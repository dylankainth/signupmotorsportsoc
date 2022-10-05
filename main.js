// import './style.css';
// import {Map, View} from 'ol';
// import TileLayer from 'ol/layer/Tile';
// import OSM from 'ol/source/OSM';
// import {useGeographic} from 'ol/proj';

// useGeographic();


// const map = new Map({
//   target: 'map',
//   layers: [
//     new TileLayer({
//       source: new OSM()
//     })
//   ],
//   view: new View({
//     center: [-0.3365286215343506,51.57208601700485],
//     zoom: 21,
//     rotation: 1.15,
  
//   })
// });

// map.addLayer(imageLayer);

import ImageWMS from 'ol/source/ImageWMS';
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import View from 'ol/View';
import {Image as ImageLayer, Tile as TileLayer} from 'ol/layer';
import {useGeographic} from 'ol/proj';
import ImageStatic from 'ol/source/ImageStatic';
import {getTransform} from 'ol/proj';
import {applyTransform} from 'ol/extent';
import GeoImage from 'ol-ext/source/GeoImage';

useGeographic();

const layers = [
  new TileLayer({
    source: new OSM(),
  }),
  // new ImageLayer({

  //   rotation: 1.15,
  //   source: new ImageWMS({
  //     url: 'map.jpg',
  //     ratio: 1,
  //   }),
  // }),

];
const map = new Map({
  layers: layers,
  target: 'map',
  view: new View({
    center: [-0.3365286215343506,51.57208601700485],
    zoom: 21,
    // rotation: 1.15,
  }),
});

var geoimg = new GeoImage({
  name: "Georef",
  opacity: .7,
  source: new GeoImage({
    url: 'https://viglino.github.io/ol-ext/examples/data/IGNF_PVA_1-0__1976-03-24_pt.jpg',
    imageCenter: [274724.75, 6243935.64],
    imageScale: [0.589,0.597],
    imageCrop: [0,0,5526,5000],
    //imageMask: [[273137.343,6242443.14],[273137.343,6245428.14],[276392.157,6245428.14],[276392.157,6242443.14],[273137.343,6242443.14]],
    imageRotate: Number(7.44*Math.PI/180),
    projection: 'EPSG:3857',
  })
});
map.addLayer(geoimg);

