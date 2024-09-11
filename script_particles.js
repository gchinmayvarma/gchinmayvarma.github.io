let div_particles = document.getElementById("particles");
let particles = document.getElementsByClassName("particle");
let particle_count = 0;

function particle_make(ay) {
    if (particle_count > 300) return;
    let particle = document.createElement("div");
    particle.className = "particle";
    particle.custom = {};
    particle.custom.life = 0;
    particle.custom.lifeout = random(200, 1000);
    particle.custom.x = Math.floor(Math.random() * 100);
    particle.custom.y = ay;
    particle.custom.dx = random(-2, 5) / 20;
    particle.custom.dy = random(-10, -5) / 8;
    particle.custom.theta = random(0, TWO_PI);
    particle.custom.dtheta = random(-1, 1) / 40;
    particle.custom.s = 0;
    particle.custom.ds = 0;
    particle.custom.dds = 0;
    particle.custom.ddds = random(0, 0.0000005);
    particle.custom.color_r = 255;
    particle.custom.color_g = 255;
    particle.custom.color_b = 255;
    particle.custom.color_a = random(0, 1);
    particle.custom.color_da = random(1, 5) / 100;
    if(random(0,1)<0.3) 
        particle.custom.radius = random(0,10);
    else particle.custom.radius = random(0,5);
    particle.style.width = particle.style.height = particle.custom.radius+"px";
    div_particles.appendChild(particle);
    particle_count++;
}

function particle_make_more() {
    setTimeout(particle_make_more, random(0, 500));
    let l = random(1,25);
    for (let i = 0; i < l; i++) {
        particle_make(random(101, 102));
    }
}

function particles_work() {
    for (let i = particle_count - 1; i >= 0; i--) {
        particles[i].custom.life++;
        if (particles[i].custom.life > 20000 || particles[i].custom.color_a < 0.01) {
            particle_count--;
            div_particles.removeChild(particles[i]);
            continue;
        }

        particles[i].custom.x += particles[i].custom.dx;
        particles[i].custom.y += particles[i].custom.dy;
        particles[i].custom.color_a -= particles[i].custom.color_da;

        particles[i].style.left = particles[i].custom.x + "%";
        particles[i].style.top = particles[i].custom.y + "%";
        particles[i].style.backgroundColor = "rgba(" + particles[i].custom.color_r + "," + particles[i].custom.color_g + "," + particles[i].custom.color_b + "," + particles[i].custom.color_a + ")";
        // particles[i].style.transform = `translate(-50%, -50%) rotate(${particles[i].custom.theta}rad) scale(${particles[i].custom.s})`;
    }
}

setInterval(particles_work, 1000 / 60);
// setInterval(particle_make_more, 10)
for (let i = 0; i < 100 * 2; i++) {
    for (let j = 0; j < 5; j++) {
        particle_make(random(0, 100));
        particle_make(random(0, 100));
        particle_make(random(0, 100));
        particle_make(random(40, 100));
        particle_make(random(80, 105));
        particle_make(random(80, 105));
        particle_make(random(80, 105));
    }

    
    setTimeout(particle_make_more, random(150, 10000))
}
