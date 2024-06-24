import { Foot, Head } from "@/app/lib/css";
import { fetchTypeMaison } from "@/app/lib/data";
import ListeFinition from "@/app/ui/client/devis/card-finition";
import CardFinition from "@/app/ui/client/devis/card-finition";
import ListeTypeMaison from "@/app/ui/client/devis/card-type-maison";
import CardTypeMaison from "@/app/ui/client/devis/card-type-maison";
import Header from "@/app/ui/header";
import NavBar from "@/app/ui/nav-bar";
import { ListeSkeleton } from "@/app/ui/skeleton";
import { Suspense } from "react";




export default async function NewDevis(){




    
    return (
        <form action="#" className="row g-3">
        <input type="hidden" value="1" name="utilisateur" />
            <div className="row mt-5">
                <h2 className="mb-3">Choisir un type de Maison</h2>
                <Suspense fallback={<ListeSkeleton />}>
                    <ListeTypeMaison />
                </Suspense>
            </div>

            <hr />

            <div className="row mt-5">
                <h2 className="mb-3">Choisir une Finition</h2>
                <Suspense fallback={<ListeSkeleton />}>
                    <ListeFinition />
                </Suspense>
            </div>


            <hr />

            <div className="row">
                <h3>Date Debut du travail</h3>
                <div className="col-2">
                    <label className="form-label"></label>
                    <input type="date" className="form-control" name="dateDebutTravaux" />
                </div>
            </div>
            <hr />
            <div className="row">
                <h3>Date création de la devis</h3>
                <div className="col-2">
                    <label className="form-label"></label>
                    <input type="datetime-local" className="form-control" name="date" />
                </div>
            </div>
            <hr />
            <div className="row">
                <h3>Lieu</h3>
                <div className="col-2">
                    <label className="form-label"></label>
                    <input type="text" className="form-control" name="lieu" />
                </div>
            </div>

            <div className="row">
                <div className="col mt-3">
                    <button type="submit" className="btn btn-primary">Insérer</button>
                    <a href="/client" type="button" className="btn btn-danger">Annuler</a>
                </div>
            </div>
        </form>
    );
}