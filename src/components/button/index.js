import Button from "react-bootstrap/Button";

const ItemButton = ({ title, onClick }) => {
  return (
    <div>
      <Button onClick={onClick} variant="primary" type="submit">
        {title}
      </Button>
    </div>
  );
};

export default ItemButton;
