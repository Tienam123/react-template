import {Title} from './PageTitle.styled.jsx';

function PageTitle(props) {
  const {text} = props;
  return (
      <>
        <Title>{text}</Title>
      </>
  );
}

export default PageTitle;
