import { ContactShadows, Environment, Float, Html, PresentationControls, Text, useGLTF } from '@react-three/drei'

export default function Experience() {
    const macbook = useGLTF('./model.gltf')

    return <>

        <Environment preset='city' />
        <color args={['#241a1a']} attach='background' />

        <PresentationControls
            global
            rotation={[0.13, 0.1, 0]}
            polar={[-0.4, 0.2]} // for vertical controls
            azimuth={[-1, 1]} // for horizontal controls
            config={{ mass: 2, tension: 400 }} // for release elasticity
            snap={{ mass: 4, tension: 400 }} // to came back to orignal position 
        >
            <Float rotationIntensity={0.4}>
                <rectAreaLight
                    width={2.5}
                    height={1.65}
                    intensity={65}
                    color={'#ff6900'}
                    rotation={[0.1, Math.PI, 0]}
                    position={[0, 0.55, -1.15]}
                />
                <primitive
                    object={macbook.scene}
                    position-y={-1.2}
                >
                    <Html
                        transform
                        wrapperClass='htmlScreen'
                        distanceFactor={1.17}
                        position={[0, 1.56, -1.4]}
                        rotation-x={-0.256}
                    >
                        <iframe src='https://bruno-simon.com/html/' />
                    </Html>
                </primitive>
                <Text
                    font='./bangers-v20-latin-regular.woff'
                    fontSize={1}
                    position={[2, 0.75, 0.75]}
                    rotation-y={-1.25}
                    maxWidth={2}
                    textAlign='center'
                >Mushab Faheem</Text>
            </Float>
        </PresentationControls>

        <ContactShadows
            position-y={-1.4}
            opacity={0.4}
            scale={5}
            blur={2.4}
        />
    </>
}