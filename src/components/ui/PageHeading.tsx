import "./styles.css";

interface Props {
  heading: string;
}

const PageHeading: React.FC<Props> = ({ heading }) => {
  return <h4 className="heading">{heading}</h4>;
};

export default PageHeading;
