let bandNames = ['The Who', 'Led Zeppelin', 'The Beatles', 'Rolling Stones', 'Pink Floyd', 'The Doors'];

// Removing articles 'a', 'an', 'the' from the band names and sorting them in lexicographic order
let sortedBandNames = bandNames.map(bands => bands.replace(/^(a|an|the)\s+/i, '')).sort();

// Adding sorted bands names to ul element
let ul = document.getElementById('bands');
sortedBandNames.forEach(bands => {
  let li = document.createElement('li');
  li.innerText = bands;
  ul.appendChild(li);
});
