import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { useCustomState } from "./stateManagement/useCustomState";
import PhoneNumberForm from "./components/phoneNumberForm/PhoneNumberForm";
import EmailForm from "./components/emailForm/EmailForm";
import NameForm from "./components/nameForm/NameForm";
import SalaryForm from "./components/salaryForm/SalaryForm";
import Summary from "./components/summary/Summary";

function App() {
  const { Provider } = useCustomState();

  return (
    <Provider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<NameForm />} />
            <Route path="/email" element={<EmailForm />} />
            <Route path="/phone-number" element={<PhoneNumberForm />} />
            <Route path="/salary" element={<SalaryForm />} />
            <Route path="/summary" element={<Summary />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
