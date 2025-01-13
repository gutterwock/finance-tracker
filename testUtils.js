import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {} from "@testing-library/react-native";

const createMockNav = (screens) => {
	const stack = createNativeStackNavigator({ screens });
	return createStaticNavigation(stack);
};

export * from "@testing-library/react-native"
export { createMockNav };