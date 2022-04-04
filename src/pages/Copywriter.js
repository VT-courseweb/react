import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
function Copywriter(){
    return(
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" fixed="bottom">
            <Container fluid >
                <div class="text-muted">Copyright © Your Website 2021</div>
                <div class="text-muted"> VT </div>
            </Container>
            </Navbar>
        </div>
    )
}
export default Copywriter;
