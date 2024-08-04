
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/model.gltf')
  return (
    <group {...props} dispose={null} scale={4} position={[0,0,0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_house_type08.geometry}
        material={materials.border}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_house_type08_1.geometry}
        material={materials.window}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_house_type08_2.geometry}
        material={materials.main}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_house_type08_3.geometry}
        material={materials.roof}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_house_type08_4.geometry}
        material={materials.door}
      />
    </group>
  )
}

useGLTF.preload('/model.gltf')