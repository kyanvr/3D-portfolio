import { useGLTF } from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { Euler, MathUtils } from "three";
import DumbbellsModel from "./models/dumbbells.glb";

export const Dumbbells = (props: any) => {
	const { scene }: any = useGLTF(DumbbellsModel, true);

	const rotation = new Euler(
		MathUtils.degToRad(90),
		0,
		MathUtils.degToRad(180)
	);

	return (
		<RigidBody
			{...props}
			position={[-4.5, 0.4, -6.5]}
			scale={2}
			colliders="cuboid"
			rotation={rotation}
			name="dumbbells"
            type="fixed"
		>
			<primitive object={scene} />
			<CuboidCollider
				args={[0.5, 0.1, 0.3]}
				position={[0.3, 0, 0]}
				sensor
				onIntersectionEnter={({ target, other }) => {
					if (other.rigidBodyObject?.name === "basketball") {
						document.getElementById("4")!.style.textDecoration =
							"line-through";
					}
				}}
			/>
		</RigidBody>
	);
};
