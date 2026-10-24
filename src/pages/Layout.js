import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";
import Main from "./main/Main";
function Layout() {
    return (
        <>
            <Header />
            <Main />
            <main className="content">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
export default Layout;