// import { useState, useRef, Suspense } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Points, PointMaterial, Preload } from "@react-three/drei";
// import * as random from "maath/random/dist/maath-random.esm";

// const Stars = (props) => {
//   const ref = useRef();
//   const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

//   useFrame((state, delta) => {
//     ref.current.rotation.x -= delta / 10;
//     ref.current.rotation.y -= delta / 15;
//   });

//   return (
//     <group rotation={[0, 0, Math.PI / 4]}>
//       <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
//         <PointMaterial
//           transparent
//           color='#f272c8'
//           size={0.002}
//           sizeAttenuation={true}
//           depthWrite={false}
//         />
//       </Points>
//     </group>
//   );
// };

// const StarsCanvas = () => {
//   return (
//     <div className='w-full h-auto absolute inset-0 z-[-1]'>
//       <Canvas
//         camera={{ position: [0, 0, 1] }}
//         style={{ zIndex: -1 }} // Explicitly set z-index on the canvas
//       >
//         <Suspense fallback={null}>
//           <Stars />
//         </Suspense>

//         <Preload all />
//       </Canvas>
//     </div>
//   );
// };

// export default StarsCanvas;

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function StarsCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Capture mountRef.current to avoid ESLint warning
    const mount = mountRef.current;

    // Set up scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio); // Improve sharpness

    // Set initial size based on mount container or viewport
    const updateRendererSize = () => {
      const width = mount.clientWidth || window.innerWidth;
      const height = mount.clientHeight || window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    updateRendererSize();
    mount.appendChild(renderer.domElement);

    // Create starfield with fewer stars
    const starCount = 2000; // 2,000 stars
    const positions = new Float32Array(starCount * 3);
    const radius = 1.2;

    // Generate random positions within a sphere
    for (let i = 0; i < starCount; i++) {
      const theta = Math.random() * 2 * Math.PI; // Azimuthal angle
      const phi = Math.acos(2 * Math.random() - 1); // Polar angle
      const r = radius * Math.cbrt(Math.random()); // Cube root for uniform distribution

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta); // x
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta); // y
      positions[i * 3 + 2] = r * Math.cos(phi); // z
    }

    // Create geometry and material for stars
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({
      color: 0xf3f4f6, // bg-gray-100
      size: 0.002,
      transparent: true,
      opacity: 0.9, // Slightly reduced opacity
      sizeAttenuation: true,
      depthWrite: false,
    });
    const starField = new THREE.Points(geometry, material);

    // Rotate the starfield to match the original orientation
    starField.rotation.set(0, 0, Math.PI / 4);
    scene.add(starField);

    // Position camera
    camera.position.set(0, 0, 1);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate starfield (slow rotation)
      starField.rotation.x -= 0.01 / 10;
      starField.rotation.y -= 0.01 / 15;

      renderer.render(scene, camera);
    };
    animate();

    // Handle window/container resize
    const handleResize = () => {
      updateRendererSize();
    };
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      mount.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    />
  );
}