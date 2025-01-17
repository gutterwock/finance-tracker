import { createMockNav, fireEvent, render, screen } from "../../../testUtils";
import * as React from "react"
import { View } from "react-native";
import Navbar from "./navbar";

describe("Navbar", () => {
	const screens = {
		Base: () => <Navbar />,
		PlanningScreen: () => <View testID="navToPlanning">Planning</View>
	}
	const Navigation = createMockNav(screens);

	it("displays nav buttons", async () => {
		render(<Navigation />);

		await screen.findByTestId("navbar");
		await screen.findByTestId("Planning");
		await screen.findByTestId("Settings");
		await screen.findByTestId("Transactions");
	});

	it("navigates", async () => {
		render(<Navigation />);
		fireEvent(screen.getByTestId("Planning"), "press");

		await screen.findByTestId("navToPlanning");
	});
});
