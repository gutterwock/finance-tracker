import * as React from "react";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PlanningScreen from "./app/components/planning";
import SettingsScreen from "./app/components/settings";
import TransactionsScreen from "./app/components/transactions";

const RootStack = createNativeStackNavigator({
	initialRouteName: "TransactionsScreen",
	screenOptions: {
		headerStyle: {
			backgroundColor: "tomato"
		}
	},
	screens: {
		PlanningScreen,
		SettingsScreen,
		TransactionsScreen
	},
});

const Navigation = createStaticNavigation(RootStack);

export default App = () => {
	return (
		<Navigation />
	);
};
