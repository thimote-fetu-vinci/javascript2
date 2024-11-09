import Typography from "@mui/material/Typography";

interface PageTitleProps {
  title: string;
}

const PageTitle = (props: PageTitleProps) => {
  return <Typography variant="h1">{props.title}</Typography>;
};

export default PageTitle;
