/* eslint-disable no-undef */
import HomePage from "@/pages";
import { render } from "@testing-library/react";
import { useRouter } from "next/router";

// mock useRouter
jest.mock("next/router", () => ({
	useRouter: jest.fn(),
}));

// setup a new mocking function for push method
const pushMock = jest.fn();

// mock a return value on useRouter
(useRouter as any).mockReturnValue({
	query: {},
	// return mock for push method
	push: pushMock,
	// ... add the props or methods you need
});

// To check if Home Page has text length greater than 0
test("Home Page has text content", () => {
	const { container } = render(<HomePage />);
	expect(container.textContent).toBeTruthy();
});
