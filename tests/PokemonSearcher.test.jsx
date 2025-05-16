import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { PokemonSearcher } from "../src/component/PokemonSercher";
import userEvent from "@testing-library/user-event";
import { UserJwtContext } from "../src/context/UserJwtContext";



describe("PokemonSearcher component test", ()=> {
    test("PokemonSearcher renders", () => {
        const result = render(
            <UserJwtContext.Provider value={["example test jwt", ()=> {return"some jwt"}]}>
                <PokemonSearcher/>
            </UserJwtContext.Provider>
        
        )

        // const pokemonSearchNameInputElement = screen.getByText("Pokemon to seatch for");
        // const pokemonSearchNameInputElement = result.container.querySelector("#pokemonNameInput");
        const pokemonSearchNameInputElement = screen.getByTestId("pokemonNameInput");

        expect(pokemonSearchNameInputElement).toBeTruthy();
        expect(pokemonSearchNameInputElement).toBeInTheDocument();

    });

    test.skip("Pokemon Searcher makes a random number", () => {

    });

    test.skip("Can type in pokemon name and search for that provided name", async() => {

        const result = render(<PokemonSearcher/>);

        //Find the text input field for the pokemon name
        const pokemonSearchNameInputElement = screen.getByTestId("pokemonNameInput");
        expect(pokemonSearchNameInputElement).toBeInTheDocument();

        const user = userEvent.setup();

        // await user.click(pokemonSearchNameInputElement);
        // await user.keyboard("pikachu");
        await user.type(pokemonSearchNameInputElement, "pikachu");


        // expect(pokemonSearchNameInputElement.innerText).toBe("pikachu");
        await waitFor(()=>{
            expect(pokemonSearchNameInputElement.value).toBe("pikachu");

        })
        


        // Find the button to submit the pokemon name to the API
        const pokemonSpecificSearchButton = screen.getByTestId("pokemonSpecificSearchButton")
        expect (pokemonSpecificSearchButton).toBeInTheDocument();
        await user.click(pokemonSpecificSearchButton);


        // Find the content render to the page to reflect the API result
        waitFor(()=> {
            // find the img element
            const resultImgElement = screen.getByTestId("pokemonSprite");
    

            // check the img element src
            expect(resultImgElement).toBeInTheDocument();
            expect(resultImgElement).toHaveAttribute(
                "src",
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png"
            );


        });



    })

});