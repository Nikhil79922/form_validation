import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

function App() {
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  async function delay(d) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  }

  const onSubmit = async (data) => {
    await delay(1);
    console.log(data);
    setSuccessMessageVisible(true); // Show success message when form is successfully submitted
  };

  const closeSuccessPopup = () => {
    setSuccessMessageVisible(false); // Close the success message
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center text-gray-700">Company Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="relative">
            <input
              placeholder="Username"
              type="text"
              {...register('Username', {
                required: { value: true, message: 'Field is required' },
                minLength: { value: 3, message: 'Min length is 3' },
                maxLength: { value: 10, message: 'Max length is 10' },
              })}
              className={`w-full px-4 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none ${errors.Username ? 'border-red-500' : ''}`}
            />
            {errors.Username && (
              <div className="mt-2 px-3 py-2 text-sm text-red-500 bg-red-100 border border-red-300 rounded-lg transition-opacity duration-300 animate-fade-in">
                {errors.Username.message}
              </div>
            )}
          </div>
          <div className="relative">
            <input
              placeholder="Password"
              type={showPassword ? 'text' : 'password'} // Toggle password visibility
              {...register('password', {
                required: { value: true, message: 'Field is required' },
                minLength: { value: 6, message: 'Min length is 6' },
                maxLength: { value: 12, message: 'Max length is 12' },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).+$/,
                  message: 'Password must contain uppercase, lowercase, number, and symbol.',
                },
              })}
              className={`w-full px-4 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none ${errors.password ? 'border-red-500' : ''}`}
            />
            {/* Lord Icon for toggling password visibility */}
            <lord-icon
               src="https://cdn.lordicon.com/knitbwfa.json"
               trigger="click"
               stroke="bold"
               state="hover-look-around"
               colors="primary:#000000,secondary:#848484,tertiary:#4f1091,quaternary:#4bb3fd,quinary:#f9c9c0,senary:#f24c00"
              style={{
                width: '25px',
                height: '25px',
                position: 'absolute',
                right: '8px',
                top: '7px',
                cursor: 'pointer',
              }}
              onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
            ></lord-icon>
            {errors.password && (
              <div className="mt-2 px-3 py-2 text-sm text-red-500 bg-red-100 border border-red-300 rounded-lg transition-opacity duration-300 animate-fade-in">
                {errors.password.message}
              </div>
            )}
          </div>
          <div className="flex items-center justify-center">
            {isSubmitting ? (
              <div>
                <lord-icon
                  src="https://cdn.lordicon.com/ktsahwvc.json"
                  trigger="loop"
                  state="loop-transparency"
                  style={{ width: '25px', height: '25px' }}
                ></lord-icon>
              </div>
            ) : (
              <input
                disabled={isSubmitting}
                type="submit"
                value="Submit"
                className="w-full px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              />
            )}
          </div>
        </form>
        <div className="text-sm text-center text-gray-500">
          <p>&copy; 2025 Company. All rights reserved.</p>
        </div>
      </div>
      {successMessageVisible && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl text-center text-green-500 font-semibold">Success!</h2>
            <p className="mt-2 text-center">Your login was successful.</p>
            <div className="mt-4 text-center">
              <button
                onClick={closeSuccessPopup}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default App;
