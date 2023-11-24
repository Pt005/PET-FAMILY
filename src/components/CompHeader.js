import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div className="header" style={{ backgroundColor: '#87C4FF', height: '111px', padding: '6px 0' }}>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-3' >
            <div className='text'>
              <img src="//bizweb.dktcdn.net/100/423/885/themes/824351/assets/logo.png?1689065953262" alt="Pet Family" style={{ height: '86px', width: '223px', marginLeft:'165px' }} />
            </div>
          </div>

          <div className='col-md-6 d-flex align-items-center' >
            <div className="row">
              <input type="text" placeholder="Tìm kiếm..." style={{ width: '470px', height: '45px' }} />
              <button type="button" className=' border border-0' style={{ width: '45px', height: '45px', backgroundColor: '#FF884B', padding: '0px' }}>
                <img src={require('/PET-FAMILY-MAIN/src/assets/search.png')} style={{ width: '25px', height: '25px' }} />
              </button>
            </div>
          </div>

          <div className='col-md-3' >
            <div className='row '>
              <div className='col-4'>
                <a href="#" title="DangNhap" style={{ textDecoration: 'none', color: 'black' }}>
                  <div className='row p-0'>
                    <div className='col-3'>
                      <span className="icon-DangNhap">
                        <img src={require('/PET-FAMILY-MAIN/src/assets/user.png')} alt="Pet Family" style={{ height: '20px', width: '20px' }} />
                      </span>
                    </div>

                    <div className='col mx-2'>
                      <span>
                        <p>Đăng Nhập</p>
                      </span>
                    </div>
                  </div>
                </a>
              </div>

              <div className='col-1'>
                |
              </div>

              <div className='col-3'>
                <a href="#" title="DangKy" style={{ textDecoration: 'none', color: 'black' }}>
                  <div className='row p-0'>
                    <div className='col-3'>
                      <span className="icon-DangKy">
                        <img src={require('/PET-FAMILY-MAIN/src/assets/edit.png')} alt="Pet Family" style={{ height: '20px', width: '20px' }} />
                      </span>
                    </div>

                    <div className='col mx-2'>
                      <span>
                        <p>Đăng Ký</p>
                      </span>
                    </div>
                  </div>
                </a>
              </div>

            </div>
            <div className='row mt-3'>
              <div className='col-4'>
                <a href="tel:19006750" title="Cart" style={{ textDecoration: 'none', color: 'black' }}>
                  <div className='row p-0'>
                    <div className='col-3'>
                      <span className="icon-phone">
                        <img src={require('/PET-FAMILY-MAIN/src/assets/call.png')} alt="Pet Family" style={{ height: '40px', width: '40px' }} />
                      </span>
                    </div>

                    <div className='col mx-2'>
                      <span>
                        <strong>Gọi ngay </strong>
                        <b>19006750</b>
                      </span>
                    </div>
                  </div>
                </a>


              </div>
              <div className='col-2'>
                <a href="#" title="hotline" style={{ textDecoration: 'none' }}>
                  <img src={require('/PET-FAMILY-MAIN/src/assets/shopping-cart.png')} alt="Pet Family" style={{ height: '40px', width: '40px' }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Header;





