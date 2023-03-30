import "./App.css";

import Sidebar from "./Components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutUs, OurAim, OurVision,  CanonicalBooks1, ChurchMusicHistory1, Holidays1} from "./Pages/Books";
import Home from "./Components/Home/Home";
import {
  Services,
  ServicesOne,
  ServicesTwo,
  ServicesThree,
} from "./Pages/Audios";
import { Events, EventsOne, EventsTwo } from "./Pages/Bible";
import Contact from "./Pages/History";
import Support from "./Pages/Mass";
import { useState } from "react";
import Songs from "./Navigation/Song/Songs";
import H0 from "./Pages/History/H0";
import H1 from "./Pages/History/H1";
import H2 from "./Pages/History/H2";
import H3 from "./Pages/History/H3";
import H4 from "./Pages/History/H4";
import D0 from "./Pages/Doctrine/D0";
import D1 from "./Pages/Doctrine/D1";
import D2 from "./Pages/Doctrine/D2";
import PhotoGallary from "./Navigation/Gallary/photoGallary";
import Contact1 from "./Pages/Contact/Contact";
import { Calender } from "./Pages/Calendar/Calendar";
import LinkSS from "./Pages/Links/Links";
import ForKids from "./Pages/History";
import Holiday from "./Pages/Holiday";



function App() {
  const [home, setHome] = useState(true);
  return (
    <>
      <Router>
        {home ? 
        <>
          <Routes>
            <Route path="/" element={<Home renderH={setHome}/>} />
            <Route path="/songs" element={<Songs />} />
            <Route path="/photogallary" element={<PhotoGallary />}/>
            <Route path="/links" element={<LinkSS />} />
            <Route path="/contact" element={<Contact1 />} />
            <Route path="/calender" element={<Calender />} />
            <Route path="/videos" element={<Holiday />} />
          </Routes>
          
        </>
        : 
        <Sidebar renderH={setHome} />}
        <Routes>
        <Route path="/sidebar/" element={<Sidebar renderH={setHome} />} />
          <Route path="/sidebar/books" element={<AboutUs />} />
          <Route path="/sidebar/books/church-history" element={<OurAim />} />
          <Route path="/sidebar/books/dogma-doctrine" element={<OurVision />} />
          <Route path="/sidebar/books/church-music-history" element={<ChurchMusicHistory1 />} />
          <Route path="/sidebar/books/conical-books" element={<CanonicalBooks1 />} />
          <Route path="/sidebar/books/holidays" element={<Holidays1 />} />

          <Route path="/sidebar/references" element={<Services />} />
          <Route path="/sidebar/services/services1" element={<ServicesOne />} />
          <Route path="/sidebar/services/services2" element={<ServicesTwo />} />
          <Route
            path="/sidebar/services/services3"
            element={<ServicesThree />}
          />
          <Route path="/sidebar/contact" element={<ForKids />} />
          <Route path="/sidebar/events" element={<Events />} />
          <Route path="/sidebar/events/events1" element={<EventsOne />} />
          <Route path="/sidebar/events/events2" element={<EventsTwo />} />
          <Route path="/sidebar/support" element={<Support />} />
          <Route path="/historybooks/H0" element={<H0 />}/>
          <Route path="/historybooks/H1" element={<H1 />}/>
          <Route path="/historybooks/H2" element={<H2 />}/>
          <Route path="/historybooks/H3" element={<H3 />}/>
          <Route path="/historybooks/H4" element={<H4 />}/>
          <Route path="/dogmabooks/D0" element={<D0 />}/>
          <Route path="/dogmabooks/D1" element={<D1 />}/>
          <Route path="/dogmabooks/D2" element={<D2 />}/>

        </Routes>
      </Router>
    </>
  );
}

export default App;
