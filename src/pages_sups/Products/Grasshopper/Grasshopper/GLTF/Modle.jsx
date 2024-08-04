"use client"
import { Box, OrbitControls , useGLTF } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import React, { Suspense, useMemo } from 'react'
import { Model } from './House'


export default function Modle() {


  return (

        <Canvas>
            <ambientLight intensity={.5}  />
            <Suspense fallback={null}>
                <Model/>
                <OrbitControls />
            </Suspense>
        </Canvas>
  
  )
}

