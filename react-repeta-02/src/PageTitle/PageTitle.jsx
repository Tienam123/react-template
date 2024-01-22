import css from './PageTitle.module.scss';

function PageTitle(props) {
  const { text } = props;
  return (
    <>
      <h1 className={css.title}>{text}</h1>
    </>
  );
}

export default PageTitle;
