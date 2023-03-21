import Form from 'react-bootstrap/Form';
import ItemButton from "../../components/button";

const contactForm = () => {
  return (
    <div className='d-flex justify-content-evenly flex-wrap mx-4'>
      <div className='pe-1 m-2' style={{ width: "45%"}}>
        <h2>Contact us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non ipsum est. 
          Nulla ac massa a erat rutrum tincidunt. Nam ultrices eleifend suscipit. 
          Etiam consequat, dui eu bibendum hendrerit, mi purus lobortis diam, sit amet 
          congue arcu turpis ac ipsum. Suspendisse non commodo leo, vel congue turpis.</p>
      </div>
      <div className='mt-5 m-2' style={{ width: "45%"}}>
        <Form>
          <Form.Group className="mb-3" controlId="nameForm">
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="emailForm">
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="messageForm">
            <Form.Control as="textarea" placeholder="Message" rows={3} />
          </Form.Group>
          <ItemButton title={"Send"} />
        </Form>
      </div>
    </div>
  );
}

export default contactForm;