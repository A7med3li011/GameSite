

export async function getDetails(id) {
    let options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a732b8b31bmsh9e3178e863b0cb3p11ee27jsncd6bc5f104fb',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    let data = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
    let result = await data.json(data)
  


    document.querySelector("#myDitals").innerHTML = `<div class="col-lg-4 mb-4">
    <img src="${result.thumbnail}" class="img-fluid">
  </div>
  <div class="col-lg-8">
    <h4>Title: Lost Ark</h4>
    <p>Category: <span>${result.genre}</span></p>
    <p>Platform: <span>${result.platform}</span></p>
    <p>Status: <span>${result.status}</span></p>
    <p>${result.description}</p>
    <a href=${result.game_url}><button>Show Game</button></a>
  </div>` ;
}