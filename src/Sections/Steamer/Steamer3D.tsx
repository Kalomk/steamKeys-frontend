import React, { useEffect, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Object3D } from 'three/src/core/Object3D'; //Object3D types
import { Canvas, useFrame } from '@react-three/fiber';
import { Box } from '@chakra-ui/react';

const Model = () => {
  /* State */
  const [model, setModel] = useState<Object3D | null>(null);

  /* Load model */
  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load('3D/steam/stemalogo3d.gltf', async (gltf) => {
      gltf.scene.rotation.y = Math.PI / 8;
      gltf.scene.position.y = 3;
      const nodes = await gltf.parser.getDependencies('node');
      setModel(nodes[0]);
    });
  }, []);

  /* Animation */
  useFrame(({ clock }) => {
    if (model) {
      model.rotation.z = clock.getElapsedTime(); // Rotate the model around the Y-axis based on elapsed time
    }
  });

  return (
    <>
      {model ? (
        <mesh>
          <primitive object={model} scale={[0.09, 0.08, 0.07, 0.07, 0.06]} />
        </mesh>
      ) : null}
    </>
  );
};

const Steamer3D = () => {
  return (
    <Box width={['80vw', '90vw', '90vw', 350, 470]} height={['350px', '350px', 550, 320, 500]}>
      <Canvas
        camera={{
          position: [20, 3, 5],
          fov: 25,
        }}
      >
        <Model />
        <>
          <ambientLight intensity={0.9} />
          <directionalLight position={[40, 10, 5]} intensity={0.2} />
          <directionalLight
            castShadow
            position={[10, 420, 100]}
            intensity={1.3}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={10}
            shadow-camera-left={-30}
            shadow-camera-right={10}
            shadow-camera-top={40}
            shadow-camera-bottom={-10}
          />
          <spotLight intensity={0.5} position={[90, 100, 50]} castShadow />
        </>
      </Canvas>
    </Box>
  );
};

export default Steamer3D;
