import React from "react"
import "../Dashboard/AdminDashboard.css"
import { Modal, ModalHeader, ModalBody } from "reactstrap";

class AdminDashboard extends React.Component{
    render() {
        return(
            <div className
        ="cart_area">
            <div className
        ="text-center tokolapak-heading">
                <h2><span>List Package</span></h2>
            </div>
            <div className
        ="container">
              <div className
            ="cart_inner">
                <div className
            ="table-responsive">
                  <table className
                ="table">
                    <thead>
                      <tr>
                        <th scope="col">Package Name</th>
                        <th scope="col">Price / Hour</th>
                        <th scope="col">Location</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Keterangan</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className
                        ="media">
                            <div className
                        ="d-flex">
                              <img src="asset/img/photo-studio.jpg" alt="" />
                            </div>
                            <div className
                        ="media-body">
                              <p>PAKET A</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <h5>$360.00</h5>
                        </td>
                        <td>
                          <h5>Indor</h5>
                        </td>
                        <td>
                            <h5>4 Hours</h5>
                          </td>
                          <td>
                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iusto veniam eaque unde at quis alias vero obcaecati delectus asperiores sapiente, ratione repellendus ea atque corporis quam explicabo modi numquam.</h5>
                          </td>
                          <td>
                            <a href="list_package_edit.html" className
                        ="genric-btn info circle">Edit</a>
                                        <a href="#" className
                                    ="genric-btn danger circle">Delete</a>
                          </td>
                      </tr>
                      <tr>
                        <td>
                          <div className
                        ="media">
                            <div className
                        ="d-flex">
                              <img src="asset/img/package.jpg" alt="" />
                            </div>
                            <div className
                        ="media-body">
                              <p>Paket B</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <h5>$360.00</h5>
                        </td>
                        <td>
                          <h5>Outdoor</h5>
                        </td>
                        <td>
                            <h5>2 Hours</h5>
                          </td>
                          <td>
                            <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non voluptatum aperiam repudiandae expedita. Blanditiis velit illo adipisci voluptatum ea nemo error necessitatibus quo! In tenetur, doloribus nam perspiciatis ducimus numquam!</h5>
                          </td>
                          <td>
                            <a href="list_package_edit.html" className
                        ="genric-btn info circle">Edit</a>
                                        <a href="#" className
                                    ="genric-btn danger circle">Delete</a>
                          </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                    <a href="list_package_add.html" className
                ="genric-btn primary circle">Add Package</a>
                  </table>
                </div>
              </div>
          </div>
          </div>
          
        )
    }
}

export default AdminDashboard