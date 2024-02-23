import { HashRouter as Router } from "react-router-dom";

import { UserInterfaceNavigation as Navigation } from "Components/UserInterface/Navigation";
import { Pages } from "Pages";

import "Styles/main.css";
import { Quests } from "Components/UserInterface/Quest";
import { Crosshair } from "Components/UserInterface/Crosshair";

/**
 * App.
 *
 * @returns {JSX.Element}
 */
const App = (): JSX.Element => {
  return (
    <Router>
      <Navigation />
      <Quests />
      <Crosshair />
      <Pages />
    </Router>
  );
};

export { App };
