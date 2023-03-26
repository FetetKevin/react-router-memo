import { useParams } from "react-router-dom";

export default function Profil() {
    const params = useParams();

    return (
        <div>
            <h2>Votre profil {params.id}</h2>
        </div>
    );
}
