//Setting The Global Variables
let root = document.getElementById('root');
let searchBar = document.getElementById('searchBar');
let searchTerm = '';
let selectEpisode = '';
let count = document.getElementById('count');
let selectElement = document.getElementById('selectEpisodes');
let episodeLength = 0;

var data = [];

//Constant Variables
const endPoint = 'https://api.tvmaze.com/shows/82/episodes';

function setup() {
/*   makePageForEpisodes(data); */
    //Fetching Our Data From API
    fetch(endPoint)
    .then(res => res.json())
    .then(data => {
      displayAfterFetch(data)
    })
    .catch(error => console.log(error));


    //Function That Displays The Card In The DOM After API Request Is Made
    function displayAfterFetch(data){
          //Checking The Value Input Box In Real-time.
    searchBar.addEventListener('input', (event) => {
      //Setting Our Search Term Value.
      searchTerm = event.target.value.toLowerCase();
      showEpisodes();
    });

    selectElement.addEventListener('change', (event) => {
      //Setting The Value Of Our Search Term.
      selectEpisode = event.target.value.toLowerCase();
      console.log(selectEpisode);
      selectEpisodes();
    });


    //Search Bar Function
    const showEpisodes = () => {
      //Clearing All Elements In The Root.
      root.innerHTML = ``;
      episodeLength = 0;

      //Filtering Through All Episodes To See If It Matches Search.
      data
      .filter((by) => {
        return (
          by.name.toLowerCase().includes(searchTerm) || by.summary.toLowerCase().includes(searchTerm)
        )
      })
      //Then We Take The Result, Loop Through It And Show It In Our DOM.
      .forEach((episode) => {
        
        //For Each Episode Increment Episode Number
        episodeLength++;
        
        //Creating An Element (Card) For Each Episode, And Adding Bootstrap Classes & Attributes To It.
        let episodeCard = document.createElement(`div`);
        episodeCard.className = `card col-sm-12 col-md-12 col-lg-4 col-xl-4 m-2`;
        episodeCard.setAttribute(`style`, `width: 18rem`);
        
        console.log(data)  //Creating An Option For Each Episode.
        let selectItem = document.createElement(`option`);
        selectItem.setAttribute(`value`, `${episode.name}`);
            
        //Setting The Inner HTML Values For The Element Of Each Episode.
        episodeCard.innerHTML = `
          <h5 class="card-title text-center pt-2">${episode.name} - S${episode.season}E${episode.number}</h5>
          <img src="${episode.image[`medium`]}" class="card-img-top img-fluid" width="250px" alt="${episode.name} Episode Thumbnail">
          <div class="card-body">
            ${episode.summary}
          </div>
          `;

        selectItem.innerText = `${episode.name}`;
            
        //Appending The Created Elements And Values To The Root Element.
        root.appendChild(episodeCard);
        selectElement.appendChild(selectItem);

        //Setting The Episode Count Value
        count.innerText = `Displaying ${episodeLength}/73 Episodes`;
      });
    };

    //Select Element Function
    const selectEpisodes = () => {
      //Clearing All Elements In The Root.
      root.innerHTML = ``;
      episodeLength = 0;

      //Filtering Through All Episodes To See If It Matches Search.
      data
      .filter((by) => {
        return (
          by.name.toLowerCase().includes(selectEpisode) || by.summary.toLowerCase().includes(selectEpisode)
        )
      })
      //Then We Take The Result, Loop Through It And Show It In Our DOM.
      .forEach((episode) => {
        //For Each Episode Increment Episode Number
        episodeLength++;
        
        //Creating An Element (Card) For Each Episode, And Adding Bootstrap Classes & Attributes To It.
        let episodeCard = document.createElement(`div`);
        episodeCard.className = `card col-sm-12 col-md-12 col-lg-4 col-xl-4 m-2`;
        episodeCard.setAttribute(`style`, `width: 18rem`);
        
        //Creating An Option For Each Episode.
        let selectItem = document.createElement(`option`);
        selectItem.setAttribute(`value`, `${episode.name}`);
            
        //Setting The Inner HTML Values For The Element Of Each Episode.
        episodeCard.innerHTML = `
          <h5 class="card-title text-center pt-2">${episode.name} - S${episode.season}E${episode.number}</h5>
          <img src="${episode.image[`medium`]}" class="card-img-top img-fluid" alt="${episode.name} Episode Thumbnail">
          <div class="card-body">
            ${episode.summary}
          </div>
          `;

        selectItem.innerText = `${episode.name}`;
            
        //Appending The Created Elements And Values To The Root Element.
        root.appendChild(episodeCard);
        selectElement.appendChild(selectItem);

        //Setting The Episode Count Value
        count.innerText = `Displaying ${episodeLength}/73 Episodes`;
      });
    }

    //Function To Show All Episodes By Default
    const showEverything = () => {
      //Clearing All Elements In The Root.
      root.innerHTML = ``;
      episodeLength = 0;

      //Looping Through Each And Every Episode.
      data.forEach(episode => {
        //For Each Episode Increment Episode Number
        episodeLength++;
        
        //Creating An Element (Card) For Each Episode, And Adding Bootstrap Classes & Attributes To It.
        let episodeCard = document.createElement(`div`);
        episodeCard.className = `card col-sm-12 col-md-12 col-lg-4 col-xl-4 m-2`;
        episodeCard.setAttribute(`style`, `width: 18rem`);
        
        //Creating An Option For Each Episode.
        let selectItem = document.createElement(`option`);
        selectItem.setAttribute(`value`, `${episode.name}`);
            
        //Setting The Inner HTML Values For The Element Of Each Episode.
        episodeCard.innerHTML = `
          <h5 class="card-title text-center pt-2">${episode.name} - S${episode.season}E${episode.number}</h5>
          <img src="${episode.image[`medium`]}" class="card-img-top img-fluid" alt="${episode.name} Episode Thumbnail">
          <div class="card-body">
            ${episode.summary}
          </div>
          `;

        selectItem.innerText = `${episode.name}`;
            
        //Appending The Created Elements And Values To The Root Element.
        root.appendChild(episodeCard);
        selectElement.appendChild(selectItem);

        //Setting The Episode Count Value
        count.innerText = `Displaying ${episodeLength}/73 Episodes`;
      })
    }

    //Checking If The Search Bar Is Empty.
    showEverything();
    }
  }



function makePageForEpisodes(episodeList) {
/*   const rootElem = document.getElementById("count");
  rootElem.textContent = `Displaying ${episodeList.length} episode(s)`; */
}

window.onload = setup;

