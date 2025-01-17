import * as React from "react";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { initialRouteName, screensMapping } from "./app/screens"

const screens = Object.fromEntries(
	Object.keys(screensMapping)
		.map((name) => [name, screensMapping[name].screen])
);

const RootStack = createNativeStackNavigator({
	initialRouteName,
	screenOptions: {
		headerStyle: {
			backgroundColor: "tomato"
		}
	},
	screens,
});

const Navigation = createStaticNavigation(RootStack);

export default App = () => {
	return (
		<Navigation />
	);
};
