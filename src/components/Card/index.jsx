// type props red black boder

function Card(props) {
  const { children, type } = props;
  return (
    <div>
      <h1>{children}</h1>
    </div>
  );
}

export default Card;
