import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav class="navbar navbar-expand-lg p-0  ">
      <div class="container-fluid ">
        <div class="col-3 d-flex justify-content-end">
          <div className='d-flex align-items-center  ' style={{ height: '54px', width: '300px', backgroundColor: '#FF884B' }} >
            <img src={require('/PET-FAMILY-MAIN/src/assets/menu.png')} alt="Pet Family" style={{ height: '28px', width: '28px', marginLeft: '10px' }} />
            <p className='mx-4 my-0 ' style={{ fontSize: '18px', fontFamily: 'Robonto', fontWeight: '700' }}> DANH MỤC SẢN PHẨM</p>
          </div>
        </div>


        <div className='col'>
          <div>
            <Container className='m-1 d-flex align-items-center '>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Link to="/" className="nav-link" style={{ fontSize: '21px', fontFamily: 'Robonto', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 'bold', color: '#333333' }}>Trang chủ</Link>
                  <Link to="/Gioi-thieu" className="nav-link" style={{ fontSize: '21px', fontFamily: 'Robonto', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 'bold', color: '#333333' }}>Giới thiệu</Link>

                  {/* Entire Split Button as a Link */}
                  <div class="btn-group">
                    <Link to="/San-pham" className="btn btn-light btn-sm text-dark" style={{ fontSize: '21px', fontFamily: 'Robonto', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 'bold', color: '#333333' }}>
                      Sản phẩm
                    </Link>
                    <button
                      type="button"
                      class="btn btn-light btn-sm text-dark dropdown-toggle dropdown-toggle-split mt-1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src={require('/PET-FAMILY-MAIN/src/assets/drop-menu.png')} style={{ width: '18px', height: '18px' }} />

                    </button>
                    <ul class="dropdown-menu">
                      {/* Links for different subcategories */}
                      <li>
                        <Link to="/Do-an-cho" className="dropdown-item" style={{ fontSize: '15px', fontFamily: 'Robonto', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 'bold', color: '#333333' }}>
                          Đồ ăn cho chó
                        </Link>
                      </li>
                      <li>
                        <Link to="/Do-an-meo" className="dropdown-item" style={{ fontSize: '15px', fontFamily: 'Robonto', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 'bold', color: '#333333' }}>
                          Đồ ăn cho mèo
                        </Link>
                      </li>
                      <li>
                        <Link to="/Do-choi-cho" className="dropdown-item" style={{ fontSize: '15px', fontFamily: 'Robonto', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 'bold', color: '#333333' }}>
                          Đồ chơi cho chó
                        </Link>
                      </li>
                      <li>
                        <Link to="/Do-choi-meo" className="dropdown-item" style={{ fontSize: '15px', fontFamily: 'Robonto', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 'bold', color: '#333333' }}>
                          Đồ chơi cho mèo
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <Link to="/Tin-tuc" className="nav-link" style={{ fontSize: '21px', fontFamily: 'Robonto', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 'bold', color: '#333333' }}>Tin tức</Link>
                  <Link to="/Lien-he" className="nav-link" style={{ fontSize: '21px', fontFamily: 'Robonto', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 'bold', color: '#333333' }}>Liên hệ</Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </div>

        </div>






        {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active text-uppercase fw-bold" aria-current="" href="/intro">Giới thiệu</a>
            </li>

            <li class="nav-item-dropdown ">
              <a class="nav-link dropdown text-uppercase  fw-bold" href="/Tour" > Tour </a>

            </li>



            <li class="nav-item ">
              <a class="nav-link active text-uppercase fw-bold" aria-current="page" href="#">Dịch vụ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active text-uppercase fw-bold" aria-current="page" href="/CamNang">Cẩm nang du lịch</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active text-uppercase fw-bold" aria-current="page" href="#">Tin tức</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active text-uppercase fw-bold" aria-current="page" href="#">Liên hệ</a>
            </li>
          </ul>
        </div>
      </div> */}

      </div>


    </nav>








  );
}

export default Menu;
