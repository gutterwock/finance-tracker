import { StyleSheet, Text, View } from "react-native";
import Boilerplate from "../common/boilerplate";

const PlanningScreen = (props) => {
	const {

	} = props;

	const screen = <View style={styles.container}>
		<Text>Planning</Text>
	</View>

	return (
		<Boilerplate screen={screen} />
	);
};

const styles = StyleSheet.create({
	container: {

	}
});

export default PlanningScreen;
