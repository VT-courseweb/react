import Header from './Header';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import {BsSearch} from 'react-icons/bs';
import Table from 'react-bootstrap/Table';
import {AiOutlineDatabase} from 'react-icons/ai';   
//import './Header.css'

function Datasetes(){
    
    return (
        <div>
            <div className="container">
            </div>
            <h1>Datasetespage</h1>
            <Form className="col-xl-10 d-flex">
                <FormControl type="textAlign"   placeholder="title" className=" col-xl-10 my-lg-0" aria-label="Search" />
            </Form>
            <br/>
            <div class="col-xl-10">
                <h5>데이터explorer부분</h5>
                <div class="card mb-auto">
                <div class="card-header">
                    <AiOutlineDatabase/> DataTable Example
                </div>
                <div class="card-body">
                <Table striped bordered hover >
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                    </Table>
                </div>
            </div>
            </div>
            
        </div>
    );
}
    export default Datasetes