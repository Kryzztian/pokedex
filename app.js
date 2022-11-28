
let body = document.querySelector("body")
let button = document.getElementById("pokeButton");
let input = document.getElementById("textBox");
let imageOne = document.querySelector(".imageOne");
let imageTwo = document.querySelector(".imageTwo")
let pikachu = document.querySelector(".pikachu")
let glass = document.querySelector(".glass")
let container = document.createElement('div')
let picture = document.createElement('img')
let summary = document.createElement('div')
let stats = document.createElement('div')
let type1 = document.createElement('div')
let type2 = document.createElement('div')
let audio = document.getElementById('audio')

//====================================PIKACHU BUTTON==========================================================
//====================================PIKACHU BUTTON==========================================================
button.addEventListener("click", appear)
function appear(){
    toggleAppear()
    setTimeout(function(){
        toggleAppear()
    }, 1000)
}
function toggleAppear(){
    pikachu.classList.toggle("active")
}
//====================================PIKACHU BUTTON==========================================================
//====================================PIKACHU BUTTON==========================================================
function myTimeOut(){
    imageTwo.style.animationPlayState = "paused";
    imageOne.style.animationPlayState = "paused";
}

function expandPokedex(){
    imageOne.style.animation = ("moveup 3000ms , zoom-in 3000ms");
    imageTwo.style.animation = ("movedown 3000ms , zoom-in 3000ms");
    glass.style.height = "300%";
    button.style.opacity = "1.0";
    button.style.top = "70%";
    button.style.cursor = "pointer";
    button.disabled = false;
    input.style.opacity = "1.0";
    
    setTimeout(myTimeOut, 2500);
}

function removeClick(){
    imageOne.removeEventListener("click", expandPokedex);
    imageTwo.removeEventListener("click", expandPokedex);
}
function playSound(){
    audio.play();
}

  
function removeDisplay(){
    document.getElementById('videoCover').style.display = 'none';
}

button.addEventListener("click", getPokemon);
imageOne.addEventListener("click", expandPokedex);
imageOne.addEventListener("click", playSound);
imageOne.addEventListener("click", removeDisplay);
imageOne.addEventListener("click", removeClick);
imageTwo.addEventListener("click", expandPokedex);
imageTwo.addEventListener("click", playSound);
imageTwo.addEventListener("click", removeClick);
body.addEventListener("click", removeDisplay);





async function getPokemon(){
    container.remove();
    picture.remove();
    summary.remove();
    type1.remove();
    type2.remove();

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input.value.toLowerCase()}/`);
    let data = await response.json()
    let summaryResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${input.value.toLowerCase()}/`);
    let summaryData = await summaryResponse.json()
    let pokeName = data.name[0].toUpperCase() + data.name.slice(1)
    let pokeSummary = (summaryData["flavor_text_entries"][0]["flavor_text"])
    container.className = 'pokedexEntry'
    picture.className = "pokedexEntry"
    summary.className = "pokedexText"
    stats.className = "pokedexStats"
    summary.innerHTML = pokeName + "<br>" + pokeSummary.replace(/\f/g, "\n")
    picture.src = data.sprites.other["official-artwork"]["front_default"]
    type1.innerHTML = '<br>' + data.types[0].type.name;
    if(data.types[1] === undefined){
        type2.innerHTML = ""
    } else {
        type2.innerHTML = '<br>' + data.types[1].type.name
    }
    type1.className = `type ${type1.innerText}`
    type2.className = `type ${type2.innerText}`
    
    glass.prepend(picture)
    glass.append(stats)
    glass.append(summary)
    stats.prepend(type1)
    stats.append(type2)
}




//====================================BIDEO.JS==========================================================
//====================================BIDEO.JS==========================================================

// (function playVideo() {

//     var bv = new Bideo();
//     bv.init({
//       // Video element
//       videoEl: document.querySelector('#background_video'),
  
//       // Container element
//       container: document.querySelector('body'),
  
//       // Resize
//       resize: true,
  
//       autoplay: true,
  
//     //   isMobile: window.matchMedia('(max-width: 768px)').matches,
  
//     //   playButton: document.querySelector('#play'),
//     //   pauseButton: document.querySelector('#pause'),
  
//       // Array of objects containing the src and type
//       // of different video formats to add
//       src: [
//         {
//           src: 'pokedexBackground.mp4',
//           type: 'video/mp4'
//         }
//       ]
  
//     });
//   }());
