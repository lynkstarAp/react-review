import { Link } from "react-router-dom";

export default function PokemoListItem({ name, url }) {
    const getId = () => url.split("/")[6];

    return (
        <>
            <p>{name}</p>
            <button>
                <Link to={`pokemon/${getId()}`} > Ver detalle </Link> </button>
        </>
    );
}
