let scene, camera, renderer, particles, boxSize;
let velocityArrows = [];
let reboundArrows = [];

const PARTICLE_COUNT = 50;
const BOX_SIZE = 10;
const PARTICLE_SPEED = 0.03;
const STEP_SIZE = 0.3;
const PAUSE_DURATION = 500; // milliseconds

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(500, 500);
    document.getElementById('boundary-simulation-container').appendChild(renderer.domElement);

    boxSize = BOX_SIZE;
    particles = [];
    createBox();
    createParticles();

    camera.position.z = 15;

    animate();
}

function createBox() {
    const geometry = new THREE.BoxGeometry(boxSize, boxSize, boxSize);
    const edges = new THREE.EdgesGeometry(geometry);
    const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0xffffff }));
    scene.add(line);
}

function createParticles() {
    for (let i = 0; i < PARTICLE_COUNT; i++) {
        const geometry = new THREE.SphereGeometry(0.05, 32, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const particle = new THREE.Mesh(geometry, material);

        particle.position.set(
            (Math.random() - 0.5) * boxSize,
            (Math.random() - 0.5) * boxSize,
            (Math.random() - 0.5) * boxSize
        );

        particle.velocity = new THREE.Vector3(
            Math.random() - 0.5,
            Math.random() - 0.5,
            Math.random() - 0.5
        ).normalize().multiplyScalar(PARTICLE_SPEED);

        particle.isPaused = false;

        scene.add(particle);
        particles.push(particle);

        const velocityArrow = new THREE.ArrowHelper(
            particle.velocity.clone().normalize(),
            particle.position,
            STEP_SIZE,
            0x00ff00
        );
        scene.add(velocityArrow);
        velocityArrows.push(velocityArrow);

        const reboundArrow = new THREE.ArrowHelper(
            new THREE.Vector3(),
            particle.position,
            STEP_SIZE,
            0xff0000
        );
        reboundArrow.visible = false;
        scene.add(reboundArrow);
        reboundArrows.push(reboundArrow);
    }
}

function updateParticles() {
    particles.forEach((particle, index) => {
        if (particle.isPaused) {
            if (Date.now() - particle.pauseStartTime > PAUSE_DURATION) {
                particle.isPaused = false;
                reboundArrows[index].visible = false;
            }
            return;
        }

        particle.position.add(particle.velocity);

        let reflected = false;
        if (Math.abs(particle.position.x) > boxSize / 2) {
            particle.velocity.x *= -1;
            particle.position.x = Math.sign(particle.position.x) * boxSize / 2;
            reflected = true;
        }
        if (Math.abs(particle.position.y) > boxSize / 2) {
            particle.velocity.y *= -1;
            particle.position.y = Math.sign(particle.position.y) * boxSize / 2;
            reflected = true;
        }
        if (Math.abs(particle.position.z) > boxSize / 2) {
            particle.velocity.z *= -1;
            particle.position.z = Math.sign(particle.position.z) * boxSize / 2;
            reflected = true;
        }

        if (reflected) {
            particle.isPaused = true;
            particle.pauseStartTime = Date.now();

            reboundArrows[index].position.copy(particle.position);
            reboundArrows[index].setDirection(particle.velocity.clone().normalize());
            reboundArrows[index].visible = true;
        }

        velocityArrows[index].position.copy(particle.position);
        velocityArrows[index].setDirection(particle.velocity.clone().normalize());
    });
}

function animate() {
    requestAnimationFrame(animate);
    updateParticles();
    renderer.render(scene, camera);
}

window.addEventListener('load', init);
