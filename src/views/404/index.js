import PokemonContext from "../../context/pokemons";
import {useContext} from "react";

export default function FourOFour(){
    const { pokemons } = useContext(PokemonContext);
    return (
        <div>
            <p>No se encontro nada</p>
        </div>
    );
}
