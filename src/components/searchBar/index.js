import { Form, FormControl, Button } from "react-bootstrap";

const searchBar = (props) => {
  return (
    <Form inline onSubmit={props.onSearch}>
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        value={props.query}
        onChange={props.onQueryChange}
      />
    </Form>
  );
};

export default searchBar;
