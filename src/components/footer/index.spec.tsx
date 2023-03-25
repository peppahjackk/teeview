import { render } from "@test";

import { Footer } from "./index";

describe("Footer component testing with testing-library", () => {
    it("renders without crashing", () => {
        const component = render(<Footer />);

        expect(component).toBeTruthy();
    });

    it("renders pankod logo and directed to the correct url", () => {
        const { getByText } = render(<Footer />);

        const theYear: string = JSON.stringify(new Date().getFullYear());

        const regex = new RegExp(theYear);

        expect(getByText(regex));
    });
});
