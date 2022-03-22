import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import {BsSearch} from 'react-icons/bs';

      

function Datasetes(){
    
    return (
       
        <div>
            <h1>Datasetespage</h1>
            <Form className="d-flex">
                <FormControl type="search"   placeholder="Search" className=" my-2 my-lg-0" aria-label="Search" ></FormControl>
                <Button variant="primary" className="mr-2 ml-2 my-2 my-lg-0" ><BsSearch/></Button>
            </Form>
            <br/>
            <div class="Search"> <h2>데이터부분</h2>

            </div>
            
        </div>
    );
}
    export default Datasetes