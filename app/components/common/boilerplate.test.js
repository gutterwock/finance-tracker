import { createMockNav, render, screen } from "../../../testUtils";
import * as React from "react"
import { View } from "react-native";
import Boilerplate from "./boilerplate";

describe("Boilerplate", () => {
	const screens = {
		Boilerplate: () => <Boilerplate screen={<View testID="test">Test</View>} />
	};	
	const Navigation = createMockNav(screens);

	it("renders with children", async () => {
		render(<Navigation />);

		await screen.findByTestId("test");
		await screen.findByTestId("navbar");
	});
});
