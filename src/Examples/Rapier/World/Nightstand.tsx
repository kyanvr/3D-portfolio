import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { Euler, MathUtils } from "three";
import NightstandModel from "./models/nightstand.glb";

export const Nightstand = (props: any) => {
	const { scene }: any = useGLTF(NightstandModel, true);

    const rotation = new Euler(0, MathUtils.degToRad(-90), 0);

	return (
		<RigidBody
			{...props}
			position={[-2.4, 0.8, -6.5]}
			scale={0.3}
			type={"fixed"}
			rotation={rotation}
		>
			<primitive object={scene} />
		</RigidBody>
	);
};
