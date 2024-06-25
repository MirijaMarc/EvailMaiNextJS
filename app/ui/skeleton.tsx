import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export function ListeDevisSkeletonAdmin(){
    const lignes = [];
    for (let i = 0; i < 7; i++) {
        lignes.push(
            <tr>
                <td><Skeleton /></td>                   
                <td><Skeleton /></td>                   
                <td><Skeleton /></td>                   
                <td><Skeleton /></td>                   
                <td><Skeleton /></td>                   
                <td><Skeleton /></td>       
                <td><Skeleton /></td>                   
                <td><Skeleton /></td>                   
                <td><Skeleton /></td>                   
                <td><Skeleton /></td>                   
                <td><Skeleton /></td>                               
            </tr>
        )
        
    }
    return(
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
                                {lignes}


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

export function ListeFinitionSkeleton(){
    const lignes = [];
    for (let i = 0; i < 7; i++) {
        lignes.push(
            <tr>
                <td><Skeleton /></td>                   
                <td><Skeleton /></td>                   
                <td><Skeleton /></td>                   
                <td><Skeleton /></td>                                                   
            </tr>
        )
        
    }
    return(
    <section className="section">
        <div className="row">
            <div className="col-lg-12">
    
                <div id="elementPDF" className="card">
                    <div className="card-body">
                        <h5 className="card-title">Liste Finitions</h5>
                        <div className="table-responsive">
                            <table className="table">
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>nom</th>
                                    <th>marge</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {lignes}
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

export function ListeTravauxSkeleton(){
    const lignes = [];
    for (let i = 0; i < 7; i++) {
        lignes.push(
            <tr>
                <td><Skeleton /></td>                   
                <td><Skeleton /></td>                   
                <td><Skeleton /></td>                   
                <td><Skeleton /></td>                   
                <td><Skeleton /></td>                   
                <td><Skeleton /></td>                                    
            </tr>
        )
        
    }
    return(
    <section className="section">
        <div className="row">
            <div className="col-lg-12">
    
                <div id="elementPDF" className="card">
                    <div className="card-body">
                        <h5 className="card-title">Liste Travauxs</h5>
                        <div className="table-responsive">
                            <table className="table">
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
                                {lignes}

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

export function ListeDevisClientSkeleton(){
    const lignes = [];
    for (let i = 0; i < 7; i++) {
        lignes.push(
            <tr>
                <td><Skeleton /></td>                   
                <td><Skeleton /></td>                   
                <td><Skeleton /></td>                   
                <td><Skeleton /></td>                   
                <td><Skeleton /></td>                   
                <td><Skeleton /></td>                   
                <td>
                    <Skeleton />                         
                </td>                  
            </tr>
        )
        
    }
    return(
        <div className="row">
            <div className="col-lg-12">

            <div id="elementPDF" className="card">
                <div className="card-body">
                <h5 className="card-title">Liste Devis</h5>
                <div className="table-responsive">
                <table className="table">
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
                        {lignes}
                        

                    </tbody>
                </table>
                </div>


                </div>
            </div>

            </div>
        </div>
    );
}


export function WrapperFinitionSkeleton(){
    return(
        <>
            <FinitionSkeleton />
            <FinitionSkeleton />
            <FinitionSkeleton />
        </>
    )
}

export function FinitionSkeleton(){
    return(
        <div className="col-4">
            <div className="card">
                <div className="card-body">
                    <div className="mt-3">
                        <Skeleton width="30%"/>
                    </div>
                <p className="fs-1"><Skeleton /></p>
                </div>
            </div>
        </div>
    );
}

export function WrapperTypeMaisonSkeleton(){
    return(
        <>
            <TypeMaisonSkeleton />
            <TypeMaisonSkeleton />
            <TypeMaisonSkeleton />
        </>
    );
}

export function TypeMaisonSkeleton(){
    return(
        <div className="col-4">
            <div className="card">
                <div className="card-body">
                    <div className="mt-3">
                        <Skeleton width="30%"/>
                    </div>
                <p>
                    <Skeleton width="80%" />
                </p>
                <p className="fs-3" ></p>
                <ul className="list-group">
                    <li className="list-group-item"><i className="bi bi-star me-1 text-success"></i> Prix de la maison : <span className="fs-3"><Skeleton height={40} /></span></li>
                </ul>
                </div>
            </div>
        </div>
    );
}

export function GraphiqueSkeleton(){
    return(
        <>
            <Skeleton width="95%"/>
            <Skeleton width="80%" />
            <Skeleton width="75%" />
            <Skeleton width="87%" />
            <Skeleton />
            <Skeleton width="95%"/>
            <Skeleton width="80%" />
            <Skeleton width="75%" />
            <Skeleton width="87%" />
            <Skeleton />
            <Skeleton width="95%"/>
            <Skeleton width="80%" />
            <Skeleton width="75%" />
            <Skeleton width="87%" />
            <Skeleton />

        </>        
    );
}

export function CardSkeletonWrapper(){
    return(
        <>
            <CardSkeleton />
            <CardSkeleton />
        </>
    );
}

export function CardSkeleton(){
    return(
        <>
            <div className="col-4">
                <div className="card">
                    <div className="card-body">
                        <Skeleton className='mt-3' width="60%" height={20} />
                        <Skeleton className='mt-3' height={70} />
                    </div>
                </div>
            </div>
        </>
    );
}


export function ListeGénéralSkeleton({titre} : {titre :string}){
    return(
        <section className="section">
        <div className="row">
            <div className="col-lg-12">
    
                <div id="elementPDF" className="card">
                    <div className="card-body">
                        <h5 className="card-title">{titre}</h5>
                        <ListeSkeleton />

                    </div>
                </div>
    
            </div>
        </div>
    </section>
    );
}



export function ListeSkeleton(){
    return (
        <>
            <div className="d-flex justify-content-center gap-3 p-5">
                <div className="spinner-grow text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-danger" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            
        </>
    );
}


