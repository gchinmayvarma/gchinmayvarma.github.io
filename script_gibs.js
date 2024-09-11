const gib_paths = ['123.gif', 'anime-anime-girl-dance.gif', 'anime-chika.gif', 'bongo-cat-transparent.gif', 'chika-dance.gif', 'chika-fujiwara-chika.gif', 'chika.gif', 'cvnka-vtuber.gif', 'elixir.gif', 'funky-cirno.gif', 'mai-sakurajima-mai.gif', 'sans-undertale.gif', 'touhou-hong-meiling.gif'];

let div_gibs = document.getElementById("gibs");
let gibs = document.getElementsByClassName("gib");
let gib_count = 0;

function gib_make(src) {
    gib_count++;
    let gib = document.createElement("img");
    gib.src = src;
    gib.className = "gib";
    gib.custom = {};
    gib.style.left = random(50, 100) + "%";
    gib.style.bottom = 0;
    gib.width = gib.width > 100 ? 100 * random(1, 2) : gib.width;
    div_gibs.appendChild(gib);

}

for (let i = 0; i < gib_paths.length; i++) {
    gib_make(`gibs/${gib_paths[i]}`);
}
