import * as THREE from './three.module.js';
import {OrbitControls} from './OrbitControls.js';

var camera, scene, renderer;
var controls;
var ambientLight, light;
var mer, venus, earth, mars, jupiter, saturn, plannet, ring, uran, neptun, pluto; 
var phi_e = -Math.PI / 2;
var phi_mer = -Math.PI / 2;
var phi_v = -Math.PI / 2;
var phi_mar = -Math.PI / 2;
var phi_j = -Math.PI / 2;
var phi_s = -Math.PI / 2;
var phi_u = -Math.PI / 2;
var phi_n = -Math.PI / 2;
var phi_p = -Math.PI / 2;
var radius_mer = 400;
var radius_v = 1000;
var radius_e = 1500;
var radius_mar = 2500;
var radius_j = 4000;
var radius_s = 6000;
var radius_u = 8500;
var radius_n = 11500;
var radius_p = 15000;

init();
animate();

function init() {
	var container = document.createElement('div');
	document.body.appendChild(container);

	camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 1, 100000);
	camera.position.set(0, 1500, 17000);

	ambientLight = new THREE.AmbientLight(0x333333);

	light = new THREE.PointLight(0xFFFFFF);
	light.intensity = 4;
	light.position.set(0, 0, 0);

	renderer = new THREE.WebGLRenderer({antialias: true});
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);
	container.appendChild(renderer.domElement);

	window.addEventListener('resize', onWindowResize, false);

	controls = new OrbitControls(camera, renderer.domElement);
	controls.addEventListener('change', render);
	//controls.rotateSpeed = 1; 
	controls.enableZoom = true;  
	controls.zoomSpeed = 0.5; 			
	controls.enableDamping = true;

	scene = new THREE.Scene();
	//scene.background = new THREE.Color(0x120A2A);

	scene.add(ambientLight);
	scene.add(light);

	// Mercury
	var textureLoader = new THREE.TextureLoader();
	var map = textureLoader.load('../textures/mercury.jpg');
	map.wrapS = map.wrapT = THREE.RepeatWrapping;
	map.anisotropy = 16;
	var material = new THREE.MeshPhongMaterial({map: map});
	material.shininess = 0;
	var geometry = new THREE.SphereGeometry(80, 48, 48);
	mer = new THREE.Mesh(geometry, material);
	scene.add(mer);

	// Venus
	var textureLoader = new THREE.TextureLoader();
	var map = textureLoader.load('../textures/venus.jpg');
	map.wrapS = map.wrapT = THREE.RepeatWrapping;
	map.anisotropy = 16;
	var material = new THREE.MeshPhongMaterial({map: map});
	material.shininess = 0;
	var geometry = new THREE.SphereGeometry(95, 48, 48);
	venus = new THREE.Mesh(geometry, material);
	scene.add(venus);

	// Earth
	var textureLoader = new THREE.TextureLoader();
	var map = textureLoader.load('../textures/earth.jpg');
	map.wrapS = map.wrapT = THREE.RepeatWrapping;
	map.anisotropy = 16;
	var material = new THREE.MeshPhongMaterial({map: map});
	material.shininess = 0;
	var geometry = new THREE.SphereGeometry(100, 48, 48);
	earth = new THREE.Mesh(geometry, material);
	scene.add(earth);
	
	// Mars
	var textureLoader = new THREE.TextureLoader();
	var map = textureLoader.load('../textures/mars.jpg');
	map.wrapS = map.wrapT = THREE.RepeatWrapping;
	map.anisotropy = 16;
	var material = new THREE.MeshPhongMaterial({map: map});
	material.shininess = 0;
	var geometry = new THREE.SphereGeometry(90, 48, 48);
	mars = new THREE.Mesh(geometry, material);
	scene.add(mars);

	// Jupiter
	var textureLoader = new THREE.TextureLoader();
	var map = textureLoader.load('../textures/jupiter.jpg');
	map.wrapS = map.wrapT = THREE.RepeatWrapping;
	map.anisotropy = 16;
	var material = new THREE.MeshPhongMaterial({map: map});
	material.shininess = 0;
	var geometry = new THREE.SphereGeometry(250, 64, 64);
	jupiter = new THREE.Mesh(geometry, material);
	scene.add(jupiter);

	//saturn
	saturn = new THREE.Object3D();

	var textureLoader = new THREE.TextureLoader();
	var map = textureLoader.load('../textures/plannet.jpg');
	map.wrapS = map.wrapT = THREE.RepeatWrapping;
	map.anisotropy = 16;
	var material = new THREE.MeshPhongMaterial({map: map});
	material.shininess = 0;
	var geometry = new THREE.SphereGeometry(230, 64, 64);
	plannet = new THREE.Mesh(geometry, material);
	saturn.add(plannet);

	var map = textureLoader.load('../textures/rings.png');
	map.wrapS = map.wrapT = THREE.RepeatWrapping;
	map.anisotropy = 16;
	var material = new THREE.MeshPhongMaterial({map: map});
	material.shininess = 0;
	var geometry = new THREE.RingGeometry(250, 700, 64);
	ring = new THREE.Mesh( geometry, material );
	ring.rotation.y = -Math.PI / 5;
	ring.rotation.x = -Math.PI / 2;
	ring.rotateZ = Math.PI / 2;
	saturn.add(ring);

	scene.add(saturn);

	// Uran
	var textureLoader = new THREE.TextureLoader();
	var map = textureLoader.load('../textures/uran.jpg');
	map.wrapS = map.wrapT = THREE.RepeatWrapping;
	map.anisotropy = 16;
	var material = new THREE.MeshPhongMaterial({map: map});
	material.shininess = 0;
	var geometry = new THREE.SphereGeometry(180, 64, 64);
	uran = new THREE.Mesh(geometry, material);
	scene.add(uran);

	// Neptun
	var textureLoader = new THREE.TextureLoader();
	var map = textureLoader.load('../textures/neptun.jpg');
	map.wrapS = map.wrapT = THREE.RepeatWrapping;
	map.anisotropy = 16;
	var material = new THREE.MeshPhongMaterial({map: map});
	material.shininess = 0;
	var geometry = new THREE.SphereGeometry(200, 64, 64);
	neptun = new THREE.Mesh(geometry, material);
	scene.add(neptun);

	// Pluto
	var textureLoader = new THREE.TextureLoader();
	var map = textureLoader.load('../textures/pluto.jpg');
	map.wrapS = map.wrapT = THREE.RepeatWrapping;
	map.anisotropy = 16;
	var material = new THREE.MeshPhongMaterial({map: map});
	material.shininess = 0;
	var geometry = new THREE.SphereGeometry(70, 48, 48);
	pluto = new THREE.Mesh(geometry, material);
	scene.add(pluto);
	// Sun
	// var textureLoader = new THREE.TextureLoader();
	// var map = textureLoader.load('../textures/sun.png');
	// map.wrapS = map.wrapT = THREE.RepeatWrapping;
	// map.anisotropy = 16;
	// var material = new THREE.MeshPhongMaterial({map: map});
	// material.shininess = 0;
	var geometry = new THREE.SphereGeometry(100, 48, 48);	
	var material = new THREE.MeshBasicMaterial({color: 0xffaa00});				
	var sun = new THREE.Mesh(geometry, material);
	sun.position.set(0, 0, 0);
	scene.add(sun);

	var mapC = textureLoader.load('../textures/glow.png');
	var sMaterial = new THREE.SpriteMaterial({map: mapC, color: 0xffaa00});
	sMaterial.blending = THREE.AdditiveBlending;	
	var sprite = new THREE.Sprite(sMaterial);
	sprite.scale.set(500, 500, 1.0);
	sun.add(sprite); 
				
	var geometry = new THREE.BoxGeometry (50000, 50000, 50000);
	var map = textureLoader.load('../textures/sky.jpg');
	map.wrapS = map.wrapT = THREE.RepeatWrapping;
	map.repeat.set(4, 4);
	map.anisotropy = 16;
	var material = new THREE.MeshBasicMaterial({map: map, side: THREE.BackSide});		
	var sky = new THREE.Mesh(geometry, material);
	scene.add(sky);

};

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize(window.innerWidth, window.innerHeight);
};

function animate() {
	requestAnimationFrame(animate);
	controls.update();
	render();
};

function render() {
	// Mercury
	mer.position.x = radius_mer * Math.cos(phi_mer);  
	mer.position.z = radius_mer * Math.sin(phi_mer);
	//earth.position.y = 20.6 * Math.sin(radius / earth.position.x);//Math.acos((Math.PI / 180 * 3.6) * (earth.position.x / earth.position.z));
	phi_mer = phi_mer + 0.06;
	// console.log(earth.position.y);
	mer.rotation.y = mer.rotation.y + 0.005;

	// Venus
	venus.position.x = radius_v * Math.cos(phi_v);  
	venus.position.z = radius_v * Math.sin(phi_v);
	//earth.position.y = 20.6 * Math.sin(radius / earth.position.x);//Math.acos((Math.PI / 180 * 3.6) * (earth.position.x / earth.position.z));
	phi_v = phi_v + 0.04;
	// console.log(earth.position.y);
	venus.rotation.y = venus.rotation.y + 0.003;

	// Earth
	earth.position.x = radius_e * Math.cos(phi_e);  
	earth.position.z = radius_e * Math.sin(phi_e);
	//earth.position.y = 20.6 * Math.sin(radius / earth.position.x);//Math.acos((Math.PI / 180 * 3.6) * (earth.position.x / earth.position.z));
	phi_e = phi_e + 0.02;
	// console.log(earth.position.y);
	earth.rotation.y = earth.rotation.y + 0.045;
	
	// Mars
	mars.position.x = radius_mar * Math.cos(phi_mar);  
	mars.position.z = radius_mar * Math.sin(phi_mar);
	//earth.position.y = 20.6 * Math.sin(radius / earth.position.x);//Math.acos((Math.PI / 180 * 3.6) * (earth.position.x / earth.position.z));
	phi_mar = phi_mar + 0.01;
	// console.log(earth.position.y);
	mars.rotation.y = mars.rotation.y + 0.065;

	// Jupiter
	jupiter.position.x = radius_j * Math.cos(phi_j);  
	jupiter.position.z = radius_j * Math.sin(phi_j);
	//earth.position.y = 20.6 * Math.sin(radius / earth.position.x);//Math.acos((Math.PI / 180 * 3.6) * (earth.position.x / earth.position.z));
	phi_j = phi_j + 0.009;
	// console.log(earth.position.y);
	jupiter.rotation.y = jupiter.rotation.y + 0.015;

	// Saturn
	saturn.position.x = radius_s * Math.cos(phi_s);  
	saturn.position.z = radius_s * Math.sin(phi_s);
	//earth.position.y = 20.6 * Math.sin(radius / earth.position.x);//Math.acos((Math.PI / 180 * 3.6) * (earth.position.x / earth.position.z));
	phi_s = phi_s + 0.007;
	// console.log(earth.position.y);
	plannet.rotation.y = plannet.rotation.y + 0.065;
	// ring.rotation.x += 0.0001;

	// Uran
	uran.position.x = radius_u * Math.cos(phi_u);  
	uran.position.z = radius_u * Math.sin(phi_u);
	//earth.position.y = 20.6 * Math.sin(radius / earth.position.x);//Math.acos((Math.PI / 180 * 3.6) * (earth.position.x / earth.position.z));
	phi_u = phi_u + 0.005;
	// console.log(earth.position.y);
	uran.rotation.y = uran.rotation.y + 0.095;
	
	// Neptun
	neptun.position.x = radius_n * Math.cos(phi_n);  
	neptun.position.z = radius_n * Math.sin(phi_n);
	//earth.position.y = 20.6 * Math.sin(radius / earth.position.x);//Math.acos((Math.PI / 180 * 3.6) * (earth.position.x / earth.position.z));
	phi_n = phi_n + 0.003;
	// console.log(earth.position.y);
	neptun.rotation.y = neptun.rotation.y + 0.09;

	// Pluto
	pluto.position.x = radius_p * Math.cos(phi_p);  
	pluto.position.z = radius_p * Math.sin(phi_p);
	//earth.position.y = 20.6 * Math.sin(radius / earth.position.x);//Math.acos((Math.PI / 180 * 3.6) * (earth.position.x / earth.position.z));
	phi_p = phi_p + 0.002;
	// console.log(earth.position.y);
	pluto.rotation.y = pluto.rotation.y + 0.03;

	renderer.render(scene, camera);
};
