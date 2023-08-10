import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useRecoilState, useRecoilValue } from "recoil";
import { Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { loginState, userState } from "../Atom/user";
import Form from "react-bootstrap/Form";
import { useState, useRef } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useRecoilState(loginState);
  const [search, setSearch] = useState("");
  const user = useRecoilValue(userState);

  const handleLogout = () => {
    setLoggedIn(false);
    window.location.reload();
    navigate("/");
  };

  const handleOnChangeSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const handleOnClickSearch = (e: any) => {
    e.preventDefault();
    navigate("/Search/" + search);
    setSearch("");
  };

  return (
    <Navbar expand="lg" className="bg-white shadow-sm">
      <Container>
        <Nav.Link as={Link} to="/">
          <img
            src={require("../public/images/BGT_LOGO.png")}
            className="w-20 h-20 mr-3"
            alt="logo"
          />
        </Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Form className="flex w-[30vw] h-full items-center justify-center">
            <Form.Control
              type="text"
              placeholder="Search"
              className="bg-mint w-[30vw] h-full"
              aria-label="Search"
              value={search}
              onChange={handleOnChangeSearch}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleOnClickSearch(e);
              }}
            />
            <img
              src={require("../public/images/search.png")}
              className="w-7 h-7 flex ml-[-2vw]"
              alt="search"
              onClick={handleOnClickSearch}
            />
          </Form>
          <Nav className="ms-auto">
            <NavDropdown title="카테고리" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/Category/과일">
                과일
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Category/채소">
                채소
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Category/견과">
                쌀, 잡곡, 견과
              </NavDropdown.Item>
            </NavDropdown>
            {loggedIn && user.role !== "customer" ? (
              <Nav.Link as={Link} to="/sales">
                판매하기
              </Nav.Link>
            ) : null}
            {loggedIn ? (
              <>
                {user.role === "seller" && (
                  <Nav.Link as={Link} to="/seller-my-page">
                    판매자 마이페이지
                  </Nav.Link>
                )}
                <Nav.Link as={Link} to="/MyPage">
                  마이페이지
                </Nav.Link>
                <Button variant="light" size="sm" onClick={handleLogout}>
                  로그아웃
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="light"
                  size="sm"
                  className="ml-2 p-2"
                  onClick={() => navigate("/LoginPage")}
                >
                  로그인
                </Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
