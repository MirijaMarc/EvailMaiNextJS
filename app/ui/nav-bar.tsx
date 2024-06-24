import clsx from "clsx";
import Link from "next/link";
import { use } from "react";

export default function NavBar ({user} : {user: string}){
    return(
        <>
btn btn-light disabled
            <aside id="sidebar" className="sidebar">

                <ul className="sidebar-nav" id="sidebar-nav">
                    
                    <li className="nav-heading">Pages</li>
                    <li className="nav-heading"><a type="button" data-bs-toggle="modal" data-bs-target= "#import" className={clsx('btn btn-light', {'disabled': user != 'Btp'})}>Import CSV</a></li>
                    <li className="nav-heading"><a type="button" data-bs-toggle="modal" data-bs-target= "#clean" className="btn btn-light">Clean Database</a></li>

                    
                    {user != 'Btp' ? (
                        <li className="nav-item">
                            <a className="nav-link collapsed" data-bs-target="#classe-nav" data-bs-toggle="collapse" href="@{#}">
                                <i className="bi bi-menu-button-wide"></i><span>Utilitaires</span><i className="bi bi-chevron-down ms-auto"></i>
                            </a>
                            <ul id="classe-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                                <li>
                                <Link href="/client">
                                    <i className="bi bi-circle"></i><span>Devis</span>
                                </Link>
                                </li>
                                <li>
                                <Link href="/client/new-devis">
                                    <i className="bi bi-circle"></i><span>Nouveau Devis</span>
                                </Link>
                                </li>
                            </ul>
                        </li>
                    ): (
                        <li className="nav-item">           
                            <a className="nav-link collapsed" data-bs-target="#classe-nav2" data-bs-toggle="collapse" href="@{#}">
                                <i className="bi bi-menu-button-wide"></i><span>Importations</span><i className="bi bi-chevron-down ms-auto"></i>
                            </a>
                            <ul id="classe-nav2" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                                <li>
                                <Link href="/admin/import">
                                    <i className="bi bi-circle"></i><span>Import</span>
                                </Link>
                                </li>
                            </ul>

                            <a className="nav-link collapsed" data-bs-target="#classe-nav" data-bs-toggle="collapse" href="@{#}">
                                <i className="bi bi-menu-button-wide"></i><span>Utilitaires</span><i className="bi bi-chevron-down ms-auto"></i>
                            </a>
                            <ul id="classe-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                                <li>
                                <Link href="/admin">
                                    <i className="bi bi-circle"></i><span>Dashboard</span>
                                </Link>
                                </li>
                                <li>
                                <Link href="/admin/devis">
                                    <i className="bi bi-circle"></i><span>Liste Devis</span>
                                </Link>
                                </li>
                            </ul>

                            <a className="nav-link collapsed" data-bs-target="#classe-nav3" data-bs-toggle="collapse" href="@{#}">
                                <i className="bi bi-menu-button-wide"></i><span>CRUD</span><i className="bi bi-chevron-down ms-auto"></i>
                            </a>
                            <ul id="classe-nav3" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                                <li>
                                <Link href="/admin/travaux">
                                    <i className="bi bi-circle"></i><span>Type Travaux</span>
                                </Link>
                                </li>
                                <li>
                                <Link href="/admin/finition">
                                    <i className="bi bi-circle"></i><span>Type Finition</span>
                                </Link>
                                </li>
                            </ul>
                        </li>
                    )}




                </ul>

            </aside>
        </>
    );
}