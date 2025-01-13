import { StyleSheet, View } from "react-native";
import Navbar from "./navbar";

const Boilerplate = (props) => {
	const { screen } = props;

	return (
		<View style={styles.container}>
			{screen}
			<Navbar />
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