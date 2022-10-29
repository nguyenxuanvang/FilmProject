let movieList = [];
let rankingList = [];
let upcommingList = [];

//Tạo dữ liệu để up lên Local Storage

function Movie(movieImg,movieAlt,movieName,movieSubName,movieEp,movieCurrent,movieView) {
    this.movieImg = movieImg;
    this.movieAlt = movieAlt;
    this.movieName = movieName;
    this.movieSubName = movieSubName;
    this.movieEp = movieEp;
    this.movieCurrent = movieCurrent;
    this.movieView = movieView;
}
// Tạo dữ liệu cho movieList
for(let i = 0; i < 20; i+=1) {
    const movie = new Movie(
        'https://images.weserv.nl/?url=https://bilutv.link/film/19828/poster.jpg&w=300',
        'Lưu Quang Chi Thành',
        'Lưu Quang Chi Thành',
        'City of Streamer (2022)',
        'Tập 16',
        i%4,
        Math.floor(Math.random() * 901) + 100);
    movieList.push(movie);
}
// Tạo dữ liệu cho rankingList và upcommingList
for(let i = 0; i < 10; i+=1) {
    const movie1 = new Movie(
        'https://images.weserv.nl/?url=https://bilutv.link/film/17052/poster.jpg?v=1641302052&w=50',
        'Hoa Tuyết Điểm (Snowdrop)',
        'Hoa Tuyết Điểm (Snowdrop)',
        'Hoa Tuyết Điểm (Snowdrop)',
        'Full 16/16',
        i%4,
        Math.floor(Math.random() * 901) + 100);
    rankingList.push(movie1);
    const movie2 = new Movie(
        'https://images.weserv.nl/?url=https://bilutv.link/film/19962/poster.jpg&w=300',
        'LChiến Binh Cuối Cùng 2: Cội Nguồn Của Quỷ',
        'Chiến Binh Cuối Cùng 2: Cội Nguồn Của Quỷ',
        'Chiến Binh Cuối Cùng 2: Cội Nguồn Của Quỷ',
        'Trailer    ',
        i%4,
        Math.floor(Math.random() * 901) + 100);
    upcommingList.push(movie2);
}
// Đưa dữ liệu lên Local Storage
localStorage.setItem('movieList',JSON.stringify(movieList));

localStorage.setItem('rankingList',JSON.stringify(rankingList));

localStorage.setItem('upcommingList',JSON.stringify(upcommingList));
// Sắp xếp lại RankingList theo số lượt view
for(let i=0; i < rankingList.length - 1; i += 1)
    for(let j = i+1; j < rankingList.length; j += 1)
        if(rankingList[i].movieView < rankingList[j].movieView) {
            let mv = rankingList[i];
            rankingList[i] = rankingList[j];
            rankingList[j] = mv;
        }
const inputNode = document.querySelector('.header-user .search-input input');
inputNode.addEventListener("input",(event) => {
    if(event.target.value !== '') inputNode.parentElement.children[2].style.display = 'flex';
    else inputNode.parentElement.children[2].style.display = 'none';
    let searchContent = event.target.value;
    inputNode.parentElement.children[2].children[0].textContent = `Nội dung tìm kiếm '${searchContent}'`;
})
