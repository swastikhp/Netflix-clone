// Simple button action
document.querySelector('.watch-btn').addEventListener('click', () => {
  localStorage.setItem("lastMovie","Avatar");
  alert('Movie playback feature coming soon!');
});
const search = document.getElementById("search");

search.addEventListener("keyup", function () {
    const value = search.value.toLowerCase();

    const movies = document.querySelectorAll(".movie");

    movies.forEach(movie => {
        const title = movie.innerText.toLowerCase();

        if (title.includes(value)) {
            movie.style.display = "block";
        } else {
            movie.style.display = "none";
        }
    });
});
let favorites = [];

function addFavorite(movie) {
    favorites.push(movie);

    localStorage.setItem("favorites", JSON.stringify(favorites));

    alert(movie + " added to favorites!");
}
function darkMode() {
    document.body.classList.toggle("dark");
}
let movie = localStorage.getItem("lastMovie");
console.log(movie);
let images = [
"1.jpg",
"2.jpg",
"3.jpg"
];

let index=0;

setInterval(function(){

index++;

if(index >= images.length){
index=0;
}

document.getElementById("banner").src=images[index];

},3000);
function login(){

let email=document.getElementById("email").value;

let password=document.getElementById("password").value;

if(email=="admin@gmail.com" && password=="123456"){
alert("Login Successful");
}
else{
alert("Wrong Credentials");
}

}