var city = document.querySelector("#city")
var find = document.querySelector("#button-addon2")
var place1 = document.querySelector("#place1")
var place2 = document.querySelector("#place2")
var place3 = document.querySelector("#place3")
var temp1 = document.querySelector("#temp1")
var temp2 = document.querySelector("#temp2")
var temp3 = document.querySelector("#temp3")
var state1 = document.querySelector("#state1")
var state2 = document.querySelector("#state2")
var state3 = document.querySelector("#state3")
var hum1 = document.querySelector("#hum1")
var hum2 = document.querySelector("#hum2")
var hum3 = document.querySelector("#hum3")
var speed1 = document.querySelector("#speed1")
var speed2 = document.querySelector("#speed2")
var speed3 = document.querySelector("#speed3")
var dir1 = document.querySelector("#dir1")
var dir2 = document.querySelector("#dir2")
var dir3 = document.querySelector("#dir3")

// async function data (){
//     var x = await fetch(`https://api.weatherapi.com/v1/current.json?key=0c0cb3f87ae14e1a87d94757230408&q=${city.value}`)
//     var y = await x.json()
//     console.log(y.current.temp_c)
//     console.log(y.location.name)
// }
var b
async function data2 (){
    var a = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=0c0cb3f87ae14e1a87d94757230408&q=${city.value}&days=3`)
    b = await a.json()
    console.log(b)
    
    
temp1.innerHTML=b.forecast.forecastday[0].day.maxtemp_c
temp2.innerHTML=b.forecast.forecastday[1].day.maxtemp_c
temp3.innerHTML=b.forecast.forecastday[2].day.maxtemp_c

place1.innerHTML=b.location.name
place2.innerHTML=b.location.name
place3.innerHTML=b.location.name

state1.innerHTML=b.forecast.forecastday[0].day.condition.text
state2.innerHTML=b.forecast.forecastday[1].day.condition.text
state3.innerHTML=b.forecast.forecastday[2].day.condition.text

hum1.innerHTML=b.forecast.forecastday[0].day.avghumidity + " %"
hum2.innerHTML=b.forecast.forecastday[1].day.avghumidity + " %"
hum3.innerHTML=b.forecast.forecastday[2].day.avghumidity + " %"

speed1.innerHTML=b.forecast.forecastday[0].day.maxwind_kph + " kph"
speed2.innerHTML=b.forecast.forecastday[1].day.maxwind_kph + " kph"
speed3.innerHTML=b.forecast.forecastday[2].day.maxwind_kph + " kph"

dir1.innerHTML=b.current.wind_dir
dir2.innerHTML=b.current.wind_dir
dir3.innerHTML=b.current.wind_dir


}
find.addEventListener("click",data2)








var today = document.querySelector("#today")
var nextDay = document.querySelector("#nextday")
var nextNextDay=document.querySelector("#nextnextday")
var dayMonth=document.querySelector("#daymonth")


var d = new Date();
var D=d.getDay()
var cartona=[]

for( var i = 0 ;i<=2;i++){
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var dayName = days[D];

D++
if(D==7){
    D=0
}
cartona.push(dayName)
}

today.innerHTML=cartona[0]
nextDay.innerHTML=cartona[1]
nextNextDay.innerHTML=cartona[2]

var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

dayMonth.innerHTML=d.getDate() + " " + monthNames[d.getMonth()];





