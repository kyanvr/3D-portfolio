import { QUESTS } from "Configs/quest";

import styles from "./Quests.module.css";

const Quests = (): JSX.Element => {
	return (
		<div className={styles["quests"]}>
			<ul>
				{QUESTS.ITEMS.map((QuestItem) => (
					<li
						className={styles["quest_item"]}
						key={QuestItem.quest}
                        id={QuestItem.id}
					>
						{QuestItem.quest}
					</li>
				))}
			</ul>
		</div>
	);
};

export { Quests };
