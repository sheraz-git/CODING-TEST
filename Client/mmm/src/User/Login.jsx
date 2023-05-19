import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch} from "react-redux";
import { userlogin } from "../redux/action/index";
import { useNavigate } from "react-router-dom";
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email must required"),
  password: Yup.string().min(3).max(24).required("Password must required"),
});
function Login() {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await dispatch(userlogin(values.email, values.password));
        formik.resetForm();
        navigate("/UserDashboard");
      } catch (error) {
        console.log("Login failed:", error);
      }
    },
  });
  const {handleChange,handleBlur,values,errors,touched,isValid,handleSubmit} = formik;
  return (
    <div className="loginpage">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
            type="Password"
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
        <button className="buttons" type="submit" disabled={!isValid}>Login</button>
      </form>
    </div>
  );
}
export default Login;
