import "./index.css";

type TitleProps = {
  text: string
  title: string
}

export const Title = ({text, title}: TitleProps) => {
  return (
    <div className="title_text_wrapper">
      <span> {text}</span>
      <h1>{title}</h1>
    </div>
  );
};