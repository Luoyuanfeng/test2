import Link from "next/link"

const headerStyle = {
    marginRight: 20
}

const Header = () => (
    <div>
        <Link href="/active">
            <a style={headerStyle}>Active</a>
        </Link>
        <Link href="/list">
            <a>List</a>
        </Link>
    </div>
)

export default Header