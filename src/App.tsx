import "./App.css";
import { Otpfield } from "./components/Otpfield";

function App() {
  return (
    <>
      <div>Enter the verification code sent on info@gmail.com</div>
      <Otpfield />
      <div>Didn't recieve the code?</div>
      <button>Resend</button>
    </>
  );
}

export default App;
