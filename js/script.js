function pegavalores(){
    const cantor = "Faun";
    const musica = document.getElementById("musica").value;
    let letra = document.getElementById("letra")
  
    const url = "https://api.lyrics.ovh/v1/"+cantor+"/"+musica;
  
    fetch(url, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((response) => {
        letra.innerHTML = response.lyrics
      })  
  }