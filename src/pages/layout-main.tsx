import { Outlet } from "react-router";
import Header from "../core-components/header";
import Maincontent from "../core-components/main-content";
import Footer from "../core-components/footer";

export default function LayoutMain(){
    return <>

        <Header/>

        <Maincontent>
            <Outlet/>
        </Maincontent>

        <Footer/>
        
    </>
}