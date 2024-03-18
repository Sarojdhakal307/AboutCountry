const searchInput = document.querySelector("#search");
const searchBtn = document.querySelector(".searchBtn");
const subContainer2 = document.querySelector("#information");
const flag = document.querySelector('#flag');
const countryName = document.querySelector("#countryname");
const language = document.querySelector("#language");
const capital = document.querySelector("#capital");
const area = document.querySelector("#area");
const population = document.querySelector("#population");



let countryname;
let Language;
let i;
const url = "https://restcountries.com/v3.1/name/";

searchBtn.addEventListener('click', (event)=>{
    event.preventDefault(); 
    countryname = searchInput.value;
    console.log(countryname);
    
    fetch(`${url}${countryname}`)
    .then(response=> response.json())
    .then((data) => {
        console.log(data);
        console.log(data.length);

        // if(data.status = 404){
        //     alert(`${countryname}    ${data.state}  ${data.message}`)
        // }
        // dataObject = data;
        let i = 0;
        // let pop =  data[0].fifa.toLowerCase();
        
        if(data.length >1){
            i=1;
        }
        Object.keys(data[i].languages).forEach(key => {
            console.log(`${key}: ${data[i].languages[key]}`);
            Language = data[i].languages[key];
        })

        flag.src =data[i].flags.svg;
        countryName.innerHTML =  `${ data[i].name.official}`;
        language.innerHTML =  `${Language}`;
        capital.innerHTML =  `${ data[i].capital[0]}`;
        area.innerHTML =  `${ data[i].area}`;
        population.innerHTML =  `${data[i].population }`;


    subContainer2.style.display = 'block';
})
.catch(error => {
    // alert(`${error}`);
    // subContainer2.style.margin = '10px';
    // subContainer2.style.fontSize = '100px';

    // subContainer2.innerHTML = `Error 404!!!`;
    alert(`${error}`);
    // console.error('There was a problem with the fetch operation:', error);
  });})