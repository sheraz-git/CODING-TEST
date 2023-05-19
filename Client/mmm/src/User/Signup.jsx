import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { usersignup } from "../redux/action/index";
import { Link } from "react-router-dom";
const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password should be at least 6 characters")
    .required("Password is required"),
});
function Signup() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(
        usersignup(
          values.firstName,
          values.lastName,
          values.email,
          values.password
        )
      );
      formik.resetForm();
    },
  });
  const {
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    isValid,
    handleSubmit,
  } = formik;

  return (
    <div className="loginpage">
      <button className="button"><Link to="/Login"> GO TO LOGIN</Link></button>
      <div>
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="firstName"
              className="input"
              autoComplete="off"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span className="input-highlight"></span>
            <label>firstName</label>
            {errors.firstName && touched.firstName ? (
              <p className="form-error">{errors.firstName}</p>
            ) : null}
          </div>
          <div className="input-group">
            <input
              type="text"
              name="lastName"
              className="input"
              autoComplete="off"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span className="input-highlight"></span>
            <label>lastName</label>
            {errors.lastName && touched.lastName ? (
              <p className="form-error">{errors.lastName}</p>
            ) : null}
          </div>
          <div className="input-group">
            <input
              type="text"
              name="email"
              className="input"
              autoComplete="off"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span className="input-highlight"></span>
            <label>email</label>
            {errors.email && touched.email ? (
              <p className="form-error">{errors.email}</p>
            ) : null}
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              className="input"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span className="input-highlight"></span>
            <label>password</label>
            {errors.password && touched.password ? (
              <p className="form-error">{errors.password}</p>
            ) : null}
          </div>
          <button className="buttons" type="submit" disabled={!isValid}>
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}
export default Signup;
