
import ListeFiniton from "@/app/ui/admin/finition/liste";
import { ListeGénéralSkeleton } from "@/app/ui/skeleton";
import { Suspense } from "react";

export default function Finition(){
    return (
        <Suspense fallback={<ListeGénéralSkeleton titre="Liste Finitions" />}>
            <ListeFiniton />
        </Suspense>
    );
}