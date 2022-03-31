import Header from './Header';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import {BsSearch} from 'react-icons/bs';
import Table from 'react-bootstrap/Table';
import {AiOutlineDatabase} from 'react-icons/ai';
      

function Datasetes(){
    
    return (
       
        <div>
            <Header></Header>
            <h1>Datasetespage</h1>
            <Form className="d-flex">
                <FormControl type="search"   placeholder="Search" className=" my-2 my-lg-0" aria-label="Search" ></FormControl>
                <Button variant="primary" className="mr-2 ml-2 my-2 my-lg-0" ><BsSearch/></Button>
            </Form>
            <br/>
            <div class="col-xl-auto">
                <h5>데이터explorer부분</h5>
                <div class="card mb-auto">
                <div class="card-header">
                    <AiOutlineDatabase/> DataTable Example
                </div>
                <div class="card-body">
                <Table striped bordered hover>
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