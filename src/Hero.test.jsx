
import {render, screen} from "@testing-library/react";
import { describe, expect, test} from "vitest";
import Hero from "./landing_page/home/Hero";
import { MemoryRouter } from "react-router-dom";

describe("Hero Component", () => {
    test("renders hero images", () => {
        render(
            <MemoryRouter>
                <Hero/>
            </MemoryRouter>
        );
        const heroImage = screen.getByAltText("Hero Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src","/src/assets/homeHero.png");
    });
});
