import { useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { Euler, MathUtils } from "three";
import PostersModel from "./models/posters.glb";

export const Posters = (props: any) => {
	const { scene }: any = useGLTF(PostersModel, true);

	const [hovered, setHovered] = useState(false);

	const rotation = new Euler(
		MathUtils.degToRad(180),
		MathUtils.degToRad(-90),
		MathUtils.degToRad(180)
	);

	useEffect(() => {
		// check if posters are hovered
		if (hovered) {
			// posters are hovered, quest completed
			document.getElementById("2")!.style.textDecoration = "line-through";
		}
	})

	return (
		<RigidBody
			{...props}
			colliders="hull"
			name="posters"
			rotation={rotation}
			type="fixed"
			position={[-3, 3.5, -7]}
			scale={0.5}
			onPointerOver={() => setHovered(true)}
			
		>
			<primitive  object={scene} />
		</RigidBody>
	);
};
