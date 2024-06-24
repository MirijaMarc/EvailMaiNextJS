import { Foot, Head } from "@/app/lib/css";
import ListeDevis from "@/app/ui/admin/devis/liste";
import Header from "@/app/ui/header";
import NavBar from "@/app/ui/nav-bar";
import { ListeGénéralSkeleton } from "@/app/ui/skeleton";
import { Suspense } from "react";

export default function Devis(){
    return(
        <Suspense fallback={<ListeGénéralSkeleton titre="Liste Devis" />}>
            <ListeDevis />
        </Suspense>
    );
}