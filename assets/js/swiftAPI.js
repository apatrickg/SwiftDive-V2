// Holds Taylor Info
let taylorPhotos = [];
let taylorInfo = [];
let similarInfo = [];
let taylorAlbums = [];
let taylorID = 111352


function loadTasteDive(){
  // TastDive API
  const apiKey = '406230-SwiftieL-J6OCQIAQ';
  const proxy = 'https://peaceful-fjord-61207.herokuapp.com/';
  const apiURL = `${proxy}https://tastedive.com/api/similar?limit=9&info=1&q=Taylor Swift&k=${apiKey}`;

  fetch(apiURL)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          similarInfo = data.Similar.Results;
          taylorInfo = data.Similar.Info[0]
          document.querySelector('#bio').innerHTML = taylorInfo.wTeaser
          document.querySelector('#rA-0').innerText = similarInfo[0].Name
          document.querySelector('#rA-1').innerText = similarInfo[1].Name
          document.querySelector('#rA-2').innerText = similarInfo[2].Name
          document.querySelector('#rA-3').innerText = similarInfo[3].Name
          document.querySelector('#rA-4').innerText = similarInfo[4].Name
          document.querySelector('#rA-5').innerText = similarInfo[5].Name
          document.querySelector('#rA-6').innerText = similarInfo[6].Name
          document.querySelector('#rA-7').innerText = similarInfo[7].Name
          document.querySelector('#rA-8').innerText = similarInfo[8].Name
          document.querySelector('#rAP-0').innerText = similarInfo[0].wTeaser
          document.querySelector('#rAP-1').innerText = similarInfo[1].wTeaser
          document.querySelector('#rAP-2').innerText = similarInfo[2].wTeaser
          document.querySelector('#rAP-3').innerText = similarInfo[3].wTeaser
          document.querySelector('#rAP-4').innerText = similarInfo[4].wTeaser
          document.querySelector('#rAP-5').innerText = similarInfo[5].wTeaser
          document.querySelector('#rAP-6').innerText = similarInfo[6].wTeaser
          document.querySelector('#rAP-7').innerText = similarInfo[7].wTeaser
          document.querySelector('#rAP-8').innerText = similarInfo[8].wTeaser
          })
        .catch(err => {
            console.log(`error ${err}`)
  });
}


function loadAudioPhotos(){
    // Audiodb API
  const audioURL = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=taylor+swift`
  fetch(audioURL)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          taylorPhotos = data.artists[0]
          document.querySelector('#sidePanel').src = taylorPhotos.strArtistThumb
          document.querySelector('#fanArt').src = taylorPhotos.strArtistFanart2
          document.querySelector('#sideBanner').src = taylorPhotos.strArtistClearart
        })
        .catch(err => {
            console.log(`error ${err}`)
  });
}

function loadAlbum(){
  // Audiodb API
const albumURL = `https://theaudiodb.com/api/v1/json/2/album.php?i=${taylorID}`
fetch(albumURL)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        taylorAlbums = data.album;
        addPhotos(taylorAlbums);
       })
      .catch(err => {
          console.log(`error ${err}`)
});
}

function addPhotos(arr){
  document.querySelector('#b-1').src = arr[17].strAlbumThumb;
  document.querySelector('#center').src = arr[5].strAlbumThumb;
  document.querySelector('#b-2').src = arr[14].strAlbumThumb;
  document.querySelector('#top').src = arr[3].strAlbumThumb;
}

// onLoad
loadAudioPhotos();
loadTasteDive();
loadAlbum();