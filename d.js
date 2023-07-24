// Set up the scene, camera, and renderer
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create the sun
var sunGeometry = new THREE.SphereGeometry(5, 32, 32);
var sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffd700 });
var sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);

// Create planets
var planetData = [
  { radius: 0.5, distance: 10, color: 0xaaaaaa }, // Mercury
  { radius: 1, distance: 15, color: 0xff0000 },   // Venus
  { radius: 1.5, distance: 20, color: 0x0000ff },  // Earth
  // Add more planets here...
];

var planets = [];
for (let i = 0; i < planetData.length; i++) {
  var planetGeometry = new THREE.SphereGeometry(planetData[i].radius, 32, 32);
  var planetMaterial = new THREE.MeshBasicMaterial({ color: planetData[i].color });
  var planet = new THREE.Mesh(planetGeometry, planetMaterial);
  planet.position.x = planetData[i].distance;
  scene.add(planet);
  planets.push(planet);
}

// Set camera position
camera.position.z = 30;

// Render the scene
function animate() {
  requestAnimationFrame(animate);

  // Rotate planets
  planets.forEach((planet, index) => {
    planet.rotation.y += 0.01 * (index + 1);
  });

  // Rotate the sun
  sun.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();
