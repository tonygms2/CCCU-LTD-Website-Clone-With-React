import { Route, Routes } from "react-router-dom";
import Home from "component/pages/Home";
import Services from "component/pages/Services";
import Loans from "component/pages/Loans";
import Projects from "component/pages/Projects";
import DebitCard from "component/pages/DebitCard";
import Deposits from "component/pages/Deposits";
import Footer from "component/_partials/Footer/Footer";
import Career from "component/pages/Career";
import About from "component/pages/About";
import Notice from "component/pages/Notice";
import FAQ from "component/pages/FAQ";
import Contact from "component/pages/Contact";
import History from "component/_partials/About/History";
import FoundersFullProfile from "component/_partials/About/FoundersFullProfile";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/loans" element={<Loans />}></Route>
        <Route path="/projects" element={<Projects />} />
        <Route path="/card" element={<DebitCard />} />
        <Route path="/deposits" element={<Deposits />} />
        <Route path="/career" element={<Career />} />
        <Route path="/about" element={<About />}>
          <Route index element={<History />} />
          <Route path="founders-profile" element={<FoundersFullProfile/>}/>
          <Route path="our-story" element={<History/>}/>
        </Route>
        <Route path="/notice" element={<Notice />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
      <Footer />
      {/* <Header />
      <Sidebar/>
      <Banner bannerText={bannerText} />
      <Content /> */}
    </div>
  );
}


export default App;
