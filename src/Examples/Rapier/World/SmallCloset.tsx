import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { Euler, MathUtils } from "three";
import SmallClosetModel from "./models/small_closet.glb";

export const SmallCloset = (props: any) => {
	const { scene }: any = useGLTF(SmallClosetModel, true);

	const rotation = new Euler(
		MathUtils.degToRad(180),
		0,
		MathUtils.degToRad(180)
	);

	return (
		<RigidBody {...props} position={[5.7, 1.2, -6]} scale={0.3} type="fixed" colliders="cuboid" rotation={rotation}>
			<primitive object={scene} />
		</RigidBody>
	);
};
