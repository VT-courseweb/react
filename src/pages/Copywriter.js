import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "../index.css"
function Copywriter(){
    return(
        <div>
            <div className="Copywriter">
                <Navbar bg="dark" variant="dark" expand="lg">
                <Container fluid >
                    <div className="text-muted">Copyright © Your Website 2021</div>
                    <div className="text-muted"> VT </div>
                </Container>
                </Navbar>
            </div>
        </div>
    )
}
export default Copywriter;
