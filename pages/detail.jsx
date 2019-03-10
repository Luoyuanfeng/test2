import { withRouter } from "next/router"

const Deatil = withRouter((props) => (
    <div>
        <p>{props.router.query.name} artical</p>
        <p>balabalabalabal...</p>
    </div>
))

export default Deatil