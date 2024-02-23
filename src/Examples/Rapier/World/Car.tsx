import { useGLTF } from "@react-three/drei";
import { GroupProps, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import { AnimationMixer, Mesh } from "three";

import CarModel from "./models/car.glb";

const Car = (props: GroupProps) => {
	const { animations, scene }: any = useGLTF(CarModel, true);
	const animationRef = useRef<Mesh>(null!);
	const mixer = useMemo(
		() => new AnimationMixer(animations[0]),
		[animations]
	);

	useEffect(() => {
		mixer.clipAction(animations[0], animationRef.current).play();
	}, [animations, mixer]);

	useFrame((state, delta) => {
		mixer.update(delta);
	});

	return (
		<group name="Car" {...props} scale={0.5} position={[-4,0.2,0]}>
			<primitive object={scene} ref={animationRef} />;
		</group>
	);
};

export { Car };
