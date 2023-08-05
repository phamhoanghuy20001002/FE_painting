import Footer from "./component/Footer";
import Header from "./component/Header";
import AppRouter from "./router/AppRouter";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import './App.css'
function App() {
  return (
    <div className='App'>
      <Header />
      <AppRouter />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
