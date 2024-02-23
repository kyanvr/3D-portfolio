import { QuestItem } from "Types/QuestItem";

export namespace QUESTS {
	export enum PATH {
		PHYSICS_RAPIER_WORLD = "rapier/world",
	}

	export const ITEMS: Array<QuestItem> = [
		{
			quest: "Put the chair back where it belongs",
            id: "1",
		},
		{
			quest: "Look at the posters on the wall",
            id: "2",
		},
		{
			quest: "Jump on the bed",
            id: "3",
		},
		{
			quest: "Kick the ball to the dumbbells in corner",
            id: "4",
		},
	];
}
