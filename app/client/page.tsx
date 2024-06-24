import Link from "next/link";
import { Foot, Head } from "../lib/css";
import ListeDevis from "../ui/client/liste-devis";
import Header from "../ui/header";
import NavBar from "../ui/nav-bar";
import { Suspense } from "react";
import { ListeGénéralSkeleton } from "../ui/skeleton";

export default function Client(){
    return (
        <>
            <div className="d-flex my-3">
                <Link href="/client/new-devis" type="button" className="btn btn-success" >Nouveau Devis</Link>
            </div>
            <Suspense fallback={<ListeGénéralSkeleton titre="Liste Devis" />}>
                <ListeDevis />
            </Suspense>
        </>
    )
}