import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { PokemonSearcher } from "../src/component/PokemonSercher";



describe("PokemonSearcher component test", ()=> {
    test("PokemonSearcher renders", () => {
        const result = render(<PokemonSearcher />)
        // const pokemonSearchNameInputElement = screen.getByText("Pokemon to seatch for");
        // const pokemonSearchNameInputElement = result.container.querySelector("#pokemonNameInput");
        const pokemonSearchNameInputElement = screen.getByTestId("pokemonNameInput");

        expect(pokemonSearchNameInputElement).toBeTruthy();
        expect(pokemonSearchNameInputElement).toBeInTheDocument();

    });

    test.skip("Pokemon Searcher makes a random number", () => {

    });

});