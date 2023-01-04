import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useViewDoctorProfileQuery } from '../../services/userAuthAPI';
import { getToken } from '../../services/localStorageServices';


const NavbarComp = () => {
    const { access_token } = getToken();
    const { data, isSuccess } = useViewDoctorProfileQuery({ token: access_token });
    console.log(data);



    return (
        <div className="main-wrapper">

            <Navbar className='navbar-main'
                collapseOnSelect
                expand="lg"
                style={{ backgroundColor: "#fff" }}
                variant="dark"
            >
                <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
                            {data &&
                                data.map((workObj, index) => (


                                    <div className="profile-box ml-15">
                                        <button
                                            className="dropdown-toggle bg-transparent border-0"
                                            type="button"
                                            id="profile"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <div className="profile-info">
                                                <div className="info">
                                                    <h6>{workObj.first_name + "" + workObj.last_name
                                                    }</h6>
                                                    <div className="image">
                                                        <img
                                                            src={workObj.logo}
                                                            alt=""
                                                        />

                                                    </div>
                                                </div>
                                            </div>

                                        </button>
                                        <ul
                                            className="dropdown-menu dropdown-menu-end"
                                            aria-labelledby="profile"
                                            style={{}}
                                        >
                                            <li>
                                                <Link to="settings/profile">
                                                    <span class="material-symbols-outlined">person</span>
                                                    View Profile
                                                </Link>
                                            </li>

                                            <li>
                                                <a href="#0">
                                                    <span class="material-symbols-outlined">mail</span>
                                                    Messages
                                                </a>
                                            </li>

                                            <li>
                                                <a href="#0">
                                                    <span class="material-symbols-outlined">logout</span>
                                                    Sign Out
                                                </a>
                                            </li>
                                        </ul>
                                    </div>))}
                            {/* <Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default NavbarComp