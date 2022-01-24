function changeName() {
    var ad=document.getElementById("fullname");
let fullname = ad.value.toUpperCase()

document.getElementById('p-fullname').innerHTML=fullname;
}
function changeAvatar(i) {
    var ad=document.getElementsByClassName("avatar-s")[i];

var image = document.getElementById('p-avatar');
image.src=ad.value;
}
function changeBirth() {
    var ad=document.getElementById("birth");
    const splitDate = ad.value.split("-");
    let yil = splitDate[0], ay=splitDate[1], gun=splitDate[2];
    let age = calculateAge(ay,gun,yil)
    document.getElementById('p-age').innerHTML="Yaş: "+age;
}
function changeInfo() {
    var ad=document.getElementById("info");

document.getElementById('p-info').innerHTML=ad.value;
}

function calculateAge(birthMonth, birthDay, birthYear)
{
  todayDate = new Date();
  todayYear = todayDate.getFullYear();
  todayMonth = todayDate.getMonth();
  todayDay = todayDate.getDate();
  age = todayYear - birthYear;
 
  if (todayMonth < birthMonth - 1)
  {
    age--;
  }
 
  if (birthMonth - 1 == todayMonth && todayDay < birthDay)
  {
    age--;
  }
  return age;
}

function click() {
    let cl = document.querySelector("#button")
    cl.style.cssText="position: relative; top:5px; left:5px; "
}