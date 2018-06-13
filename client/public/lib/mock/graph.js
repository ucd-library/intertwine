module.exports = {
  nodes : [
    {label : 'Sacramento', lat: 38.57, lng : -121.49},
    {label : 'Davis', lat: 38.53, lng : -121.74},
    {label : 'Paris', lat: 48.85, lng : 2.35},
    {label : 'London', lat: 51.50, lng : -0.12},
    {label : 'Germany', lat: 52.507189, lng: 13.394054},
    {label : 'Belgium', lat: 50.840391, lng: 4.373186},
    {label : 'Netherlands', lat: 52.329264, lng: 4.879682},
    {label : 'Napa', lat: 38.296847, lng: -122.284287},
    {label : 'LA', lat: 34.044988, lng: -118.470305},
    {label : 'Portland', lat: 45.519243, lng: -122.652634},
    {label : 'Seattle', lat: 47.582392, lng: -122.351749}
  ],
  externalNodes : [
    {label : 'Sacramento', lat: 38.57, lng : -121.49},
    {label : 'Davis', lat: 38.53, lng : -121.74},
    {label : 'Paris', lat: 48.85, lng : 2.35},
    {label : 'London', lat: 51.50, lng : -0.12},
    {label : 'Germany', lat: 52.507189, lng: 13.394054},
    {label : 'Belgium', lat: 50.840391, lng: 4.373186},
    {label : 'Netherlands', lat: 52.329264, lng: 4.879682},
    {label : 'Napa', lat: 38.296847, lng: -122.284287},
    {label : 'LA', lat: 34.044988, lng: -118.470305},
    {label : 'Portland', lat: 45.519243, lng: -122.652634},
    {label : 'Seattle', lat: 47.582392, lng: -122.351749}
  ],
  links : [
    {src: 'Sacramento', dst: 'Paris'},
    {src: 'Sacramento', dst: 'London'},
    {src: 'Sacramento', dst: 'Germany'},
    {src: 'Sacramento', dst: 'Belgium'},
    {src: 'Sacramento', dst: 'Netherlands'},
    {src: 'Sacramento', dst: 'Napa'},
    {src: 'Napa', dst: 'LA'},
    {src: 'Sacramento', dst: 'Portland'},
    {src: 'Portland', dst: 'Seattle'},
    {src: 'Davis', dst: 'Sacramento'},
    {src: 'Napa', dst: 'Davis'},
    {src: 'Paris', dst: 'London'}
  ]
}