import React, { Component } from "react";
import { Formik } from "formik";

import { withStyles, Button } from "@material-ui/core";

const styles = {
  content: {
    width: "100%",
    height: "85vh",
    textAlign: "center",
    color: "blue",
    backgroundColor: "#1bbb9c",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  signup: {
    display: "flex",
    flexDirection: "column",
    width: "30%",
    height: "60%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20px",
    backgroundColor: "#eeeff1",
  },
  signupButton: {
    backgroundColor: "#1bbc9b",
    width: "300px",
    height: "40px",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "10px",
    padding: "10px",
    fontSize: "15px",
    "&:hover": {
      backgroundColor: "red",
    },
  },
  inputFeild: {
    width: "250px",
    height: "20px",
    borderRadius: "10px",
    padding: "10px",
    border: "none",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formFeild: {
    padding: "10px",
  },
  error: {
    color: "red",
    fontSize: "15px",
    paddingTop: "10px",
  },
  button: {
    disply: "block",
    border: "none",
    textDecoration: "underline",
    fontSize: "10px",
    color: "black",
  },
  buttonFeild: {
    paddingBottom: "10px",
    color: "black",
  },
};

class Login extends Component {
  signupHandler = () => {
    this.props.history.push(`/login`);
  };
  render() {
    return (
      <div className={this.props.classes.content}>
        <div className={this.props.classes.signup}>
          <Formik
            initialValues={{ email: "", password: "", userName: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Email Id Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              if (!values.password) {
                errors.password = "Password Required";
              }
              if (!values.userName) {
                errors.userName = "Username Required";
              }
              return errors;
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,

              isSubmitting,
            }) => (
              <form className={this.props.classes.form}>
                <div className={this.props.classes.formFeild}>
                  <input
                    type="userName"
                    name="userName"
                    placeholder="User Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.userName}
                    className={this.props.classes.inputFeild}
                  />
                  <div className={this.props.classes.error}>
                    {errors.userName && touched.userName && errors.userName}
                  </div>
                </div>

                <div className={this.props.classes.formFeild}>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className={this.props.classes.inputFeild}
                    placeholder="Enter Email"
                  />

                  <div className={this.props.classes.error}>
                    {errors.email && touched.email && errors.email}
                  </div>
                </div>
                <div className={this.props.classes.formFeild}>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    className={this.props.classes.inputFeild}
                  />
                  <div className={this.props.classes.error}>
                    {errors.password && touched.password && errors.password}
                  </div>
                </div>

                <div>
                  <Button
                    className={this.props.classes.signupButton}
                    type="primary"
                    disabled={isSubmitting}
                    onClick={this.signupHandler}
                  >
                    SignUp
                  </Button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Login);
