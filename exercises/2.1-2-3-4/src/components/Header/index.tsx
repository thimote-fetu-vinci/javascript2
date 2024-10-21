import "./Header.css";

interface HeaderProps {
    title: React.ReactNode;
    img: string;
}

const Header = (props: HeaderProps) => {
    return (
        <header>
            <img src={props.img} alt="Logo" />
            <h1>{props.title}</h1>
        </header>
    );
};

export default Header;