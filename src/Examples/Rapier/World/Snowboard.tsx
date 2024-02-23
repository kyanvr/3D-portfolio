import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { Euler, MathUtils} from "three";
import SnowboardModel from "./models/snowboard.glb";

export const Snowboard = (props: any) => {
    const { scene }:any = useGLTF(SnowboardModel, true);

    const rotation = new Euler(0, 0, MathUtils.degToRad(75));

    return (
		<RigidBody
			{...props}
			colliders={"hull"}
			type="fixed"
			rotation={rotation}
			position={[-6, 3.5, -2]}
			scale={0.04}
		>
			<primitive object={scene} />
		</RigidBody>
	);
}
