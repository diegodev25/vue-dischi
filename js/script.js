/*
Facciamo una chiamata ajax all’api di boolean al seguente indirizzo.
L’api ci restituirà una decina di dischi musicali che dovremo stampare a schermo con Vue.
*/
const genAlbum = 'https:flynn.boolean.careers/exercises/api/array/music';

var app = new Vue ({
  el: '#app',
  data: {
    album: null
  },
  mounted: function () {
    axios.get(genAlbum)
    .then(risposta => {
      let dataAlbum = risposta.data.response;
      this.album = dataAlbum;
      console.log(this.album);
    });
  }
})
