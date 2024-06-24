import { fetchTypeMaison } from "@/app/lib/data";
import { toFormatMoney } from "@/app/lib/utils";
import { log } from "console";

interface TypeMaison{
    nom : string,
    description : string,
    prix : number
}


export function CardTypeMaison({nom, description, prix} : TypeMaison){
    return (
    <div className="col-4">

        <div className="card">
            <div className="card-body">
                <div className="mt-3 d-flex">
                    <h4 className="text-success fw-bolder">{nom}</h4>
                    <input type="radio" name="maison" value="1" width={20} required />
                </div>
            <p>{description}</p>
            <p className="fs-3" ></p>
            <ul className="list-group">
                <li className="list-group-item"><i className="bi bi-star me-1 text-success"></i> Prix de la maison : <span className="fs-3">{toFormatMoney(prix)}</span></li>
              </ul>
            </div>
        </div>
    </div>
    );
}

export default async function ListeTypeMaison(){
    const dataType= await fetchTypeMaison();
    return(
        <>
            {dataType.map((element, index)=>(
                <CardTypeMaison key={index} nom={element.nom} description={element.description} prix={element.prix} />
            ))}
        </>
    );
}