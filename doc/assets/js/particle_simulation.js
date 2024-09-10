let scene, camera, renderer, particles, boxSize;
let velocityArrows = [];
let reflectionArrows = [];

const STEP_SIZE = 0.5;
const PARTICLE_COUNT = 100;
const ITERATIONS_PER_STEP = 100;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(500, 500);
    document.getElementById('simulation-container').appendChild(renderer.domElement);

    boxSize = 12;
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
        const x = (Math.random() - 0.5) * (boxSize - 0.2);
        const y = (Math.random() - 0.5) * (boxSize - 0.2);
        const z = (Math.random() - 0.5) * (boxSize - 0.2);

        const arrow = new THREE.ArrowHelper(
            new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize(),
            new THREE.Vector3(x, y, z),
            STEP_SIZE,
            0x00ff00
        );
        scene.add(arrow);
        velocityArrows.push(arrow);

        const reflectionArrow = new THREE.ArrowHelper(
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(x, y, z),
            STEP_SIZE,
            0xff0000
        );
        reflectionArrow.visible = false;
        scene.add(reflectionArrow);
        reflectionArrows.push(reflectionArrow);

        const sphereGeometry = new THREE.SphereGeometry(0.08, 8, 8);
        const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.set(x, y, z);
        scene.add(sphere);
        particles.push(sphere);
    }

    particles.forEach(particle => {
        particle.userData.direction = new THREE.Vector3();
        particle.userData.stepProgress = 0;
    });
}

function updateParticles() {
    for (let i = 0; i < PARTICLE_COUNT; i++) {
        const particle = particles[i];
        if (particle.userData.stepProgress === 0) {
            particle.userData.direction.set(
                Math.random() - 0.5,
                Math.random() - 0.5,
                Math.random() - 0.5
            ).normalize();
        }

        const direction = particle.userData.direction;
        const subStepSize = STEP_SIZE / ITERATIONS_PER_STEP;

        let newX = particle.position.x + direction.x * subStepSize;
        let newY = particle.position.y + direction.y * subStepSize;
        let newZ = particle.position.z + direction.z * subStepSize;

        let reflected = false;
        if (Math.abs(newX) > boxSize / 2) {
            direction.x = -direction.x;
            newX = Math.sign(newX) * boxSize / 2;
            reflected = true;
        }
        if (Math.abs(newY) > boxSize / 2) {
            direction.y = -direction.y;
            newY = Math.sign(newY) * boxSize / 2;
            reflected = true;
        }
        if (Math.abs(newZ) > boxSize / 2) {
            direction.z = -direction.z;
            newZ = Math.sign(newZ) * boxSize / 2;
            reflected = true;
        }

        if (reflected) {
            reflectionArrows[i].position.set(newX, newY, newZ);
            reflectionArrows[i].setDirection(direction);
            reflectionArrows[i].visible = true;
        }

        particle.position.set(newX, newY, newZ);

        velocityArrows[i].position.set(newX, newY, newZ);
        velocityArrows[i].setDirection(direction);

        particle.userData.stepProgress = (particle.userData.stepProgress + 1) % ITERATIONS_PER_STEP;

        if (particle.userData.stepProgress === 0) {
            reflectionArrows[i].visible = false;
        }
    }
}

function animate() {
    requestAnimationFrame(animate);
    updateParticles();
    renderer.render(scene, camera);
}

window.addEventListener('load', init);