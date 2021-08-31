
let btn = document.querySelector('button');
btn.addEventListener('click', addNewWidget);

function addNewWidget() {
  // let widget = document.querySelector('.widget').innerHTML;
  let next = document.querySelector('.next');

  next.innerHTML += `<div class="today">
            <span class="today_text">21/09/2020</span>
          </div>
          <div class="city">
            <span class = 'city_text'>Москва</span>
          </div>
          <div class="temp">
            <span class="temp_text">20</span>
          </div>
          <div class="weather">Cloudy</div>

          <div class="wind">
            <div class="img">
              <img src="./icons/wind.png" alt="wind">
            </div>
            <div class="wind_text">Wind</div>
            <div class="speed">
              <span class="speed_text">10</span>
            </div>
            <div class="sign">km/h</div>
          </div>

          <div class="hum">
            <div class="img">
              <img src="./icons/Hum.png" alt="Hum">
            </div>
            <div class="hum_text">Hum</div>
            <div class="percent">
              <span class="percent_text">20</span>
            </div>`;
}

// class nextWidget {
//   constructor (today, city, temp,speed, hum, parentSelector) {
//     this.today = today;
//     this.city = city;
//     this.temp = temp;
//     this.speed = speed;
//     this.hum = hum;
//     this.parent = document.querySelector(parentSelector);
//
// }
//   render() {
//     const element = document.createElement('div');
//     if(this.classes.length === 0) {
//       this.element = "widget";
//       element.classList.add(this.element);
//     } else {
//       this.classes.forEach(className => element.classList.add(className));
//     }

//
//     element.innerHTML += `
//    <div class="today">
//             <span class="today_text">${this.today}</span>
//           </div>
//           <div class="city">
//             <span class = 'city_text'>${this.city}</span>
//           </div>
//           <div class="temp">
//             <span class="temp_text">${this.temp}</span>
//           </div>
//           <div class="weather">Cloudy</div>
//
//           <div class="wind">
//             <div class="img">
//               <img src="./icons/wind.png" alt="wind">
//             </div>
//             <div class="wind_text">Wind</div>
//             <div class="speed">
//               <span class="speed_text">${this.speed}</span>
//             </div>
//             <div class="sign">km/h</div>
//           </div>
//
//           <div class="hum">
//             <div class="img">
//               <img src="./icons/Hum.png" alt="Hum">
//             </div>
//             <div class="hum_text">Hum</div>
//             <div class="percent">
//               <span class="percent_text">${this.hum}</span>
//             </div>`;
//
//     this.parent.append(element);
// }}
// new nextWidget(
//   '2332323',
//   '23',
//   '12'
//
// );
