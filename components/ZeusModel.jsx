"use client";

import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function ZeusModel({ position, scale, rotation, scrollYProgress }) {
  const axesHelper = new THREE.AxesHelper(50);
  const { scene } = useGLTF("./3dmodels/rebi_full_outfit.glb");
  useFrame((state, delta) => {
    //console.log(-2 * (scrollYProgress.current * 0.3));
    scene.add(axesHelper);
    // state.scene.rotation.set(0, Math.atan(scrollYProgress.current * Math.PI * 2) * 4, 0);

    // state.scene.rotation.set(_x, _Y, _z);
    // state.scene.position.set(_x, _Y, _z);
    // state.camera.position.set(_x, _y, _Z);
    // state.camera.lookAt(_x, _y, _z);

    // state.scene.position.set(0, -2 * (scrollYProgress.current * 0.3), 0);
    // state.camera.position.set(0, 0, 2 - scrollYProgress.current * 1);
    // state.camera.lookAt(0, 0, 0);
    state.scene.rotation.set(0, Math.atan(scrollYProgress.current * Math.PI * 2) * 4, 0);
    state.scene.position.set(0, -2 * (scrollYProgress.current * 0.3), 0);
    state.camera.position.set(0, 0, 2 - scrollYProgress.current * 1);
    // state.camera.position.set(0.5, 0, 1 + scrollYProgress.current * 1);
    state.camera.lookAt(0, 0, 0);
  });
  return (
    <>
      <primitive
        object={scene}
        scale={scale}
        position={position}
        rotation={rotation}
      />
    </>
  );
}

export default ZeusModel;
