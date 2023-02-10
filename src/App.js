// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/head/Header";
import Programs from "./components/programs/Programs";
import Members from "./components/member/Members";
import Classes from "./components/classes/Classes";
import Trainers from "./components/trainers/Trainers";
import Form from "./components/form/Form";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Programs />
      <Members />
      <Classes />
      <Trainers />
      <Form />
    </>
  );
}

export default App;
