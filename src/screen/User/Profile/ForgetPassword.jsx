import React from "react";
import { Link, Redirect } from "react-router-dom";
import Axios from "axios";
import { connect } from "react-redux";
import {Form,Button,Card} from "react-bootstrap";
import swal from "sweetalert";
import TextField from "../../../components/TextField/TextField"

class ForgetPassword extends React.Component{
state={
  resetPassword:{},
  newPassword:{
    password:""
  }
}
inputHandler = (e) => {
  const { value } = e.target;
  this.setState({
    newPassword: {
      password: value,
    },
  });
};
}

export default ForgetPassword