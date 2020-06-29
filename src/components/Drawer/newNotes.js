import React from "react";
import { Formik } from "formik";
import { Button, withStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const styles = {
  saveButton: {
    backgroundColor: "#1bbc9b",
    height: "25px",
    textAlign: "center",
    borderRadius: "10px",
    padding: "10px",
    fontSize: "15px",
    "&:hover": {
      backgroundColor: "red",
    },
  },
  resetButton: {
    backgroundColor: "#1bbc9b",
    height: "25px",
    textAlign: "center",
    borderRadius: "10px",
    padding: "10px",
    fontSize: "15px",
    "&:hover": {
      backgroundColor: "red",
    },
  },
  button: {
    display: "flex",
    justifyContent: "space-evenly",
  },
};

function NewNotes(props) {
  return (
    <Formik
      initialValues={{ title: "", note: "" }}
      onSubmit={(e) => {
        alert("created SuccesFully");
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit, handleReset }) => (
        <form>
          <div style={{ padding: "10px" }}>
            <TextField
              required
              name="title"
              id="title"
              label="Title"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="My Titile"
            />
          </div>
          <div style={{ padding: "10px" }}>
            <TextareaAutosize
              name="note"
              aria-label="minimum height"
              rowsMax={10}
              value={values.note}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Write your Note here!!...If you want you can expand this Note-pad"
            />
          </div>
          <div className={props.classes.button}>
            <Button
              type="reset"
              onClick={handleReset}
              className={props.classes.resetButton}
              disabled={
                values.title.length > 0 || values.note.length ? false : true
              }
            >
              Reset
            </Button>
            <Button
              type="submit"
              className={props.classes.saveButton}
              disabled={values.title.length > 0 ? false : true}
              onClick={handleSubmit}
            >
              Create
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
}

export default withStyles(styles)(NewNotes);
