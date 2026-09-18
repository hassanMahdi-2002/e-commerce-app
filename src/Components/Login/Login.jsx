import { useFormik } from "formik";
import axios from "axios";
import  $  from "jquery";
import { useNavigate } from "react-router-dom";

export default function Login(){
    let users ={
        email:"",
        password:"",
    };
    const navigate = useNavigate();

    async function loginUser(obj) {
        try {
            let { data } = await axios.post('https://reqres.in/api/login', obj);
            console.log("Success:", data);
            if(data.token){
                localStorage.setItem("userToken", data.token);
                $('.succMsg').fadeIn(2000 ,function(){
                    navigate('/Home');
                });
            };
        }catch(error) {
            console.log("Error:", error.response?.data?.message || error.message);
            $('.errMsg').fadeIn(1000, function(){
                setTimeout(() => {
                    $('.errMsg').fadeOut(500);
                }, 3000);
            });
        };
    };
    let formik = useFormik({
        initialValues: users,
        onSubmit: function(values){
            console.log("sumbit...", values);
            loginUser( values );
        },
        validate: function(values){
            let errors = {}
            if(!values.email.includes('@')||! values.email.includes('.')){
                errors.email = "Email must be valid";
            }
            
            if (values.password.length <6 || values.password.length >15){
                errors.password = "Password must be from 6 to 15 character only.";
            }
            return errors;
        }
    });
    return <>
    <div className="container  py-5">
    <h2>Login form</h2>

    <div style={{'display':'none'}} className="alert errMsg alert-danger text-center">
        <span>Incorrect email or password</span>
    </div>

    <div style={{'display':'none'}} className="alert succMsg alert-success text-center">
        <span>Welcome back! Redirecting...</span>
    </div>
        <form onSubmit={formik.handleSubmit} action="">

            {/* USER EMAIL */}
            <input 
                onBlur={formik.handleBlur}
                onChange={formik.handleChange} 
                value={formik.values.email} 
                type="email" 
                name="email"
                placeholder="Email" 
                className="form-control mt-2" 
                id="email" />
            {formik.errors.email && formik.touched.email? <div className="alert alert-danger text-center">{formik.errors.email} </div> :''}

            {/* USER PASSWORD */}
            <input 
                onBlur={formik.handleBlur}
                onChange={formik.handleChange} 
                value={formik.values.password} 
                type="password" 
                name="password"
                placeholder="Password" 
                className="form-control mt-2" 
                id="password" />
            {formik.errors.password && formik.touched.password? <div className="alert alert-danger text-center">{formik.errors.password} </div> : ''}
            
            <button type="submit" className="btn fw-bold btn-outline-primary btn-lg mt-4 mb-5">Login</button>
        </form>
    </div>
    </>
}