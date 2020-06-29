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
  login: {
    display: "flex",
    flexDirection: "column",
    width: "350px",
    height: "300px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20px",
    backgroundColor: "#eeeff1",
  },
  loginButton: {
    backgroundColor: "#1bbc9b",
    width: "250px",
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
  signUpHandler = () => {
    this.props.history.push(`/signup`);
  };
  render() {
    return (
      <div className={this.props.classes.content}>
        <div className={this.props.classes.login}>
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

              return errors;
            }}
            onSubmit={() => {
              this.props.history.push(`/dashboard/my-notes`);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
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

                <div className={this.props.classes.buttonFeild}>
                  <Button type="primary" className={this.props.classes.button}>
                    Forgot-Password
                  </Button>
                  |
                  <Button
                    type="primary"
                    className={this.props.classes.button}
                    onClick={this.signUpHandler}
                  >
                    Signup
                  </Button>
                </div>

                <div>
                  <Button
                    className={this.props.classes.loginButton}
                    type="primary"
                  >
                    Login
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
