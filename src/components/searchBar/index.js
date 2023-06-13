import { Form, FormControl, Button } from "react-bootstrap";

const searchBar = ({ searchInput, setSearchInput }) => {
  return (
    <Form inline>
      <FormControl
        type="text"
        placeholder="Buscar"
        className="mr-sm-2"
        value={searchInput}
        onChange={setSearchInput}
      />
    </Form>
  );
};

export default searchBar;
