// Hiển Thị Dữ liệu lên giao diện
const bodyTrendMovieNode = document.querySelector('.body-trend-movie');
let index = 1;
rankingList.forEach(item => {
    let color = '#ccc';
    if(index === 1) color = '#3498db';
    if(index === 2) color = '#27ae60';
    if(index === 3) color = '#d35400';
    const liNode = document.createElement('li');
    liNode.innerHTML = `
        <a href="./infor.html">
            <p class="number-rating" style="color: ${color};">${index}</p>
            <div class="img-trend-movie">
                <img src="${item.movieImg}"
                alt="${item.movieAlt}">
            </div>
            <div class="content-trend-movie">
                <p class="title-trend-movie">${item.movieName}</p>
                <p class="ep-view-trend-movie">
                    <span class="ep-trend-movie">${item.movieEp}</span>
                    <span class="view-trend-movie">
                        <ion-icon name="eye"></ion-icon>
                            ${item.movieView}
                    </span>
                </p>
            </div>
        </a>
    `;
    bodyTrendMovieNode.appendChild(liNode);
    index += 1;
});
const bodyNewMovie = document.querySelector('.body-new-movie');
upcommingList.forEach(item => {
    const liNode = document.createElement('li');
    liNode.innerHTML = `
        <a href="./infor.html">
            <div class="img-new-movie">
                <img src="${item.movieImg}"
                alt="${item.movieAlt}">
            </div>
            <div class="content-new-movie">
                <p class="title-new-movie">${item.movieName}</p>
                <p class="ep-view-new-movie">
                    <span class="ep-new-movie">${item.movieEp}</span>
                    <span class="view-new-movie">
                        <ion-icon name="eye"></ion-icon>
                            ${item.movieView}
                    </span>
                </p>
            </div>
        </a>
    `;
    bodyNewMovie.appendChild(liNode);
});
const section1MovieNode = document.querySelector('.section-1 > .movie-display-grid');
movieList.forEach(item => {
    const liNode = document.createElement('li');
    let current = ``;
    if(item.movieCurrent === 1) current = `
        <button class="current-voice">
            <ion-icon name="volume-high"></ion-icon>
        </button>
    `;
    if(item.movieCurrent === 2) current = `
        <span class="current-vip">vip</span> 
    `;
    if(item.movieCurrent === 3) current = `
        <button class="current-voice">
            <ion-icon name="volume-high"></ion-icon>
        </button>
        <span class="current-vip">vip</span> 
    `;
    liNode.innerHTML = `
        <a href="./infor.html">
            <div class="movie-img">
                <img src="${item.movieImg}"
                alt="${item.movieAlt}">
            </div>
            <div class="movie-content">
                <p class="name-movie">${item.movieName}</p>
                <p class="sub-name">${item.movieSubName}</p>
            </div>
        </a>
        <div>
            <span class="ep">${item.movieEp}</span>
            <div>
                   ${current}
            </div>    
        </div>
    `;
    section1MovieNode.appendChild(liNode);
});
const section2MovieNode = document.querySelector('.section-2 > .movie-display-grid');
for(let i = 0; i < 16; i+= 1)  {
    const liNode = document.createElement('li');
    let current = ``;
    if(movieList[i].movieCurrent === 1) current = `
        <button class="current-voice">
            <ion-icon name="volume-high"></ion-icon>
        </button>
    `;
    if(movieList[i].movieCurrent === 2) current = `
        <span class="current-vip">vip</span> 
    `;
    if(movieList[i].movieCurrent === 3) current = `
        <button class="current-voice">
            <ion-icon name="volume-high"></ion-icon>
        </button>
        <span class="current-vip">vip</span> 
    `;
    liNode.innerHTML = `
        <a href="./infor.html">
            <div class="movie-img">
                <img src="${movieList[i].movieImg}"
                    alt="${movieList[i].movieAlt}">
            </div>
            <div class="movie-content">
                <p class="name-movie">${movieList[i].movieName}</p>
                <p class="sub-name">${movieList[i].movieSubName}</p>
            </div>
        </a>
        <div>
            <span class="ep">${movieList[i].movieEp}</span>
            <div>
                ${current}
            </div>    
        </div>
    `;
    section2MovieNode.appendChild(liNode);
}
const section3MovieNode = document.querySelector('.section-3 > .movie-display-grid');
for(let i = 0; i < 16; i+= 1)  {
    const liNode = document.createElement('li');
    let current = ``;
    if(movieList[i].movieCurrent === 1) current = `
        <button class="current-voice">
            <ion-icon name="volume-high"></ion-icon>
        </button>
    `;
    if(movieList[i].movieCurrent === 2) current = `
        <span class="current-vip">vip</span> 
    `;
    if(movieList[i].movieCurrent === 3) current = `
        <button class="current-voice">
            <ion-icon name="volume-high"></ion-icon>
        </button>
        <span class="current-vip">vip</span> 
    `;
    liNode.innerHTML = `
        <a href="./infor.html">
            <div class="movie-img">
                <img src="${movieList[i].movieImg}"
                    alt="${movieList[i].movieAlt}">
            </div>
            <div class="movie-content">
                <p class="name-movie">${movieList[i].movieName}</p>
                <p class="sub-name">${movieList[i].movieSubName}</p>
            </div>
        </a>
        <div>
            <span class="ep">${movieList[i].movieEp}</span>
            <div>
                ${current}
            </div>    
        </div>
    `;
    section3MovieNode.appendChild(liNode);
}
const section4MovieNode = document.querySelector('.section-4 > .movie-display-flex');
for(let i = 0; i < 6; i+= 1)  {
    const liNode = document.createElement('li');
    liNode.innerHTML = `
        <a href="./infor.html">
            <div class="movie-img">
                <img src="${movieList[i].movieImg}"
                    alt="${movieList[i].movieAlt}">
            </div>
            <div class="movie-content">
                <p class="name-movie">${movieList[i].movieName}</p>
            </div>
        </a>
    `;
    section4MovieNode.appendChild(liNode);
}
const section5MovieNode = document.querySelector('.section-5 > .movie-display-flex');
for(let i = 0; i < 6; i+= 1)  {
    const liNode = document.createElement('li');
    liNode.innerHTML = `
        <a href="./infor.html">
            <div class="movie-img">
                <img src="${movieList[i].movieImg}"
                    alt="${movieList[i].movieAlt}">
            </div>
            <div class="movie-content">
                <p class="name-movie">${movieList[i].movieName}</p>
            </div>
        </a>
    `;
    section5MovieNode.appendChild(liNode);
}
const section6MovieNode = document.querySelector('.section-6 > .movie-display-flex');
for(let i = 0; i < 6; i+= 1)  {
    const liNode = document.createElement('li');
    liNode.innerHTML = `
        <a href="./infor.html">
            <div class="movie-img">
                <img src="${movieList[i].movieImg}"
                    alt="${movieList[i].movieAlt}">
            </div>
            <div class="movie-content">
                <p class="name-movie">${movieList[i].movieName}</p>
            </div>
        </a>
    `;
    section6MovieNode.appendChild(liNode);
}
const section7MovieNode = document.querySelector('.section-7 > .movie-display-flex');
for(let i = 0; i < 6; i+= 1)  {
    const liNode = document.createElement('li');
    liNode.innerHTML = `
        <a href="./infor.html">
            <div class="movie-img">
                <img src="${movieList[i].movieImg}"
                    alt="${movieList[i].movieAlt}">
            </div>
            <div class="movie-content">
                <p class="name-movie">${movieList[i].movieName}</p>
            </div>
        </a>
    `;
    section7MovieNode.appendChild(liNode);
}
const section8MovieNode = document.querySelector('.section-8 > .movie-display-flex');
for(let i = 0; i < 6; i+= 1)  {
    const liNode = document.createElement('li');
    liNode.innerHTML = `
        <a href="./infor.html">
            <div class="movie-img">
                <img src="${movieList[i].movieImg}"
                    alt="${movieList[i].movieAlt}">
            </div>
            <div class="movie-content">
                <p class="name-movie">${movieList[i].movieName}</p>
            </div>
        </a>
    `;
    section8MovieNode.appendChild(liNode);
}
const section9MovieNode = document.querySelector('.section-9 > .movie-display-flex');
for(let i = 0; i < 6; i+= 1)  {
    const liNode = document.createElement('li');
    liNode.innerHTML = `
        <a href="./infor.html">
            <div class="movie-img">
                <img src="${movieList[i].movieImg}"
                    alt="${movieList[i].movieAlt}">
            </div>
            <div class="movie-content">
                <p class="name-movie">${movieList[i].movieName}</p>
            </div>
        </a>
    `;
    section9MovieNode.appendChild(liNode);
}
const section10MovieNode = document.querySelector('.section-10 > .movie-display-flex');
for(let i = 0; i < 6; i+= 1)  {
    const liNode = document.createElement('li');
    liNode.innerHTML = `
        <a href="./infor.html">
            <div class="movie-img">
                <img src="${movieList[i].movieImg}"
                    alt="${movieList[i].movieAlt}">
            </div>
            <div class="movie-content">
                <p class="name-movie">${movieList[i].movieName}</p>
            </div>
        </a>
    `;
    section10MovieNode.appendChild(liNode);
}
const section11MovieNode = document.querySelector('.section-11 > .movie-display-flex');
for(let i = 0; i < 6; i+= 1)  {
    const liNode = document.createElement('li');
    liNode.innerHTML = `
        <a href="./infor.html">
            <div class="movie-img">
                <img src="${movieList[i].movieImg}"
                    alt="${movieList[i].movieAlt}">
            </div>
            <div class="movie-content">
                <p class="name-movie">${movieList[i].movieName}</p>
            </div>
        </a>
    `;
    section11MovieNode.appendChild(liNode);
}
const section12MovieNode = document.querySelector('.section-12 > .movie-display-flex');
for(let i = 0; i < 6; i+= 1)  {
    const liNode = document.createElement('li');
    liNode.innerHTML = `
        <a href="./infor.html">
            <div class="movie-img">
                <img src="${movieList[i].movieImg}"
                    alt="${movieList[i].movieAlt}">
            </div>
            <div class="movie-content">
                <p class="name-movie">${movieList[i].movieName}</p>
            </div>
        </a>
    `;
    section12MovieNode.appendChild(liNode);
}
