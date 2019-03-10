import Header from "./header"
import Footer from "./footer"

const layoutStyle = {
    color: "#0000ff"
}

const Layout = (props) => (
    <div style={layoutStyle}>
        <Header/>
        {props.children}
        <Footer/>
    </div>
)

export default Layout