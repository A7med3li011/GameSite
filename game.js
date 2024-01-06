

import * as details from "./details.js"
export async function getGames(para) {
    let options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a732b8b31bmsh9e3178e863b0cb3p11ee27jsncd6bc5f104fb',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }

    };

    let data = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${para}`, options);
    let result = await data.json(data)
    


    console.log(result)

    let cartona = [];

    for (let i = 0; i < result.length; i++) {
        cartona += `<div class="col-sm-12 col-md-4 col-lg-3  ps-0 pe-0">
        <div class="card text-white" data-id=${result[i].id} id="card">
          <div class="box w-100  p-2">
            <img src="${result[i].thumbnail}" class="card-img-top  text-center " alt="...">
            <div class="card-body p-0">
              <div class="top fst-italic my-3 text-center d-flex justify-content-between">
                <div>${result[i].title}</div>
                <div class="bg-primary px-2 py-1 rounded-2" >Free</div>
              </div>
              <div class="middle opacity-50 mb-4  text-center ">
              ${result[i].short_description}
              </div>
              <div class="bottom d-flex justify-content-between border-top border-black">
                <div class="mt-2 px-1 py-1 bg-gradient rounded-4" >${result[i].genre}</div>
                <div class="mt-2 px-1 py-1 bg-gradient rounded-4" >  ${result[i].platform}</div>
              </div>
            </div>
          </div>
        </div>
      </div>`

    }

    document.querySelector("#myData").innerHTML=cartona

    let cards = document.querySelectorAll("#card")
    cards.forEach((card) => {
        card.addEventListener("click", () =>{
            
            details.getDetails(`${card.getAttribute("data-id")}`)
            document.querySelector(".home").classList.add("d-none")
            document.querySelector(".header").classList.add("d-none")
            document.querySelector(".navbar").classList.add("d-none")
            document.querySelector(".details").classList.remove("d-none")
            
        })

    })
     

}