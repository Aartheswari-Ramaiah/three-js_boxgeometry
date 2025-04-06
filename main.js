import * as THREE from 'three';

// 1. Create the Scene
const scene = new THREE.Scene();
scene.background =  new THREE.Color('#000'); //background color of the scene

// 2. Add the Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); //props(field of views, aspect ratio, near plane, far plane)
camera.position.z = 5; //position of the camera

// 3. Create and Add a Cube Object
const geometry = new THREE.BoxGeometry(); //This is pre-defined geomentry
const material = new THREE.MeshLambertMaterial({ color: '#468585', emissive: "#468585" }); //for hexa value use 0x before that hexa value 
const cube = new THREE.Mesh(geometry, material); // create a cube using mesh, it containes two args geomentry and material
scene.add(cube); //add cube to the scene

// 4. Add Lighting
const light = new THREE.DirectionalLight("red", 100); //props(color, intensity) DirectionalLight - type of light
light.position.set(1,1, 1); //set position of the light (x, y, z) axis
scene.add(light); // add light to scene

// 5. Set up the Renderer
const renderer = new THREE.WebGLRenderer(); // renderer
renderer.setSize(window.innerWidth, window.innerHeight); //set size of the renderer
document.body.appendChild(renderer.domElement); // for dom tree

// 6. Animate the Scene
function animate() {
    requestAnimationFrame(animate); //request animation frame
    cube.rotation.x += 0.01; //rotate cube on x axis
    cube.rotation.y += 0.01; //rotate cube on y axis
    renderer.render(scene, camera); //render the scene
}
animate();