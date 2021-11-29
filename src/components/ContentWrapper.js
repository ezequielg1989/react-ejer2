import "../assets/css/app.css"
import TopBar from "./TopBar"
import ContentRowTop from "./ContentRowTop";
import Footer from "./Footer";


function ContentWrapper(){
    return(
        <div>
            <TopBar/>
            <ContentRowTop />
            <Footer/>
        </div>
    )
}

export default ContentWrapper;