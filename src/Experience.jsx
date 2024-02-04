import { Center, Environment, Float, OrbitControls, useGLTF } from '@react-three/drei'

export default function Experience() {
    const macbook = useGLTF('./model.gltf')

    return <>

        <Environment preset='city' />
        <OrbitControls makeDefault />
        <color args={['#241a1a']} attach='background' />

        <Float rotationIntensity={0.4}>
            <primitive
                object={macbook.scene}
                position-y={-1.2}
            />
        </Float>
    </>
}