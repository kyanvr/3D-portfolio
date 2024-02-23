import { useGLTF } from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import DeskModel from "./models/desk.glb";

export const Desk = (props: any) => {
	const { scene }: any = useGLTF(DeskModel, true);

	return (
		<RigidBody
			{...props}
			type={"fixed"}
			position={[4.5, 0.2, 7]}
			scale={0.23}
		>
			<primitive object={scene} />
			<CuboidCollider
				args={[3, 3, 3]}
				position={[0, 3, -7]}
				sensor
				onIntersectionEnter={({ target, other }) => {
					if (other.rigidBodyObject?.name === "chair") {
						document.getElementById("1")!.style.textDecoration =
							"line-through";
					}
				}}
			/>
		</RigidBody>
	);
};
