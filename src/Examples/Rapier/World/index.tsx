import { GroupProps } from "@react-three/fiber";

import { RapierWorldFloor as Floor } from "Examples/Rapier/World/Floor";
import { RapierWorldPlayer as Player } from "Examples/Rapier/World/Player";
import { Stars } from "@react-three/drei";
import {Snowboard} from "./Snowboard";
import { Room } from "./Room";
import { Chair } from "./Chair";
import { Nightstand } from "./Nightstand";
import { Desk } from "./Desk";
import { Bed } from "./Bed";
import { SmallCloset } from "./SmallCloset";
import { BigCloset } from "./BigCloset";
import { Posters } from "./Posters";
import { Car } from "./Car";
import { Dumbbells } from "./Dumbbells";
import { Basketball } from "./Basketball";

const RapierWorld = (props: GroupProps) => {
  return (
		<group name="World" {...props}>
			<Stars />
			<Floor />
			<Room />
			<Player />
			<Chair  />
			<Nightstand />
			<Desk />
			<Bed />
			<SmallCloset />
			<BigCloset />
			<Posters />
			<Snowboard />
			<Car />
			<Dumbbells />
			<Basketball />
		</group>
  );
};

export { RapierWorld };
