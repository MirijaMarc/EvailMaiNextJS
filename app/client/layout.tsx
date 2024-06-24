import { Foot, Head } from "../lib/css";
import Header from "../ui/header";
import NavBar from "../ui/nav-bar";

export default function Layout({children} : {children : React.ReactNode}){
    return (
        <>
            <Head />
                <Header user="Mirija"/>
                <NavBar user="Mirija" />
                <main id="main" className="main">
                    {children}
                </main>
            <Foot />
        </>
    )

}