import PlanningScreen from "./components/planning";
import SettingsScreen from "./components/settings";
import TransactionsScreen from "./components/transactions";

const initialRouteName = "TransactionsScreen";
const screensMapping = {
	PlanningScreen: {
		screen: PlanningScreen
	},
	SettingsScreen: {
		screen: SettingsScreen
	},
	TransactionsScreen: {
		screen: TransactionsScreen
	}
};

module.exports = {
	initialRouteName,
	screensMapping
};