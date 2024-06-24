import { fetchDevisByUser } from "@/app/lib/data";
import { toDateFrancais, toFormatMoney } from "@/app/lib/utils";

export default async function ListeDevis(){
    
    const data = await fetchDevisByUser(1);

    return (
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
                            <th>Type Maison et Finition</th>
                            <th>Montant Total</th>
                            <th>Reste à payer</th>
                            <th>Date Début Travaux</th>
                            <th>Date Fin travaux</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((element, index) =>(
                            <tr key={index}>
                                <td>{element.id}</td>                   
                                <td>{element.nom_maison + ' avec finition ' + element.finition}</td>                   
                                <td>{toFormatMoney(element.montant)}</td>                   
                                <td>{toFormatMoney(element.reste)}</td>                   
                                <td>{toDateFrancais(element.debut)}</td>                   
                                <td>{toDateFrancais(element.fin)}</td>     
                                <td>
                                    <a data-bs-toggle="modal" data-bs-target= "" type="button" className="btn btn-outline-primary btn-sm">Payer</a>
                                    <a data-bs-toggle="modal" data-bs-target= "'" type="button" className="btn btn btn-outline-danger btn-sm">Exporter</a>                            
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
    );
}