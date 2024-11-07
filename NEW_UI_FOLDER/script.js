let temperature = document.querySelector("#upper-weather");
console.log(temperature);
let api = "https://api.weatherapi.com/v1/current.json?key=a5f66c56dba948c4b1d80040240411&q=delhi&aqi=yes";
let p = fetch(api);
p.then((value)=>{
    return value.json();
}).then((value)=>{
    // console.log(value);
    temperature.innerHTML=value.location.name + "  |  "+value.current.temp_c+"°C";
})

let newApi = "https://newsapi.org/v2/everything?q=trending&from=2024-10-07&sortBy=publishedAt&apiKey=117a766a47584959a40ef3d8fb4766f0";


let mainNewsHeading = document.querySelector("#mainNewsHeading");
let mainNewsimg = document.querySelector("#mainNewsimg");
let mainNewsContent = document.querySelector("#mainNewsContent");
let mainNewsupdateTime = document.querySelector("#mainNewsupdateTime");




let np = fetch(newApi);
np.then((value)=>{
    return value.json();
}).then((value)=>{
    console.log(value);
    mainNewsHeading.innerHTML=value.articles[10].title;
    mainNewsimg.src=value.articles[10].urlToImage;
    mainNewsContent.innerHTML=value.articles[10].content;
    mainNewsupdateTime.innerHTML=value.articles[10].publishedAt;
})

let smallApi = "https://newsapi.org/v2/everything?q=india&from=2024-10-07&sortBy=publishedAt&apiKey=117a766a47584959a40ef3d8fb4766f0";



let sp = fetch(smallApi);
sp.then((value)=>{
    return value.json();
}).then((value)=>{
    for(let i = 2;i<=5;i++){
        let ni = document.querySelector(`#ni${i}`);
        ni.src=value.articles[i].urlToImage;
        let nt = document.querySelector(`#nt${i}`);
        nt.innerHTML=value.articles[i].title;
        let nc = document.querySelector(`#nc${i}`);
        nc.innerHTML=value.articles[i].content;
        let nu = document.querySelector(`#nu${i}`);
        nu.innerHTML=value.articles[i].publishedAt;
    }
})
let smallCard1 = document.querySelector("#smallCard1");
let smallCard2 = document.querySelector("#smallCard2");
let smallCard3 = document.querySelector("#smallCard3");
let smallCard4 = document.querySelector("#smallCard4");
let spacialModeCard = document.querySelector("#spacialModeCard");
let btn = document.querySelector("#dark-mode");
let currMode = "light";
let body = document.querySelector("body");
let whichMode = document.querySelector("#which-mode");
let modeImg = document.querySelector(".mode-img");
btn.addEventListener("click",()=>{
    if(currMode==="light"){
        body.classList.remove("light");
        
        currMode="dark";
        body.classList.add("dark");
        whichMode.innerHTML="dark-mode";
        modeImg.src="dark-moon.jpg";
        spacialModeCard.classList.add("text-white");
        spacialModeCard.classList.add("bg-dark");
        smallCard1.classList.add("text-white", "bg-dark");
        smallCard2.classList.add("text-white", "bg-dark");
        smallCard3.classList.add("text-white", "bg-dark");
        smallCard4.classList.add("text-white", "bg-dark");

       
        
    }else{
        body.classList.remove("dark");
        currMode="light";
        body.classList.add("light");
        whichMode.innerHTML="light-mode";
        modeImg.src="light-sun.jpg";
        spacialModeCard.classList.remove("text-white");
        spacialModeCard.classList.remove("bg-dark");
        smallCard1.classList.remove("text-white", "bg-dark");
        smallCard2.classList.remove("text-white", "bg-dark");
        smallCard3.classList.remove("text-white", "bg-dark");
        smallCard4.classList.remove("text-white", "bg-dark");


    }
    console.log(currMode);
})



let searchButton = document.querySelector("#search-button");
let searchBar = document.querySelector("#search-bar");

searchButton.addEventListener("click",()=>{
    let newApi1 = `https://newsapi.org/v2/everything?q=${searchBar.value}&from=2024-10-07&sortBy=publishedAt&apiKey=117a766a47584959a40ef3d8fb4766f0`;

let np = fetch(newApi1);
np.then((value)=>{
    return value.json();
}).then((value)=>{
    console.log(value);
    mainNewsHeading.innerHTML=value.articles[10].title;
    mainNewsimg.src=value.articles[10].urlToImage;
    mainNewsContent.innerHTML=value.articles[10].content;
    mainNewsupdateTime.innerHTML=value.articles[10].publishedAt;
})

    searchBar.value="";
})
searchBar.addEventListener("keydown",(event)=>{
     if(event.key === "Enter"){
        let newApi1 = `https://newsapi.org/v2/everything?q=${searchBar.value}&from=2024-10-07&sortBy=publishedAt&apiKey=117a766a47584959a40ef3d8fb4766f0`;

let np = fetch(newApi1);
np.then((value)=>{
    return value.json();
}).then((value)=>{
    console.log(value);
    mainNewsHeading.innerHTML=value.articles[10].title;
    mainNewsimg.src=value.articles[10].urlToImage;
    mainNewsContent.innerHTML=value.articles[10].content;
    mainNewsupdateTime.innerHTML=value.articles[10].publishedAt;
})
        searchBar.value=" ";
     }
})

