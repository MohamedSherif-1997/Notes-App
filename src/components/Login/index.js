import React from "react";
import { Formik } from "formik";

import { withStyles, Button, InputAdornment } from "@material-ui/core";
import LockRoundedIcon from "@material-ui/icons/LockRounded";

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
    width: "30%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20px",
    backgroundColor: "#eeeff1",
  },
  button: {
    backgroundColor: "#1bbc9b",
    width: "300px",
    height: "20x",
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
};

const Login = (props) => (
  <div className={props.classes.content}>
    <div className={props.classes.login}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} className={props.classes.form}>
            <div className={props.classes.formFeild}>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className={props.classes.inputFeild}
                placeholder="Enter Email"
              />

              <div className={props.classes.error}>
                {errors.email && touched.email && errors.email}
              </div>
            </div>
            <div className={props.classes.formFeild}>
              <input
                startAdornment={
                  <InputAdornment position="start">
                    <LockRoundedIcon />
                  </InputAdornment>
                }
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className={props.classes.inputFeild}
              />
              <div className={props.classes.error}>
                {errors.password && touched.password && errors.password}
              </div>
            </div>
            <div className={props.classes.formFeild}>
              <Button
                className={props.classes.button}
                type="primary"
                disabled={isSubmitting}
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

export default withStyles(styles)(Login);
