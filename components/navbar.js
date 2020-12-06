import React from 'React';
import { Nav,Navbar,NavDropdown} from 'react-bootstrap';
import footercss from '../assets/styles/Home.module.css';
const navbar = () => {
    return(
        <div>
                   <Navbar collapseOnSelect expand="lg" style={{backgroundColor:"navy"}}>
            <Navbar.Brand style={{fontFamily:'Kanit, sans-serif',color:"white"}}>สหกรณ์โคขุน</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link style={{color:"white"}} href="/">หน้าแรก</Nav.Link>
            <Nav.Link style={{color:"white"}} href="product">รายการซากโค</Nav.Link>
            <Nav.Link style={{color:"white"}} href="product">สรุปเกรด</Nav.Link>
            <Nav.Link style={{color:"white"}} href="product">ประวัติการตัดเกรด</Nav.Link>
            <Nav.Link style={{color:"white"}} href="product">การตั้งค่า</Nav.Link>
            <NavDropdown.Divider />
            </Nav>
            <NavDropdown title="ชื่อผู้ใช้" id="collasible-nav-dropdown">
            <Nav.Link href="#deets">เปลี่ยนรหัสผ่าน</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">ออกจากระบบ</Nav.Link>
            </NavDropdown>
            </Navbar.Collapse>
            </Navbar>
            <footer className={footercss.footer}>
                Copyright By Momo
            </footer>
     
            </div>
    )
}

export default navbar