import { fetchTravaux } from "@/app/lib/data";
import { toFormatMoney } from "@/app/lib/utils";

export default async function ListeTravaux(){
    const data = await fetchTravaux();
    console.log(data)
    return (
        <section className="section">
            <div className="row">
                <div className="col-lg-12">
        
                    <div id="elementPDF" className="card">
                        <div className="card-body">
                            <h5 className="card-title">Liste Travauxs</h5>
                            <div className="table-responsive">
                                <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>code</th>
                                        <th>nom</th>
                                        <th>unite</th>
                                        <th>prixUnitaire</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((element, index)=>(
                                    <tr key={index}>
                                        <td>{element.id_travaux}</td>
                                        <td>{element.code_travaux}</td>
                                        <td>{element.nom_travaux}</td>
                                        <td>{element.unites?.nom_unite}</td>
                                        <td>{toFormatMoney(element.prix_unitaire ?? 0)}</td>
                                        <td>
                                            <a data-bs-toggle="modal" data-bs-target= "modf" type="button" className="btn btn-outline-primary btn-sm">Modifier</a>
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