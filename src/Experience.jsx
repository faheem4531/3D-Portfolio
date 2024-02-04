import { Environment, Float, PresentationControls, useGLTF } from '@react-three/drei'

export default function Experience() {
    const macbook = useGLTF('./model.gltf')

    return <>

        <Environment preset='city' />
        <color args={['#241a1a']} attach='background' />

        <PresentationControls
            global
            rotation={[0.13, 0.1, 0]}
            polar={[-0.4, 0.2]} // for vertical controls
            azimuth={[-1, 1]} // fro horizontal controls
        >
            <Float rotationIntensity={0.4}>
                <primitive
                    object={macbook.scene}
                    position-y={-1.2}
                />
            </Float>
        </PresentationControls>
    </>
}