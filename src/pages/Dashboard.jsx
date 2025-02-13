import React from 'react'

const Dashboard = () => {
  return (
    <>
    <main className="page-content">
  <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-4">
    <div className="col">
      <div className="card rounded-4">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <div className>
              <p className="mb-1">Total Orders</p>
              <h4 className="mb-0">5.8K</h4>
              <p className="mb-0 mt-2 font-13"><i className="bi bi-arrow-up" /><span>22.5% from last week</span></p>
            </div>
            <div className="ms-auto widget-icon bg-primary text-white">
              <i className="bi bi-basket2" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card rounded-4">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <div className>
              <p className="mb-1">Total Income</p>
              <h4 className="mb-0">$9,786</h4>
              <p className="mb-0 mt-2 font-13"><i className="bi bi-arrow-up" /><span>13.2% from last week</span></p>
            </div>
            <div className="ms-auto widget-icon bg-success text-white">
              <i className="bi bi-currency-dollar" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card rounded-4">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <div className>
              <p className="mb-1">Total Views</p>
              <h4 className="mb-0">875</h4>
              <p className="mb-0 mt-2 font-13"><i className="bi bi-arrow-up" /><span>12.3% from last week</span></p>
            </div>
            <div className="ms-auto widget-icon bg-orange text-white">
              <i className="bi bi-emoji-heart-eyes" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card rounded-4">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <div className>
              <p className="mb-1">New Clients</p>
              <h4 className="mb-0">9853</h4>
              <p className="mb-0 mt-2 font-13"><i className="bi bi-arrow-up" /><span>32.7% from last week</span></p>
            </div>
            <div className="ms-auto widget-icon bg-info text-white">
              <i className="bi bi-people-fill" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>{/*end row*/}
  <div className="row">
    <div className="col-12 col-lg-8 col-xl-8 d-flex">
      <div className="card w-100 rounded-4">
        <div className="card-body">
          <div className="d-flex align-items-center mb-3">
            <h6 className="mb-0">Revenue History</h6>
            <div className="fs-5 ms-auto dropdown">
              <div className="dropdown-toggle dropdown-toggle-nocaret cursor-pointer" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></div>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
          </div>
          <div className="d-flex align-items-center gap-3">
            <div className>
              <h4 className="text-success mb-0">$9,279</h4>
              <p className="mb-0">Revenue</p>
            </div>
            <div className="vr" />
            <div className>
              <h4 className="text-pink mb-0">$5,629</h4>
              <p className="mb-0">Investment</p>
            </div>
          </div>
          <div id="chart1" />
        </div>
      </div>
    </div>
    <div className="col-12 col-lg-4 col-xl-4 d-flex">
      <div className="card w-100 rounded-4">
        <div className="card-body">
          <div className="d-flex align-items-center mb-3">
            <h6 className="mb-0">Task Overview</h6>
            <div className="fs-5 ms-auto dropdown">
              <div className="dropdown-toggle dropdown-toggle-nocaret cursor-pointer" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></div>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
          </div>
          <div id="chart2" />
        </div>
        <ul className="list-group list-group-flush mb-0 shadow-none">
          <li className="list-group-item bg-transparent border-top"><i className="bi bi-circle-fill me-2 font-weight-bold text-primary" /> Complete <span className="float-end">120</span></li>
          <li className="list-group-item bg-transparent"><i className="bi bi-circle-fill me-2 font-weight-bold text-orange" /> In Progress <span className="float-end">110</span></li>
          <li className="list-group-item bg-transparent"><i className="bi bi-circle-fill me-2 font-weight-bold text-info" /> Started <span className="float-end">70</span></li>
        </ul>
      </div>
    </div>
  </div>{/*end row*/}
  <div className="row row-cols-1 row-cols-lg-4 radial-charts g-4">
    <div className="col">
      <div className="card rounded-4">
        <div className="card-body">
          <div className="text-center">
            <p className="mb-1">Orders</p>
            <h4 className>9,254</h4>
          </div>
          <div className>
            <div id="chart3" />
          </div>
          <div className="text-center">
            <p className="mb-1">Completed</p>
            <h4 className>5632</h4>
          </div>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card rounded-4">
        <div className="card-body">
          <div className="text-center">
            <p className="mb-1">Unique Visitors</p>
            <h4 className>5,2684</h4>
          </div>
          <div className>
            <div id="chart4" />
          </div>
          <div className="text-center">
            <p className="mb-1">Increased since Last Week</p>
            <h4 className>25%</h4>
          </div>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card rounded-4">
        <div className="card-body">
          <div className="text-center">
            <p className="mb-1">Impressions</p>
            <h4 className>7,362</h4>
          </div>
          <div className>
            <div id="chart5" />
          </div>
          <div className="text-center">
            <p className="mb-1">Increased since Last Week</p>
            <h4 className>45%</h4>
          </div>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card rounded-4">
        <div className="card-body">
          <div className="text-center">
            <p className="mb-1">Followers</p>
            <h4 className>4278K</h4>
          </div>
          <div className>
            <div id="chart6" />
          </div>
          <div className="text-center">
            <p className="mb-1">Increased since Last Week</p>
            <h4 className>55%</h4>
          </div>
        </div>
      </div>
    </div>
  </div>{/*end row*/}
  <div className="row">
    <div className="col-12 col-lg-6 col-xl-6 d-flex">
      <div className="card rounded-4 w-100">
        <div className="card-body">
          <div className="d-flex align-items-center mb-3">
            <h6 className="mb-0">Sales By Countries</h6>
            <div className="fs-5 ms-auto dropdown">
              <div className="dropdown-toggle dropdown-toggle-nocaret cursor-pointer" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></div>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
          </div>
          <div id="world-map" style={{height: 242}} />
        </div>
        <div className="table-responsive">
          <table className="table align-items-center">
            <tbody>
              <tr>
                <td><i className="flag-icon flag-icon-gb" /></td>
                <td><i className="bi bi-circle-fill me-2 text-primary" /> Russia</td>
                <td><p className="mb-0">Sales: <span className="fw-bold">28,000</span></p></td>
                <td>40%</td>
              </tr>
              <tr>
                <td><i className="flag-icon flag-icon-au" /></td>
                <td><i className="bi bi-circle-fill me-2 text-warning" /> Australia</td>
                <td><p className="mb-0">Sales: <span className="fw-bold">58,000</span></p></td>
                <td>60%</td>
              </tr>
              <tr>
                <td><i className="flag-icon flag-icon-us" /></td>
                <td><i className="bi bi-circle-fill me-2 text-success" /> United States</td>
                <td><p className="mb-0">Sales: <span className="fw-bold">72,000</span></p></td>
                <td>30%</td>
              </tr>
              <tr>
                <td><i className="flag-icon flag-icon-in" /></td>
                <td><i className="bi bi-circle-fill me-2 text-secondary" /> India</td>
                <td><p className="mb-0">Sales: <span className="fw-bold">68,000</span></p></td>
                <td>55%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div className="col-12 col-lg-6 col-xl-6 d-flex">
      <div className="card rounded-4 w-100">
        <div className="card-body">
          <div className="d-flex align-items-center mb-3">
            <h6 className="mb-0">Top Selling Products</h6>
            <div className="fs-5 ms-auto dropdown">
              <div className="dropdown-toggle dropdown-toggle-nocaret cursor-pointer" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></div>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
          </div>
          <div className>
            <div className="d-flex align-items-start gap-3">
              <div className="product-box border">
                <img src="assets/images/products/05.png" alt="product img" />
              </div>
              <div className="flex-grow-1">
                <p className="my-2 d-flex align-items-center justify-content-between flex-nowrap">iPhone 11 - A24512 <span className="text-end">(4,216 Orders) <span className="ms-3 fw-bold">42%</span></span></p>
                <div className="progress-wrapper">
                  <div className="progress" style={{height: 4}}>
                    <div className="progress-bar bg-primary" role="progressbar" style={{width: '42%'}} />
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="d-flex align-items-start gap-3">
              <div className="product-box border">
                <img src="assets/images/products/07.png" alt="product img" />
              </div>
              <div className="flex-grow-1">
                <div className="progress-wrapper">
                  <p className="my-2 d-flex align-items-center justify-content-between flex-nowrap">iPhone 11 - A24512 <span className="text-end">(4,216 Orders) <span className="ms-3 fw-bold">42%</span></span></p>
                  <div className="progress" style={{height: 4}}>
                    <div className="progress-bar bg-primary" role="progressbar" style={{width: '42%'}} />
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="d-flex align-items-start gap-3">
              <div className="product-box border">
                <img src="assets/images/products/09.png" alt="product img" />
              </div>
              <div className="flex-grow-1">
                <div className="progress-wrapper">
                  <p className="my-2 d-flex align-items-center justify-content-between flex-nowrap">iPhone 11 - A24512 <span className="text-end">(4,216 Orders) <span className="ms-3 fw-bold">42%</span></span></p>
                  <div className="progress" style={{height: 4}}>
                    <div className="progress-bar bg-primary" role="progressbar" style={{width: '42%'}} />
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="d-flex align-items-start gap-3">
              <div className="product-box border">
                <img src="assets/images/products/02.png" alt="product img" />
              </div>
              <div className="flex-grow-1">
                <div className="progress-wrapper">
                  <p className="my-2 d-flex align-items-center justify-content-between flex-nowrap">iPhone 11 - A24512 <span className="text-end">(4,216 Orders) <span className="ms-3 fw-bold">42%</span></span></p>
                  <div className="progress" style={{height: 4}}>
                    <div className="progress-bar bg-primary" role="progressbar" style={{width: '42%'}} />
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="d-flex align-items-start gap-3">
              <div className="product-box border">
                <img src="assets/images/products/04.png" alt="product img" />
              </div>
              <div className="flex-grow-1">
                <div className="progress-wrapper">
                  <p className="my-2 d-flex align-items-center justify-content-between flex-nowrap">iPhone 11 - A24512 <span className="text-end">(4,216 Orders) <span className="ms-3 fw-bold">42%</span></span></p>
                  <div className="progress" style={{height: 4}}>
                    <div className="progress-bar bg-primary" role="progressbar" style={{width: '42%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>{/*end row*/}
  <div className="row row-cols-1 row-cols-lg-3">
    <div className="col">
      <div className="card rounded-4">
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <div className>
              <h4 className="mb-0">24.5K</h4>
              <p className="mb-0">Facebook Followers</p>
            </div>
            <div className="fs-2 text-facebook">
              <i className="bi bi-facebook" />
            </div>
          </div>
          <div id="chart7" />
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card rounded-4">
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <div className>
              <h4 className="mb-0">37.8K</h4>
              <p className="mb-0">Twitter Followers</p>
            </div>
            <div className="fs-2 text-twitter">
              <i className="bi bi-twitter" />
            </div>
          </div>
          <div id="chart8" />
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card rounded-4">
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <div className>
              <h4 className="mb-0">56.9K</h4>
              <p className="mb-0">Youtube Subscribers</p>
            </div>
            <div className="fs-2 text-youtube">
              <i className="bi bi-youtube" />
            </div>
          </div>
          <div id="chart9" />
        </div>
      </div>
    </div>
  </div>{/*end row*/}
  <div className="row">
    <div className="col-12 col-lg-6 col-xl-6 d-flex">
      <div className="card rounded-4 w-100">
        <div className="card-header bg-transparent">
          <div className="d-flex align-items-center">
            <h6 className="mb-0">Customer Reviews</h6>
            <div className="fs-5 ms-auto dropdown">
              <div className="dropdown-toggle dropdown-toggle-nocaret cursor-pointer" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></div>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="review-list">
            <div className="d-flex align-items-start">
              <div className="review-user">
                <img src="assets/images/avatars/avatar-1.png" width={65} height={65} className="rounded-circle" alt />
              </div>
              <div className="review-content ms-3">
                <div className="rates cursor-pointer fs-6">
                  <i className="bx bxs-star text-warning" />
                  <i className="bx bxs-star text-warning" />
                  <i className="bx bxs-star text-warning" />
                  <i className="bx bxs-star text-warning" />
                  <i className="bx bxs-star text-warning" />
                </div>
                <div className="d-flex align-items-center mb-2">
                  <h6 className="mb-0">James Caviness</h6>
                  <p className="mb-0 ms-auto">February 16, 2021</p>
                </div>
                <p>Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>
              </div>
            </div>
            <hr />
            <div className="d-flex align-items-start">
              <div className="review-user">
                <img src="assets/images/avatars/avatar-2.png" width={65} height={65} className="rounded-circle" alt />
              </div>
              <div className="review-content ms-3">
                <div className="rates cursor-pointer fs-6">
                  <i className="bx bxs-star text-warning" />
                  <i className="bx bxs-star text-warning" />
                  <i className="bx bxs-star text-warning" />
                  <i className="bx bxs-star text-warning" />
                  <i className="bx bxs-star text-warning" />
                </div>
                <div className="d-flex align-items-center mb-2">
                  <h6 className="mb-0">David Buckley</h6>
                  <p className="mb-0 ms-auto">February 22, 2021</p>
                </div>
                <p>Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>
              </div>
            </div>
            <hr />
            <div className="d-flex align-items-start">
              <div className="review-user">
                <img src="assets/images/avatars/avatar-3.png" width={65} height={65} className="rounded-circle" alt />
              </div>
              <div className="review-content ms-3">
                <div className="rates cursor-pointer fs-6">
                  <i className="bx bxs-star text-warning" />
                  <i className="bx bxs-star text-warning" />
                  <i className="bx bxs-star text-warning" />
                  <i className="bx bxs-star text-warning" />
                  <i className="bx bxs-star text-warning" />
                </div>
                <div className="d-flex align-items-center mb-2">
                  <h6 className="mb-0">Peter Costanzo</h6>
                  <p className="mb-0 ms-auto">February 26, 2021</p>
                </div>
                <p>Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>
              </div>
            </div>
            <hr />
            <div className="d-flex align-items-start">
              <div className="review-user">
                <img src="assets/images/avatars/avatar-4.png" width={65} height={65} className="rounded-circle" alt />
              </div>
              <div className="review-content ms-3">
                <div className="rates cursor-pointer fs-6">
                  <i className="bx bxs-star text-warning" />
                  <i className="bx bxs-star text-warning" />
                  <i className="bx bxs-star text-warning" />
                  <i className="bx bxs-star text-warning" />
                  <i className="bx bxs-star text-warning" />
                </div>
                <div className="d-flex align-items-center mb-2">
                  <h6 className="mb-0">Peter Costanzo</h6>
                  <p className="mb-0 ms-auto">February 26, 2021</p>
                </div>
                <p>Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>
              </div>
            </div>
            <hr />
            <div className="d-flex align-items-start">
              <div className="review-user">
                <img src="assets/images/avatars/avatar-5.png" width={65} height={65} className="rounded-circle" alt />
              </div>
              <div className="review-content ms-3">
                <div className="rates cursor-pointer fs-6">
                  <i className="bx bxs-star text-warning" />
                  <i className="bx bxs-star text-warning" />
                  <i className="bx bxs-star text-warning" />
                  <i className="bx bxs-star text-warning" />
                  <i className="bx bxs-star text-warning" />
                </div>
                <div className="d-flex align-items-center mb-2">
                  <h6 className="mb-0">Peter Costanzo</h6>
                  <p className="mb-0 ms-auto">February 26, 2021</p>
                </div>
                <p>Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>
              </div>
            </div>
            <hr />
            <div className="d-flex align-items-start">
              <div className="review-user">
                <img src="assets/images/avatars/avatar-6.png" width={65} height={65} className="rounded-circle" alt />
              </div>
              <div className="review-content ms-3">
                <div className="rates cursor-pointer fs-6">
                  <i className="bx bxs-star text-warning" />
                  <i className="bx bxs-star text-warning" />
                  <i className="bx bxs-star text-warning" />
                  <i className="bx bxs-star text-warning" />
                  <i className="bx bxs-star text-warning" />
                </div>
                <div className="d-flex align-items-center mb-2">
                  <h6 className="mb-0">Peter Costanzo</h6>
                  <p className="mb-0 ms-auto">February 26, 2021</p>
                </div>
                <p>Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>
              </div>
            </div>
            <hr />
            <div className="d-flex align-items-start">
              <div className="review-user">
                <img src="assets/images/avatars/avatar-7.png" width={65} height={65} className="rounded-circle" alt />
              </div>
              <div className="review-content ms-3">
                <div className="rates cursor-pointer fs-6">
                  <i className="bx bxs-star text-warning" />
                  <i className="bx bxs-star text-warning" />
                  <i className="bx bxs-star text-warning" />
                  <i className="bx bxs-star text-warning" />
                  <i className="bx bxs-star text-warning" />
                </div>
                <div className="d-flex align-items-center mb-2">
                  <h6 className="mb-0">Peter Costanzo</h6>
                  <p className="mb-0 ms-auto">February 26, 2021</p>
                </div>
                <p>Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-12 col-lg-6 col-xl-6 d-flex">
      <div className="card rounded-4 w-100">
        <div className="card-header bg-transparent">
          <div className="d-flex align-items-center">
            <h6 className="mb-0">Chat Box</h6>
            <div className="fs-5 ms-auto dropdown">
              <div className="dropdown-toggle dropdown-toggle-nocaret cursor-pointer" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></div>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card-body p-0">
          <div className="chat-talk d-flex flex-column gap-4 p-3">
            <div className="d-flex align-items-end gap-3">
              <div className="chat-user">
                <img src="assets/images/avatars/avatar-7.png" width={55} height={55} className="rounded-circle" alt />
              </div>
              <div className="chat-msg border flex-grow-1 rounded-4 p-3">
                Hello , Codervent
              </div>
            </div>
            <div className="d-flex align-items-end gap-3">
              <div className="chat-msg border flex-grow-1 rounded-4 p-3 bg-light">
                Hello , Codervent
              </div>
              <div className="chat-user">
                <img src="assets/images/avatars/avatar-7.png" width={55} height={55} className="rounded-circle" alt />
              </div>
            </div>
            <div className="d-flex align-items-end gap-3">
              <div className="chat-user">
                <img src="assets/images/avatars/avatar-7.png" width={55} height={55} className="rounded-circle" alt />
              </div>
              <div className="chat-msg border flex-grow-1 rounded-4 p-3">
                Hello , Codervent
              </div>
            </div>
            <div className="d-flex align-items-end gap-3">
              <div className="chat-msg border flex-grow-1 rounded-4 p-3 bg-light">
                Hello , Codervent
              </div>
              <div className="chat-user">
                <img src="assets/images/avatars/avatar-7.png" width={55} height={55} className="rounded-circle" alt />
              </div>
            </div>
            <div className="d-flex align-items-end gap-3">
              <div className="chat-user">
                <img src="assets/images/avatars/avatar-7.png" width={55} height={55} className="rounded-circle" alt />
              </div>
              <div className="chat-msg border flex-grow-1 rounded-4 p-3">
                Hello , Codervent
              </div>
            </div>
            <div className="d-flex align-items-end gap-3">
              <div className="chat-msg border flex-grow-1 rounded-4 p-3 bg-light">
                Hello , Codervent
              </div>
              <div className="chat-user">
                <img src="assets/images/avatars/avatar-7.png" width={55} height={55} className="rounded-circle" alt />
              </div>
            </div>
            <div className="d-flex align-items-end gap-3">
              <div className="chat-user">
                <img src="assets/images/avatars/avatar-7.png" width={55} height={55} className="rounded-circle" alt />
              </div>
              <div className="chat-msg border flex-grow-1 rounded-4 p-3">
                Hello , Codervent
              </div>
            </div>
            <div className="d-flex align-items-end gap-3">
              <div className="chat-msg border flex-grow-1 rounded-4 p-3 bg-light">
                Hello , Codervent
              </div>
              <div className="chat-user">
                <img src="assets/images/avatars/avatar-7.png" width={55} height={55} className="rounded-circle" alt />
              </div>
            </div>
          </div>
          <div className="card-footer bg-transparent">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Type your message" />
              <button className="btn btn-primary" type="button"><i className="bi bi-send" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>{/*end row*/}
</main>
    </>
  )
}

export default Dashboard