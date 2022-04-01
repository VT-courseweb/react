import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import {BsSearch} from 'react-icons/bs';
import './Header.css'

function Header()  {
    return (
    <div>
      <div className="sidebar col-1">
      <Form className="d-flex">
        <FormControl type="search" placeholder="Search"  className="col-2" aria-label="Search" />
        <Button variant="primary" ><BsSearch/></Button>
      </Form>
      </div>
    </div>
    )
}
export default Header;