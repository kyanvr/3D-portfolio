import { useGLTF } from "@react-three/drei";
import { RigidBody, CuboidCollider } from "@react-three/rapier";
import BedModel from "./models/bed.glb";

export const Bed = (props: any) => {
	const { scene }: any = useGLTF(BedModel, true);

	return (
		<RigidBody
			colliders={"hull"}
			position={[0, 1, -3.6]}
			scale={14}
			{...props}
			type={"fixed"}
		>
			<primitive object={scene} />
			<CuboidCollider
				args={[0.13, 0.1, 0.15]}
				position={[0.03, -0.03, 0]}
				sensor
				onIntersectionEnter={({ target, other }) => {
					if (other.rigidBodyObject?.name === "Player") {
						document.getElementById("3")!.style.textDecoration =
							"line-through";
					}
				}}
			/>
		</RigidBody>
	);
};
