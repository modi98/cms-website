import Button from "react-bootstrap/Button";

const ItemButton = ({ title }) => {
  return (
    <div>
      <Button variant="primary" type="submit">
        {title}
      </Button>
    </div>
  );
};

export default ItemButton;
