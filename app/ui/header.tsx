'use client';


import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header({user} : { user : string}){
    const [role, setRole] = useState("Mirija");
    useEffect(()=>{
        setRole(user);
    }, [user])
    return (
        <>
            <header id="header" className="header fixed-top d-flex align-items-center">

                <div className="d-flex align-items-center justify-content-between">
                <a href="@{index.html}" className="logo d-flex align-items-center">
                    <Image src="/img/construction.svg" alt="logo" width={60} height={60} />
                    <span className="d-none d-lg-block">Construct IT</span>
                </a>
                <i className="bi bi-list toggle-sidebar-btn"></i>


                </div>

                
                <nav className="header-nav ms-auto">
                <ul className="d-flex align-items-center">

                    <li className="d-flex dropdown pe-3 align-items-center" style={{'gap': '25px'}}>

                    <span className="badge bg-success">{user}</span>
                    <a className="btn btn-outline-primary d-flex align-items-center" href="#">
                        Se connecter
                    </a>
                    </li>

                </ul>
                </nav>

            </header>
        </>
    )
}