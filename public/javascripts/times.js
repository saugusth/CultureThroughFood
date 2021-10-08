document.getElementById('text1').value = "5:30 pm";
document.getElementById('text2').value = "5:40 pm";
document.getElementById('text3').value = "6:00 pm";
document.getElementById('text4').value = "6:20 pm";

var submit = document.getElementById('submit');
submit.addEventListener('click', ()=>{
    location.href = "https://localhost:3000/meeting.html";
})