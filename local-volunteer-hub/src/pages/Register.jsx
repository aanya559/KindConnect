// import React, { useState } from 'react';
// import './Register.css';
// import { Link } from 'react-router-dom';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     role: '',
//     orgName: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = e => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setErrors({ ...errors, [e.target.name]: '' }); // clear error
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.name.trim()) newErrors.name = 'Full name is required.';
//     if (!formData.email.includes('@')) newErrors.email = 'Invalid email.';
//     if (!formData.phone.match(/^\d{10}$/)) newErrors.phone = 'Phone must be 10 digits.';
//     if (!formData.role) newErrors.role = 'Role is required.';
//     if (formData.role === 'organizer' && !formData.orgName.trim())
//       newErrors.orgName = 'Organization name is required.';
//     if (formData.password.length < 6) newErrors.password = 'Password too short.';
//     if (formData.password !== formData.confirmPassword)
//       newErrors.confirmPassword = 'Passwords do not match.';
//     return newErrors;
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       alert('Registered Successfully!');
//       console.log(formData);
//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         role: '',
//         orgName: '',
//         password: '',
//         confirmPassword: '',
//       });
//     }
//   };

//   return (
//     <div className="register-page">
//       <div className="register-card">
//         <h2 className="register-title">Create Your Account</h2>
//         <form className="register-form" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//           {errors.name && <p className="error">{errors.name}</p>}

//           <input
//             type="email"
//             name="email"
//             placeholder="Email Address"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           {errors.email && <p className="error">{errors.email}</p>}

//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone Number"
//             value={formData.phone}
//             onChange={handleChange}
//           />
//           {errors.phone && <p className="error">{errors.phone}</p>}

//           <select name="role" value={formData.role} onChange={handleChange}>
//             <option value="">Select Role</option>
//             <option value="volunteer">Volunteer</option>
//             <option value="organizer">Organizer</option>
//           </select>
//           {errors.role && <p className="error">{errors.role}</p>}

//           {formData.role === 'organizer' && (
//             <>
//               <input
//                 type="text"
//                 name="orgName"
//                 placeholder="Organization Name"
//                 value={formData.orgName}
//                 onChange={handleChange}
//               />
//               {errors.orgName && <p className="error">{errors.orgName}</p>}
//             </>
//           )}

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//           {errors.password && <p className="error">{errors.password}</p>}

//           <input
//             type="password"
//             name="confirmPassword"
//             placeholder="Confirm Password"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//           />
//           {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

//           <button type="submit" className="register-btn">
//             Register
//           </button>
//         </form>

//         <p className="login-link">
//           Already have an account? <Link to="/login">Login here</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;
import React, { useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import { FaUser, FaEnvelope, FaPhone, FaLock, FaBuilding } from 'react-icons/fa';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    orgName: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required.';
    if (!formData.email.includes('@')) newErrors.email = 'Invalid email.';
    if (!formData.phone.match(/^\d{10}$/)) newErrors.phone = 'Phone must be 10 digits.';
    if (!formData.role) newErrors.role = 'Role is required.';
    if (formData.role === 'organizer' && !formData.orgName.trim())
      newErrors.orgName = 'Organization name is required.';
    if (formData.password.length < 6) newErrors.password = 'Password too short.';
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match.';
    return newErrors;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert('🎉 Registered Successfully!');
      console.log(formData);
      setFormData({
        name: '',
        email: '',
        phone: '',
        role: '',
        orgName: '',
        password: '',
        confirmPassword: '',
      });
    }
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <h2 className="register-title">Create Your Account</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <FaUser />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          {errors.name && <p className="error">{errors.name}</p>}

          <div className="input-group">
            <FaEnvelope />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          {errors.email && <p className="error">{errors.email}</p>}

          <div className="input-group">
            <FaPhone />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          {errors.phone && <p className="error">{errors.phone}</p>}

          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="">Select Role</option>
            <option value="volunteer">Volunteer</option>
            <option value="organizer">Organizer</option>
          </select>
          {errors.role && <p className="error">{errors.role}</p>}

          {formData.role === 'organizer' && (
            <>
              <div className="input-group">
                <FaBuilding />
                <input
                  type="text"
                  name="orgName"
                  placeholder="Organization Name"
                  value={formData.orgName}
                  onChange={handleChange}
                />
              </div>
              {errors.orgName && <p className="error">{errors.orgName}</p>}
            </>
          )}

          <div className="input-group">
            <FaLock />
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
            </span>
          </div>
          {errors.password && <p className="error">{errors.password}</p>}

          <div className="input-group">
            <FaLock />
            <input
              type={showPassword ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
            </span>
          </div>
          {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

          <button type="submit" className="register-btn">
            Register
          </button>
        </form>

        <p className="login-link">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
