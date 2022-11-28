import Header from "../header/Header";
import Footer from "../footer/Footer";

function Layout({children}) {
    return (
        <>
            <Header />
            <div className="page-body">
                {children}
            </div>
            <Footer />
        </>
    );
}

export default Layout;