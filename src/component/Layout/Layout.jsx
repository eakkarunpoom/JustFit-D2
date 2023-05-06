import Footer from "../Footer/Footer";
import NavbarHeader from "../Header/NavbarHeader";

const Layout = ({children}) => {
    return (
        <>
            <NavbarHeader />
            {children}
            <Footer />
        </>
    )
}

export default Layout;