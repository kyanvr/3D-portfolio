import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { Euler, MathUtils } from "three";
import BasketballModel from "./models/basketball.glb";

export const Basketball = (props: any) => {
	const { scene }: any = useGLTF(BasketballModel, true);

	const rotation = new Euler(
		MathUtils.degToRad(90),
		0,
		MathUtils.degToRad(180)
	);

	return (
		<RigidBody
			{...props}
			position={[-2, 2, 6]}
			scale={2}
			colliders="ball"
			rotation={rotation}
            name="basketball"
		>
			<primitive object={scene} />
		</RigidBody>
	);
};
