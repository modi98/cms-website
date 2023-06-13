import { Form, FormControl } from "react-bootstrap";

const searchBar = ({ handleSearch, setSearchInput }) => {
  return (
    <Form inline onSubmit={handleSearch}>
      <FormControl
        type="text"
        placeholder="Buscar"
        className="mr-sm-2"
        onChange={setSearchInput}
      />
    </Form>
  );
};

export default searchBar;
