import { Foot, Head } from "@/app/lib/css";
import ListeTravaux from "@/app/ui/admin/travaux/liste";
import Header from "@/app/ui/header";
import NavBar from "@/app/ui/nav-bar";
import { ListeGénéralSkeleton } from "@/app/ui/skeleton";
import { Suspense } from "react";

export default function Travaux(){
    return (
        <Suspense fallback={<ListeGénéralSkeleton titre="Liste Travaux" />}>
            <ListeTravaux />
        </Suspense>
    );
}