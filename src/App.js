import './App.css';
import Document from './component/Document';
import FAQ from './component/FQA';
import HomeBox from './component/HomeBox';
import Navbar from './component/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <HomeBox/>
    <Document/>
    <FAQ/>
    </>
  );
}

export default App;