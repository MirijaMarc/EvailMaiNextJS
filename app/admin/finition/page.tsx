
import ListeFiniton from "@/app/ui/admin/finition/liste";
import { ListeFinitionSkeleton, ListeGénéralSkeleton } from "@/app/ui/skeleton";
import { Suspense } from "react";

export default function Finition(){
    return (
        <Suspense fallback={<ListeFinitionSkeleton />}>
            <ListeFiniton />
        </Suspense>
    );
}