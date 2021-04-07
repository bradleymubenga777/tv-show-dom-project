//Setting The Root Element As A Global Variable
let root = document.getElementById('root');
let searchValue = document.getElementById('searchBar');

function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);

  //Interating Through The Array Of Objects (All Episodes).
  allEpisodes.forEach(episode => {
    
    //Checking The Value Input Box In Real-time
    searchValue.addEventListener("input", () => {
    
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
    })
  });
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
/*   rootElem.textContent = `Got ${episodeList.length} episode(s)`; */
}

window.onload = setup;

