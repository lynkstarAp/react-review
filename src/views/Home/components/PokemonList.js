import PokemoListItem from "./PokemonListItem";

export default function PokemoList({pokemons}) {

    return (
        <>
            {pokemons?.map((pokemon, index) => <PokemoListItem key={index} {...pokemon} /> )}
        </>
    );
}
