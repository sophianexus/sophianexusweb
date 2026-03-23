import * as THREE from 'three';
import { gsap } from 'gsap';

export const initForest = (container) => {
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x0d2015, 0.05);

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  const light = new THREE.DirectionalLight(0x1ed760, 1);
  light.position.set(0, 10, 10);
  scene.add(light);
  const treeGeometry = new THREE.ConeGeometry(0.5, 2, 8);
  const treeMaterial = new THREE.MeshStandardMaterial({ color: 0x051a0d });

  for (let i = 0; i < 200; i++) {
    const tree = new THREE.Mesh(treeGeometry, treeMaterial);
    tree.position.x = (Math.random() - 0.5) * 20;
    tree.position.z = -Math.random() * 100; 
    tree.position.y = 1;
    scene.add(tree);
  }

  camera.position.z = 5;
  camera.position.y = 1.5;

  const startAnimation = () => {
    gsap.to(camera.position, {
      z: -80,
      duration: 4,
      ease: "power2.inOut",
      onUpdate: () => {
        camera.position.y = 1.5 + Math.sin(camera.position.z * 0.5) * 0.1;
      },
      onComplete: () => {
        gsap.to(container, { opacity: 0, duration: 1, onComplete: () => {
          container.style.display = 'none';
        }});
      }
    });
  };

  const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  };

  animate();
  return { startAnimation };
};