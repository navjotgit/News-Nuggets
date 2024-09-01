const api = "117a766a47584959a40ef3d8fb4766f0";
const URL = "https://newsapi.org/v2/everything?q=";

window.addEventListener("load",()=> fetchNews("India"));

async function fetchNews (query){
   const res =  await fetch(`${URL}${query}&apiKey=${api}`);
   const data = await res.json();
   console.log(data);
   for (let i = 0; i < 4; i++) {
      let nnElement = document.querySelector(`.nn${i + 1}`);
      nnElement.innerHTML = data.articles[i].content ;
  }
  for (let i = 0; i <4; i++) {
   let nnimage = document.querySelector(`#ni${i + 1}`);
   nnimage.src = data.articles[i].urlToImage ;
}
 for(let i = 0 ; i<4;i++){
   let nnHeading = document.querySelector(`#nh${i+1}`);
   nnHeading.innerHTML=data.articles[i].title;
 }
}
