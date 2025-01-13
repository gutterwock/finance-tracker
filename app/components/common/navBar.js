import { View } from "react-native";
import { Button } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";

const Navbar = () => {
	const navigation = useNavigation();

	return (
		<View testID="navbar">
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

export default Navbar;
