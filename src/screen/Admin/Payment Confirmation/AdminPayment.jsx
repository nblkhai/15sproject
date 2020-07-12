import React from "react";


class AdminPayment extends React.Component{
render(){
    return(
        <div className="cart_area">
        <div className="text-center tokolapak-heading">
            <h2><span>Payment Confirmation</span></h2>
        </div>
        <div className="container">
            <div className="cart_inner">
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">No</th>
                                <th scope="col">Nama Pemesan</th>
                                <th scope="col">Package Name</th>
                                <th scope="col">Total Price</th>
                                <th scope="col">Bukti Transfer</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    613435
                                </td>
                                <td>
                                    Fajar Agus Maulana
                                </td>
                                <td>
                                    <div className="media">
                                        <div className="media-body">
                                            <p>PAKET A</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h5>$360.00</h5>
                                </td>
                                <td>
                                    <div className="media">
                                        <div className="d-flex">
                                            <img src="asset/img/Bukti-Transfer.jpeg" alt="" />
                                        </div>
                                       </div>
                                </td>
                                <td>
                                    Menunggu Konfirmasi
                                 </td>
                                <td>
                                    <a href="confirmation_admin_check.html" className="genric-btn info circle">Check</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    613435
                                </td>
                                <td>
                                    Fajar Agus Maulana
                                </td>
                                <td>
                                    <div className="media">
                                        <div className="media-body">
                                            <p>PAKET A</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h5>$360.00</h5>
                                </td>
                                <td>
                                    <div className="media">
                                        <div className="d-flex">
                                            <img src="asset/img/Bukti-Transfer.jpeg" alt="" />
                                        </div>
                                       </div>
                                </td>
                                <td>
                                   Pembayaran Diterima
                                </td>
                                <td>
                                   -
                                </td>
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
export default AdminPayment