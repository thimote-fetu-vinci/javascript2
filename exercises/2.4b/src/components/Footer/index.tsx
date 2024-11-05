import "./Footer.css";

interface FooterProps {
    content: string;
}

const Footer = (props: FooterProps) => {
    return (
        <footer>
            <p>{props.content}</p>
        </footer>
    )
}

export default Footer;