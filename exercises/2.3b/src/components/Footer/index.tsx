interface FooterProps {
    content: string;
}

const Footer = (props: FooterProps) => {
    return (
        <footer>{props.content}</footer>
    );
}

export default Footer;