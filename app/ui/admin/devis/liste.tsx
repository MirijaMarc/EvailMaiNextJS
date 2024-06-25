import { fetchDevis, fetchFinition, fetchTravaux } from "@/app/lib/data";
import { toDateFrancais, toFormatMoney } from "@/app/lib/utils";
import Link from "next/link";

export default async function ListeDevis(){
    const data = await fetchDevis();
    console.log(data)
    return (
        <section className="section">
            <div className="row">
                <div className="col-lg-12">
        
                    <div id="elementPDF" className="card">
                        <div className="card-body">
                            <h5 className="card-title">Liste Devis</h5>
                            <div className="table-responsive">
                                <table className="table table-hover">
                                <thead>
                                    <tr>
                                    <th>id</th>
                                    <th>Reference</th>
                                    <th>Type Maison et Finition</th>
                                    <th>Client</th>
                                    <th>Montant Total</th>
                                    <th>Payement Effectué</th>
                                    <th>Pourcentage Payé</th>
                                    <th>Date Début Travaux</th>
                                    <th>Date Fin travaux</th>
                                    <th>Lieu</th>
                                    <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((element, index)=>(
                                    <tr key={index}>
                                        <td>{element.id}</td>
                                        <td>{element.reference}</td>
                                        <td>{element.nom_maison + ' avec finition ' + element.finition}</td>
                                        <td>{element.numero}</td>
                                        <td>{toFormatMoney(element.montant)}</td>
                                        <td>{toFormatMoney(element.payement_effectue)}</td>
                                        <td>{element.pourcentage_paye.toFixed(2)}%</td>
                                        <td>{toDateFrancais(element.debut)}</td>
                                        <td>{toDateFrancais(element.fin)}</td>
                                        <td>{element.lieu}</td>
                                        <td>
                                            <Link href="#" className="btn btn-info">Détails</Link>
                                        </td>
                                    </tr>
                                    ))}


                                </tbody>
                                </table>
                            </div>

            
                        </div>
                    </div>
        
                </div>
            </div>
        </section>
    );
}