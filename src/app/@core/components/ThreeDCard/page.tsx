'use client'

import React, {useRef, Suspense, useMemo } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame, useLoader, } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { Mesh } from "three";
import { RenderTexture, OrbitControls, PerspectiveCamera, Text, ContactShadows, Image, useTexture } from '@react-three/drei'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

function ThreeDCard() {
  return (
    <div id="canvas-container">
    {/* <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      <Cube />
      <ContactShadows frames={1} position={[0, -0.5, 0]} blur={1} opacity={0.75} />
      <ContactShadows frames={1} position={[0, -0.5, 0]} blur={3} color="orange" />
      <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2.1} />
    </Canvas> */}
      <Canvas>
      <ambientLight intensity={0.2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2.1} />
      <Suspense fallback={null}>
        <Rock />
      </Suspense>
    </Canvas>
  </div>
  )
}

const Rock = () => {
  const obj = useLoader(OBJLoader, "/textures/Card.obj");
  const texture = useTexture("/textures/outUV_card.png");
  
  const geometry = useMemo(() => {
    let g;
    obj.traverse((c) => {
      if (c.type === "Mesh") {
        const _c = c as Mesh;
        g = _c.geometry;
      }
    });
    return g;
  }, [obj]);

  const mesh = useRef()
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  })

  return (
    <mesh geometry={geometry} ref={mesh}>
      <meshPhysicalMaterial map={texture} />
    </mesh>
  );
};

function Scene() {
  const obj = useLoader(OBJLoader, '/textures/Card.obj');

  const geometry = useMemo(() => {
    let g;
    obj.traverse((c) => {
      if (c.type === "Mesh") {
        const _c = c as Mesh;
        g = _c.geometry;
      }
    });
    return g;
  }, [obj]);

  // const texture_1 = useLoader(TextureLoader, '/textures/SWSH12TG_EN_TG02.png')
  // const texture_2 = useLoader(TextureLoader, '/textures/SWSH2_EN_179.png')
  // const texture_3 = useLoader(TextureLoader, '/textures/SWSH12TG_EN_TG02.png')
  // const texture_4 = useLoader(TextureLoader, '/textures/SWSH2_EN_179.png')
  // const texture_5 = useLoader(TextureLoader, '/textures/SWSH12TG_EN_TG02.png')
  // const texture_6 = useLoader(TextureLoader, '/textures/SWSH2_EN_179.png')

  const texture_1 = useTexture('/textures/SWSH12TG_EN_TG02.png')
  const texture_2 = useTexture('/textures/SWSH2_EN_179.png')
  const texture_3 = useTexture('/textures/SWSH12TG_EN_TG02.png')
  const texture_4 = useTexture('/textures/SWSH2_EN_179.png')
  const texture_5 = useTexture('/textures/SWSH12TG_EN_TG02.png')
  const texture_6 = useTexture('/textures/SWSH2_EN_179.png')

  const texture = useTexture("/textures/SWSH2_EN_179.png");
  const texture2 = useTexture("/textures/outUV_card.png");

  return (
    <mesh>
      <primitive object={obj} />
      <meshBasicMaterial  map={texture} />
      {/* <meshPhysicalMaterial map={texture} normalMap={texture2} /> */}
    {/* <meshBasicMaterial  map={texture_1} attach="material-0" />
    <meshBasicMaterial  map={texture_2} attach="material-1" />
    <meshBasicMaterial  map={texture_3} attach="material-2" />
    <meshBasicMaterial  map={texture_4} attach="material-3" />
    <meshBasicMaterial  map={texture_5} attach="material-4" />
      <meshBasicMaterial map={texture_6} attach="material-5" /> */}
      </mesh>
  )
}

function Cube() {
  // const textRef = useRef()
  // const colorMap = useLoader(TextureLoader, 'textures/SWSH12TG_EN_TG02.png');
  // const texture = useLoader(TextureLoader, '/textures/SWSH12TG_EN_TG02.png');
  const map1 = useLoader(TextureLoader, "/textures/SWSH12TG_EN_TG02.png");
  const map2 = useLoader(TextureLoader, "/textures/SWSH2_EN_179.png");
  // const terrainTextures = useTexture({
  //   map: "/textures/SWSH12TG_EN_TG02.png",
  //   // displacementMap: "/textures/aerial_rocks_02_disp_4k_edited.jpg",
  //   // aoMap: "/textures/aerial_rocks_02_arm_4k_ao_edited.jpg",
  //   // roughnessMap: "/textures/aerial_rocks_02_arm_4k_roughness_edited.jpg",
  //   // metalnessMap: "/textures/aerial_rocks_02_arm_4k_metalness_edited.jpg",
  //   // normalMap: "/textures/aerial_rocks_02_nor_gl_4k_edited.jpg",
  //   // alphaMap: "/textures/alpha.png",
  // });
  // useFrame((state) => (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2))
  const texture_1 = useLoader(TextureLoader, '/textures/SWSH12TG_EN_TG02.png')
  const texture_2 = useLoader(TextureLoader, '/textures/SWSH2_EN_179.png')
  const texture_3 = useLoader(TextureLoader, '/textures/SWSH12TG_EN_TG02.png')
  const texture_4 = useLoader(TextureLoader, '/textures/SWSH2_EN_179.png')
  const texture_5 = useLoader(TextureLoader, '/textures/SWSH12TG_EN_TG02.png')
  const texture_6 = useLoader(TextureLoader, '/textures/SWSH2_EN_179.png')
  const mesh = useRef()
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  })
  return (
   
    <mesh ref={mesh}>
    <boxBufferGeometry attach="geometry" />
    <meshBasicMaterial  map={texture_1} attach="material-0" />
    <meshBasicMaterial  map={texture_2} attach="material-1" />
    <meshBasicMaterial  map={texture_3} attach="material-2" />
    <meshBasicMaterial  map={texture_4} attach="material-3" />
    <meshBasicMaterial  map={texture_5} attach="material-4" />
    <meshBasicMaterial  map={texture_6} attach="material-5" />
  </mesh>


  )
}

export default ThreeDCard
