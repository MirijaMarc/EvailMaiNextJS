import { Suspense, useEffect, useState } from "react";
import { Foot, Head } from "../lib/css";
import Header from "../ui/header";
import NavBar from "../ui/nav-bar";
import CardWrapper from "../ui/admin/cards";
import { CardSkeletonWrapper } from "../ui/skeleton";
import ChartDevis from "../ui/admin/graphique";

export default function Dashboard(){
    return(
        <>
        <div className="row">
            <Suspense fallback={<CardSkeletonWrapper />}>
                <CardWrapper />
            </Suspense>

        </div>
        <ChartDevis />
        </>
    );
}