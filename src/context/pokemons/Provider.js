import {useState} from "react";
import PokemonContext from "./index";
import apiCall from "../../api";

export default function PokemonProvider({children}) {
    const [pokemons, setPokemons] = useState([]);
    const [pokemonDetail, setPokemonDetail] = useState([]);
    /**
     * Vandera para que renderice la informaicon
     */
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);

    const getPokemons = async () => {
        try {
            setIsLoading(true);
            setErrorMessage("");
            setHasError(false);
            // throw new Error("Hey!");
            const pokemonsResult = await apiCall({url: "https://pokeapi.co/api/v2/pokemon?limit=100"});
            setPokemons(pokemonsResult.results);
        } catch (error) {
            setPokemonDetail([]);
            setErrorMessage("Algo ha pasado, verifica tu conexcion");
            setHasError(true);
        } finally {
            setIsLoading(false);
        }
    };

    const getPokemonDetail = async (id) => {
        if (!id) Promise.reject("id es requerido");
        setIsLoading(true);
        try {
            setIsLoading(true);
            setErrorMessage("");
            setHasError(false);
            // throw new Error("Hey!");
            const pokemonDetail = await apiCall({url: `https://pokeapi.co/api/v2/pokemon/${id}`});
            setPokemonDetail(pokemonDetail);
        } catch (error) {
            setPokemonDetail([]);
            setErrorMessage("Algo ha pasado, verifica tu conexcion");
            setHasError(true);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <PokemonContext.Provider value={{getPokemons, pokemons, getPokemonDetail, pokemonDetail, isLoading, hasError, errorMessage}}>
            {children}
        </PokemonContext.Provider>
    );
}
