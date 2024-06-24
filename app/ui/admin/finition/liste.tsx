import { fetchFinition, fetchTravaux } from "@/app/lib/data";
import { toFormatMoney } from "@/app/lib/utils";

export default async function ListeFiniton(){
    const data = await fetchFinition();
    console.log(data)
    return (
        <section className="section">
            <div className="row">
                <div className="col-lg-12">
        
                    <div id="elementPDF" className="card">
                        <div className="card-body">
                            <h5 className="card-title">Liste Finitions</h5>
                            <div className="table-responsive">
                                <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>nom</th>
                                        <th>marge</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((element, index)=>(
                                    <tr key={index}>
                                        <td>{element.id_finition}</td>
                                        <td>{element.nom_finition}</td>
                                        <td>{element.marge}%</td>
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