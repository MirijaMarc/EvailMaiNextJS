import { fetchFinition, fetchTypeMaison } from "@/app/lib/data";

interface Finition{
    nom : string,
    marge: Number
}

export function CardFinition({nom, marge} : Finition){
    return (
        <div className="col-4">
            <div className="card">
                <div className="card-body">
                    <div className="mt-3 d-flex">
                        <h5 className="text-primary fw-bolder">{nom}</h5>
                        <input type="radio" name="finition" value="1" width={20} required />
                    </div>
                <p className="fs-1">{marge + '%'}</p>
                </div>
            </div>
        </div>
    );
}


export default async function ListeFinition(){
    const dataFinition = await fetchFinition();
    return (
        <>
            {dataFinition.map((element, index) =>(
                <CardFinition key={index} nom={element.nom_finition} marge={element.marge} />
            ))}
        </>
    )
}


