import React, { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";

function LogoThree() {
  useEffect(() => {
    const container = document.querySelector(".canvasContainer");
    container.innerHTML = "";

    const w = window.innerWidth;
    const h = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(w, h);
    renderer.shadowMap.enabled = true; // Enable shadows
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Better shadow quality
    container.appendChild(renderer.domElement);

    // const geometry = new THREE.BoxGeometry(1, 1, 1);
    // const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    // const cube = new THREE.Mesh(geometry, material);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Soft global lighting
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 10);
    directionalLight.position.set(5, 10, 7);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xffffff, 2);
    pointLight.position.set(2, 3, 4);
    scene.add(pointLight);

    const controls = new OrbitControls(camera, renderer.domElement);

    camera.position.z = 5;
    controls.update();

    const pmremGenerator = new THREE.PMREMGenerator(renderer);

    const hdriLoader = new RGBELoader();
    hdriLoader.load("/studio_small_08_4k.hdr", function (texture) {
      const envMap = pmremGenerator.fromEquirectangular(texture).texture;
      texture.dispose();
      scene.environment = envMap;
    });

    const loader = new GLTFLoader();
    let model;
    loader.load(
      "/BenGlass.glb",
      (gltf) => {
        let model = gltf.scene;
        model.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            child.material.roughness = 0.3;
            child.material.metalness = 0.1;
            child.material.opacity = 0.7;
          }
        });
        scene.add(model);
      },

      undefined,
      function (error) {
        console.log(error);
      }
    );

    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    animate();

    return () => {
      renderer.dispose();
    };
  }, []);

  return (
    <div className="Logo logoWrapper">
      <div className="canvasContainer"></div>
    </div>
  );
}

export default LogoThree;
