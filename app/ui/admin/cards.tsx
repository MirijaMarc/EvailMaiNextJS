import { montantTotalDevis, montantTotalEffectue } from "@/app/lib/data";
import { toFormatMoney } from "@/app/lib/utils";

interface CardProps{
    titre : string,
    montant : number
}


export default async function CardWrapper(){
    const total = await montantTotalDevis();
    const effectue = await montantTotalEffectue();
    return(
        <>
            <div className="col-4">
                <CardArgent titre="Montant total" montant={total} />
            </div>

            <div className="col-4">
                <CardArgent titre="Montant total Effectué" montant={effectue} />
            </div>
        </>
    );
}

export function CardArgent({titre, montant} : CardProps){
    return(
        <div className="card">
            <div className="card-body">
                <div className="mt-3 d-flex">
                    <h4 className="text-success fw-bolder">{titre}</h4>
                </div>
                <p className="fs-3">{toFormatMoney(montant)}</p>
            </div>
        </div>
    );
}