const countries = document.querySelector(".countires"),
body = document.querySelector("body"),
darkMode = document.querySelector(".mode1"),
lightMode = document.querySelector(".mode2")

// dark mode
darkMode.addEventListener('click', () => {
   body.classList.add("dark")
   darkMode.classList.add("hidden")
   lightMode.classList.remove("hidden")
})

lightMode.addEventListener('click', () => {
   body.classList.remove("dark")
   lightMode.classList.add("hidden")
   darkMode.classList.remove("hidden")
})



// api
const API = "https://restcountries.com/v3.1/all"

const getData = async (api) => {
   const req = await fetch(api)
   const data = await req.json()
   useData(data)
}

getData(API)

function useData(country) {
   country.forEach((item) => {
      countries.innerHTML += `<div class="country">
      <img src="${item.flags.png}" alt="flag" height="160px">
      <h3>${item.name.common}</h3>
      <p> <span> Population:&nbsp;&nbsp;</span>${item.population}</p>
      <p class="regions"> <span> Region: &nbsp; &nbsp; &nbsp; &nbsp; </span> ${item.region}</p>
      <p> <span> Capital: &nbsp; &nbsp; &nbsp; &nbsp; </span> ${item.capital}</p>
      </div>`
   });
}