/* eslint-disable no-undef */
import HomePage from "@/pages";
import { render } from "@testing-library/react";

// To check if Home Page has text length greater than 0
test("Home Page has text content", () => {
	const { container } = render(<HomePage />);
	expect(container.textContent).toBeTruthy();
});
