import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Table from 'react-bootstrap/Table';
import {AiOutlineDatabase} from 'react-icons/ai';   

function Datasetsdetail (){
    return (
        <div>
            <div className="container">
            </div>
            <h1>Datasetespage</h1>
            <Form className="col-xl-12" style={{minWidth:"250px"}}>
                <FormControl  type="Text"  placeholder="title" className=" col-xl-12 my-lg-0" aria-label="Title" />
                <FormControl type="Text"  placeholder="라이센스 여부 표시" className=" col-xl-12 mt-2" ></FormControl>
                <FormControl type="file" id="exampleInputFile" className=" col-xl-12 mt-2"/>
               
            </Form>
            <br/>
            <div className="col-xl-12 " style={{minWidth:"250px"}}  >
                <h5>데이터explorer부분</h5>
                <div className="card">
                <div className="card-header">
                    <AiOutlineDatabase/> DataTable Example
                </div>
                <div className="card-body d-none d-lg-table-cell">
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
    export default Datasetsdetail