import Button from 'react-bootstrap/Button';

const ItemButton = ({tittle}) => {
  return (
    <div>
      <Button variant="outline-primary">{tittle}</Button>{' '}
    </div>
    
  );
};

export default ItemButton;