import { View } from "react-native";
import { Button } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";

const navMapping = {
	PlanningScreen: "Planning",
	SettingsScreen: "Settings",
	TransactionsScreen: "Transactions"
};

const Navbar = () => {
	const navigation = useNavigation();

	return (
		<View testID="navbar">
			{
				Object.keys(navMapping).map((screen, i) => {
					return (
						<Button key={i} onPress={() => navigation.navigate(screen)} testID={navMapping[screen]}>
							{navMapping[screen]}
						</Button>
					);
				})
			}
		</View>
	);
};

export default Navbar;
