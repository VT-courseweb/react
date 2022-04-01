
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {FaGem} from "react-icons/fa";
import {FaHeart} from "react-icons/fa";

function Header(){
  return(
  <div>
    <ProSidebar>
      <Menu iconShape="square" className='Menu'>
        <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
        <SubMenu title="Components" icon={<FaHeart />}>
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 2</MenuItem>
        </SubMenu>
      </Menu>
  </ProSidebar>;
  </div>
  )
}
export default Header;
