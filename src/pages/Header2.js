//리액트 메뉴바만들어본곳 
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {FaReact} from 'react-icons/fa';

function Header2(){
    return(
        <div>
            <Navbar bg="dark" variant="dark" expand="lg"> {/*fixed="top"*/}
                <Container fluid>              
                    <Navbar.Brand href="/"><FaReact/> Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0"  
                    navbarScroll>
                        <Nav.Link href="/Datasets">Datasets</Nav.Link>
                        <Nav.Link href="/Dos">Dos</Nav.Link>
                        <Nav.Link href="/Uplod">Uplod</Nav.Link>
                        <Nav.Link href="/Mypage">Mypage</Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action2">Another action</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action3">
                            Something else here
                        </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" disabled>Link</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl type="search"   placeholder="Search" className="me-2" aria-label="Search" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Nav>
                        <Nav.Link href="/Login">Login</Nav.Link>
                        <Nav.Link href="/Regester">Regester</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
export default Header2;
