
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import {BsSearch} from 'react-icons/bs';

function Header(){
  return(
  <div>
    <ProSidebar>
      <Menu iconShape="square" className='Menu'>
      <Form className="d-flex">
        <FormControl type="search"   placeholder="Search" className=" my-2 my-lg-0" aria-label="Search" ></FormControl>
        <Button variant="primary" className=" my-2 my-lg-0"><BsSearch/></Button>
      </Form>
      <MenuItem>최근일</MenuItem>
      <MenuItem>조회순</MenuItem>
      <MenuItem>조회순</MenuItem>
      <MenuItem>기타</MenuItem>
      <MenuItem>Rewoard</MenuItem>
      </Menu>
  </ProSidebar>
  </div>
  )
}
export default Header;
