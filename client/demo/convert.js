const path = require('path');
const fs = require('fs');
const csv = require('csv-parse');
const kml = require('gtran-kml');

let csvFile = 'JOP Connections - Sheet1.csv';
let kmlFile = 'IntertWINE Judgment of Paris.kml';

let descriptionParts = ['id', 'title', 'location', 'type', 'date'];


async function run() {
  let geojson = await parseKml();
  let links = await parseCsv();

  let externalNodes = {};
  geojson.features.forEach(f => {
    let parts = f.properties.location.split(',').map(p => p.trim());
    if( parts.length === 1 ) parts.push('California');

    f.properties.groupId = parts[1];

    if( externalNodes[parts[1]] ) return;
    externalNodes[parts[1]] = {
      type: "feature",
      geometry: f.geometry,
      properties: {
        "id" : parts[1],
        "name": parts[1]
      }
    }
  });

  let tmp = [];
  for( var key in externalNodes ) {
    tmp.push(externalNodes[key]);
  }
  externalNodes = tmp;

  let graph = JSON.stringify({
    links,
    externalNodes, 
    nodes : geojson.features
  }, '  ', '  ');

  fs.writeFileSync(
    path.join(__dirname, '..', 'public', 'lib', 'mock', 'graph.js'), 
    'module.exports = '+graph
  );
}

async function parseKml() {
  let geojson = await kml.toGeoJson(path.join(__dirname, kmlFile));

  geojson.features.forEach(f => {
    // bug fix for parser ... :/
    let point = null;
    f.geometry.coordinates.forEach(p => {
      if( isNaN(p[0]) || isNaN(p[1]) ) return;
      point = p;
    });
    f.geometry.coordinates = point;


    let parts = f.properties.description.split('<br>');
    f.properties.description = [];
    parts.forEach((value, index) => {
      if( descriptionParts.length > index ) {
        f.properties[descriptionParts[index]] = value;
      } else {
        f.properties.description.push(value);
      }
    });
    f.properties.description = f.properties.description.join(' ');

  });

  return geojson;
}

function parseCsv() {
  return new Promise((resolve, reject) => {
    csv(fs.readFileSync(path.join(__dirname, csvFile)), {}, (err, data) =>{
      data.splice(0, 1);
      resolve(data.map(item => {
        return {
          src : item[0],
          type : item[1],
          dst : item[2],
          description : item[3]
        }
      }));
    });
  });
}

run();