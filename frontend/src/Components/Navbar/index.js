import { Nav, Link } from "./StyledComponents";

const LINKS = [
    {
        id: 1,
        title: "Add",
        href: "/",
    },
    {
        id: 2,
        title: "List All",
        href: "/listing",
    },
];

const Navbar = () => {
    return (
        <Nav>
            {LINKS.map(({ id, title, href }) => (
                <Link key={id} to={href}>
                    {title}
                </Link>
            ))}
        </Nav>
    );
};

export default Navbar;
