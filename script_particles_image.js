// const image_paths = ["aaa.gif", "aaaaaa.gif", "gifgif.gif", "alto.gif", "source.gif", "round.gif", "testaltenor.gif"];
const image_paths = ["Qu9f.gif", "aaaaaa.gif", "gifgif.gif", "alto.gif", "testaltenor.gif"];

let div_particles_image = document.getElementById("particles_image");
let particles_image = document.getElementsByClassName("particle_image");
let particle_count_image = 0;

function particle_image_make() {
    setTimeout(particle_image_make, random(2000, 10000));
    if (particle_count_image > 5) return;
    let particle = document.createElement("img");
    particle.className = "particle_image";
    particle.src = `stuff/${image_paths[Math.floor(random(0, image_paths.length))]}`;
    particle.custom = {};
    particle.custom.life = 0;
    particle.custom.lifeout = random(200, 1000);
    particle.custom.x = Math.floor(Math.random() * 100);
    particle.custom.y = Math.floor(Math.random() * 100);
    particle.custom.dx = Math.random() * 0.1 - 0.05;
    particle.custom.dy = Math.random() * 0.1;
    particle.custom.theta = random(0, TWO_PI);
    particle.custom.dtheta = random(-1, 1) / 40;
    particle.custom.s = 0;
    particle.custom.ds = 0;
    particle.custom.dds = 0;
    particle.custom.ddds = random(0, 0.0000005);
    particle.custom.maxs = random(1,10)/10;
    particle.style.transform = "scale(0)";
    div_particles_image.appendChild(particle);
    particle_count_image++;
}

function particles_image_work() {
    for (let i = 0; i < particle_count_image; i++) {
        // for (let i = particle_count - 1; i >= 0; i--) {
        particles_image[i].custom.life++;
        if (particles_image[i].custom.life > particles_image[i].custom.lifeout) {
            particles_image[i].custom.ddds = -random(0, 0.0000005);
            if (particles_image[i].custom.life > 2000 || particles_image[i].custom.s < 0.01) {
                particle_count_image--;
                div_particles_image.removeChild(particles_image[i]);
                continue;
            }
        }
        particles_image[i].custom.x += particles_image[i].custom.dx;
        particles_image[i].custom.y += particles_image[i].custom.dy;
        particles_image[i].custom.theta += particles_image[i].custom.dtheta;
        particles_image[i].custom.s += particles_image[i].custom.ds;
        particles_image[i].custom.ds += particles_image[i].custom.dds;
        particles_image[i].custom.dds += particles_image[i].custom.ddds;
        if (particles_image[i].custom.s > particles_image[i].custom.maxs) {
            particles_image[i].custom.ds = particles_image[i].custom.dds = 0;
            particles_image[i].custom.s = particles_image[i].custom.maxs;
        }
        particles_image[i].style.left = particles_image[i].custom.x + "%";
        particles_image[i].style.top = particles_image[i].custom.y + "%";
        particles_image[i].style.transform = `translate(-50%, -50%) rotate(${particles_image[i].custom.theta}rad) scale(${particles_image[i].custom.s})`;
    }
}
setTimeout(particle_image_make, random(10000));
setInterval(particles_image_work, 1000 / 60);