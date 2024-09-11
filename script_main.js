function random(min, max) {
  return Math.random() * (max - min) + min;
}
function randint(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const PI = Math.PI;
const TWO_PI = Math.PI * 2;

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/service-worker.js')
//     .then((registration) => {
//       console.log('Service Worker registered with scope:', registration.scope);
//     })
//     .catch((error) => {
//       console.error('Service Worker registration failed:', error);
//     });
// }

// function setFavicon() {
//   let favicon = document.getElementById('favicon');
//   if (navigator.onLine) {
//     favicon.href = '/stuff/online.png'; 
//   } else {
//     favicon.href = '/stuff/offline.png';
//   }
//   setTimeout(setFavicon,300)
// }

// setFavicon();

function showTime() {
  let time = new Date();
  let h = time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();
  am_pm = "AM";
  if (h > 12) {
    h -= 12;
    am_pm = "PM";
  }
  if (h == 0) {
    h = 12;
    am_pm = "AM";
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  document.getElementById("time_h").innerHTML = h;
  document.getElementById("time_m").innerHTML = m;
  document.getElementById("time_s").innerHTML = s;
  document.getElementById("am_pm").innerHTML = am_pm;
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  document.getElementById("date").innerHTML = weekday[time.getDay()] + ', ' + month[time.getMonth()] + ' ' + time.getDate();
}
showTime(); setInterval(showTime, 1000);

