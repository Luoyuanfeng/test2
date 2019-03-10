import Link from "next/link"

const Item = (props) => (
    <li>
        <Link as={`/detail/${props.id}`} href={`/detail?name=${props.name}`}>
            <a>{props.name}</a>
        </Link>
    </li>
)

export default Item