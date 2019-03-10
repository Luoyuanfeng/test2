import Item from "./item"
import Layout from "./layout"

const List = () => (
    <Layout>
        <p>This is list page</p>
        <ul>
            <Item id="1" name="1st"/>
            <Item id="2" name="2nd"/>
            <Item id="3" name="3rd"/>
            <Item id="4" name="4th"/>
            <Item id="5" name="5th"/>
        </ul>
    </Layout>
)

export default List