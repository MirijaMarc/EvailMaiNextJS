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


