import { ContactShadows, OrbitControls } from "@react-three/drei";
import { Model as MyAvatar} from './MyAvatar'
import { Model as DerrickAvatar} from './DerrickAvatar'
import React, { useEffect, useRef } from 'react'
import { useAnimations, useFBX } from '@react-three/drei'
import { useFrame } from "@react-three/fiber"
import { useControls } from "leva"
import * as THREE from "three";

export const Experience = () => {
    const groupRef = useRef()
    const { animations: typingAnimations } = useFBX('animations/Typing.fbx')
    const { animations: sillyDanceAnimations } = useFBX('animations/Silly Dancing.fbx')
    const { animations: brooklynUprockAnimations } = useFBX('animations/Brooklyn Uprock.fbx')
    const { cursorFollow, actions: modelActions, hero } = useControls({
        cursorFollow: false,
        actions: { value: 'Typing', options: ['Typing', 'SillyDance', 'BrooklynUprock'] },
        hero: { value: 'VuiDoan', options: ['VuiDoan', 'Derrick']}
    })

    typingAnimations[0].name = 'Typing'
    sillyDanceAnimations[0].name = 'SillyDance'
    brooklynUprockAnimations[0].name = 'BrooklynUprock'
    const { actions } = useAnimations([
        typingAnimations[0],
        sillyDanceAnimations[0],
        brooklynUprockAnimations[0],
    ], groupRef)

    useEffect(() => {
        actions[modelActions || "Typing"].reset().fadeIn(0.5).play()
        return () => {
            actions[modelActions].reset().fadeOut(0.5)
        }
    }, [modelActions, hero])

    useFrame((state) => {
        if (cursorFollow) {
            const target = new THREE.Vector3(state.mouse.x, state.mouse.y, 1)
            groupRef.current.getObjectByName('Head').lookAt(target)
        }
    })

    return (
        <>
            <OrbitControls />
            <group ref={groupRef} key={hero}>
                {hero === 'VuiDoan' ? <MyAvatar /> : <DerrickAvatar />}
            </group>
            <ContactShadows />
        </>
    );
};
