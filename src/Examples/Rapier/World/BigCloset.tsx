import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { Euler, MathUtils } from "three";
import BigClosetModel from "./models/big_closet.glb";

export const BigCloset = (props: any) => {
	const { scene }: any = useGLTF(BigClosetModel, true);

    const rotation = new Euler(0, MathUtils.degToRad(90), 0);

	return (
		<RigidBody
			{...props}
			position={[-2, 0, 7]}
			scale={6}
			colliders="hull"
			type={"fixed"}
			rotation={rotation}
		>
			<primitive object={scene} />
		</RigidBody>
	);
};
