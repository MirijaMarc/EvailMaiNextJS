import { Suspense } from "react";
import { Foot, Head } from "../lib/css";
import Header from "../ui/header";
import NavBar from "../ui/nav-bar";
import CardWrapper from "../ui/admin/cards";
import { ListeSkeleton } from "../ui/skeleton";

export default function Dashboard(){
    return(
        <>
        <div className="row">
            <Suspense fallback={<ListeSkeleton />}>
                <CardWrapper />
            </Suspense>

        </div>
        <div className="row">
            <div className="col-6">
                <form action="#">
                    <div className="row align-items-center">
                        <div className="col-4">
                            <select className="form-select" name="annee">
                                <option value={2024}>2024</option>
                                <option value={2023}>2023</option>
                            </select>
                        </div>
                    
                        <div className="col">
                            <button type="submit" className="btn btn-primary">Trier</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}