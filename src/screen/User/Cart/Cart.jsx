import React from "react"

class Cart extends React.Component{
render(){
    return(
        <div class="cart_area section_padding">
        <div class="container">
          <div class="cart_inner">
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Total</th>
                    <th scope="col">Edit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div class="media">
                        <div class="d-flex">
                          <img src="asset/img/photo-studio.jpg" alt="" />
                        </div>
                        <div class="media-body">
                          <p>PAKET A</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h5>$360.00</h5>
                    </td>
                    <td>
                      <h5>$720.00</h5>
                    </td>
                    <td>
                        <a href="#" class="genric-btn danger circle">Remove</a>
                      </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="media">
                        <div class="d-flex">
                          <img src="asset/img/package.jpg" alt="" />
                        </div>
                        <div class="media-body">
                          <p>Paket B</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h5>$360.00</h5>
                    </td>
                    <td>
                      <h5>$720.00</h5>
                    </td>
                    <td>
                        <a href="#" class="genric-btn danger circle">Remove</a>
                      </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <h5>Subtotal</h5>
                    </td>
                    <td>
                      <h5>$2160.00</h5>
                    </td>
                  </tr>
                  <tr class="shipping_area">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <h5>Tanggal</h5>
                    </td>
                    <td>
                        <div class="docs-datepicker">
                            <div class="input-group">
                                <input id='fieldDate' type="text" class="form-control docs-date" name="date" placeholder="Pick a date"/>
                                <span class="input-group-btn">
                                    <button type="button" class="btn btn-default docs-datepicker-trigger" disabled>
                                        <i class="fa fa-calendar" aria-hidden="true"></i>
                                    </button>
                                </span>
                            </div>
                            <div class="docs-datepicker-container"></div>
                        </div> 
                    </td>
                    <td></td>
                  </tr>
                  <tr class="shipping_area">
                    <td>
                    </td>
                    <td>
                        <div class="cupon_text float-right">
                            <a class="btn_3" href="checkout_afterloginuser.html">Proceed To Chechout</a>
                          </div>
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
      </div>
      </div>
    )
}
}
export default Cart