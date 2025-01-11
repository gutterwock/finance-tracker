import { StyleSheet, Text, View } from "react-native";
import Boilerplate from "../common/boilerplate";

const SettingsScreen = (props) => {
	const {

	} = props;

	const screen = <View style={styles.container}>
		<Text>Settings</Text>
	</View>

	return (
		<Boilerplate screen={screen} />
	);
};

const styles = StyleSheet.create({
	container: {

	}
});

export default SettingsScreen;
