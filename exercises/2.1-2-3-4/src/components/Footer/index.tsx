import "./Footer.css";

interface FooterProps {
    content: React.ReactNode;
}

const Footer = (props: FooterProps) => {
    return (
        <footer>
            <p>{props.content}</p>
        </footer>
    );
};

export default Footer;