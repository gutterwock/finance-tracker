import { StyleSheet, View } from "react-native";
import NavBar from "./navBar";

const Boilerplate = (props) => {
	const { screen } = props;

	return (
		<View style={styles.container}>
			{screen}
			<NavBar />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	}
});

export default Boilerplate;