module.exports = {
  nodes : [
    {label : 'Sacramento', lat: 38.57, lng : -121.49},
    {label : 'Davis', lat: 38.53, lng : -121.74},
    {label : 'Paris', lat: 48.85, lng : 2.35},
    {label : 'London', lat: 51.50, lng : -0.12}
  ],
  links : [
    {src: 'Sacramento', dst: 'Paris'},
    {src: 'Sacramento', dst: 'London'},
    {src: 'Davis', dst: 'Sacramento'},
    {src: 'Paris', dst: 'London'}
  ]
}