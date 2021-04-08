//Setting The Root Element As A Global Variable
let root = document.getElementById('root');
let searchBar = document.getElementById('searchBar');
let searchTerm = "";
let count = document.getElementById('count');

function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
    
  //Checking If The Search Bar Is Empty.
    if (searchBar.value == "") {
        root.innerHTML = `<h5>TYPE TO START SEARCH</h5>`;
    }

    //Checking The Value Input Box In Real-time.
    searchBar.addEventListener("input", (event) => {
        //Setting Our Search Term Value.
        searchTerm = event.target.value.toLowerCase();
        showEpisodes();
    });

    const showEpisodes = () => {
      //Clearing All Elements In The Root.
      root.innerHTML = ``;
      
      //Making Our Episode Number Variable Acessesible Within This Scope.
      let episodeLength = 0;

      //Filtering Through All Episodes To See If It Matches Search.
      allEpisodes
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
            
        //Setting The Inner HTML Values For The Element Of Each Episode.
        episodeCard.innerHTML = `
          <h5 class="card-title text-center pt-2">${episode.name} - S${episode.season}E${episode.number}</h5>
          <img src="${episode.image[`medium`]}" class="card-img-top img-fluid" alt="${episode.name} Episode Thumbnail">
          <div class="card-body">
            ${episode.summary}
          </div>
          `;
            
        //Appending The Created Elements And Values To The Root Element.
        root.appendChild(episodeCard);

        //Setting The Episode Count Value
        count.innerText = `Displaying ${episodeLength}/73 Episodes`;
      });
    };
  }



function makePageForEpisodes(episodeList) {
/*   const rootElem = document.getElementById("count");
  rootElem.textContent = `Displaying ${episodeList.length} episode(s)`; */
}

window.onload = setup;

