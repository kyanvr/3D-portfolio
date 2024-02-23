import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import RoomModel from "./models/room.glb";

export const Room = (props: any) => {
	const { scene }: any = useGLTF(RoomModel, true);

	return (
		<RigidBody
			colliders={"trimesh"}
			position={[0, 0.01, 0]}
			type={"fixed"}
			{...props}
			scale={0.5}
		>
			<primitive object={scene} />
		</RigidBody>
	);
};
