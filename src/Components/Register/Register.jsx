import { useFormik } from "formik";
import axios from "axios";
import  $  from "jquery";
import { useNavigate } from "react-router-dom";

export default function Register(){
    let users ={
        name:"",
        email:"",
        phone:"",
        password:"",
        repassword:"",
    };
    const navigate = useNavigate();

    async function registerNewUser(obj) {
        try {
            let { data } = await axios.post('https://jsonplaceholder.typicode.com/users', obj);
            console.log("Success:", data);
            if(data.id){
                $('.succMsg').fadeIn(2000 ,function(){
                    navigate('/Login');
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
            registerNewUser( values );
        },
        validate: function(values){
            let errors = {}
            if(values.name.length <3 || values.name.length > 50){
                errors.name = "Name Must be more than 3 and less than 16 characters";
            }
            if(!values.email.includes('@')||! values.email.includes('.')){
                errors.email = "Email must be valid";
            }
            if (! values.phone.match( /^(02)?01[0125][0-9]{8}$/ )){
                errors.phone = "Phone Must be Egyptian Number";
            }
            if (values.password.length <6 || values.password.length >15){
                errors.password = "Password must be from 6 to 15 character only.";
            }
            if (values.password !== values.repassword){
                errors.repassword = "Password and RePassword not mathcing";
            }
            return errors;
        }
    });
    return <>
    <div className="container py-5">
    <h2>Registeration form</h2>

    <div style={{'display':'none'}} className="alert errMsg alert-danger text-center">
        <span>Email already in use</span>
    </div>

    <div style={{'display':'none'}} className="alert succMsg alert-success text-center">
        <span>Congratualtions</span>
    </div>
        <form onSubmit={formik.handleSubmit} action="">
            {/* USER NAME  */}
            <input 
                onBlur={formik.handleBlur}
                onChange={formik.handleChange} 
                value={formik.values.name} 
                type="text" 
                name="name"
                placeholder="Name" 
                className="form-control mt-2" 
                id="name" />
            {formik.errors.name && formik.touched.name? <div className="alert alert-danger text-center">{formik.errors.name} </div> :''}
            
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

            {/* USER PHONE */}
            <input 
                onBlur={formik.handleBlur}
                onChange={formik.handleChange} 
                value={formik.values.phone} 
                type="tel" 
                name="phone"
                placeholder="Phone" 
                className="form-control mt-2"
                id="phone" />
                {formik.errors.phone && formik.touched.phone? <div className="alert alert-danger text-center">{formik.errors.phone} </div> : ''}
    
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
            
            {/* USER RePassword */}
            <input 
                onBlur={formik.handleBlur}
                onChange={formik.handleChange} 
                value={formik.values.repassword} 
                type="password" 
                name="repassword"
                placeholder="RePassword" 
                className="form-control mt-2" 
                id="repassword" />
            {formik.errors.repassword && formik.touched.repassword? <div className="alert alert-danger text-center">{formik.errors.repassword} </div> : ''}
          
            <button type="submit" className="btn fw-bold btn-outline-primary btn-lg mt-4">Register</button>
        </form>
    </div>
    </>
}