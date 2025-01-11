import { Text, View } from "react-native";
import { Button } from "@react-navigation/elements";
import { createStaticNavigation, useNavigation } from "@react-navigation/native";

const NavBar = () => {
	const navigation = useNavigation();

	return (
		<View>
			<Button onPress={() => navigation.navigate("TransactionsScreen")}>
				Transactions
			</Button>
			<Button onPress={() => navigation.navigate("PlanningScreen")}>
				Planning
			</Button>
			<Button onPress={() => navigation.navigate("SettingsScreen")}>
				Settings
			</Button>
		</View>
	);
};

export default NavBar;
