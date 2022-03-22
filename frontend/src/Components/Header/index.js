// Styled Components
import { Head, Brand } from "./StyledComponents";

import Navbar from "../Navbar";

const Header = () => {
    return (
        <Head>
            <Brand>Time Logger</Brand>
            <Navbar />
        </Head>
    );
};

export default Header;
