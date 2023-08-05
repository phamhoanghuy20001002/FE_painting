import Footer from "./component/Footer";
import Header from "./component/Header";
import AppRouter from "./router/AppRouter";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import ModalAddNew from "./component/modal/modal";
function App() {
  return (
    <>
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
    </>
  );
}

export default App;
