/**
 * This model is from https://www.blenderkit.com/asset-gallery-detail/eeb13223-8e2a-4556-9175-91b5347bc08b/
 */

import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { Euler, MathUtils } from "three";
import ChairModel from "./models/chair.glb";

export const Chair = (props: any) => {
	const { scene }: any = useGLTF(ChairModel, true);

    const rotation = new Euler(0, MathUtils.degToRad(180), 0);

	return (
		<RigidBody
			{...props}
			rotation={rotation}
			colliders="cuboid"
			name="chair"
			position={[5, 4, 0]}
			scale={2}
			ref={scene}
		>
			<primitive object={scene} />
		</RigidBody>
	);
};
