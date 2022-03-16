//리액트 메뉴바만들어본곳 
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function Header2(){
    return(
        <div>
            <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Nav className="me-auto" >
                    <Nav.Link href="/datasets">datasets</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/Login">Login</Nav.Link>
                    <Nav.Link href="/Register">Register</Nav.Link>
                    {/* <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                </Nav>
                <Form className="d-flex">
                    <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search"/> 
                    <Button variant="success">Search</Button>
                </Form>
                </Container>
            </Navbar>
            <br></br>
            <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Nav className="me-auto" >
                    <Nav.Link href="/datasets">datasets</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/Login">Login</Nav.Link>
                    <Nav.Link href="/Regester">Regester</Nav.Link>
                    {/* <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                </Nav>
                <Form className="d-flex">
                    <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search"/> 
                    <Button variant="outline-success">Search</Button>
                </Form>
                </Container>
            </Navbar>
            
        </div>
    )
}
export default Header2;
