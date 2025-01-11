import { StyleSheet, Text, View } from "react-native";
import Boilerplate from "../common/boilerplate";

const TransactionsScreen = (props) => {
	const {

	} = props;

	const screen = <View style={styles.container}>
		<Text>Transactions</Text>
	</View>

	return (
		<Boilerplate screen={screen} />
	);
};

const styles = StyleSheet.create({
	container: {

	}
});


export default TransactionsScreen;
