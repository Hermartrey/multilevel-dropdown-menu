import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home';
import About from './routes/About';
import WebDesign from './routes/WebDesign';
import Seo from './routes/SEO';
import Services from './routes/Services';
import Layout from './components/Layout'
import Frontend from './routes/Frontend';
import Php from './routes/PHP';
import Node from './routes/Node';
import AboutWho from './routes/AboutWho';
import OurValues from './routes/OurValues';
import WebDev from './routes/WebDev';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="services" index element={<Services/>} />
          <Route path="web-design" index element={<WebDesign/>} />
          <Route path="web-dev" index element={<WebDev/>} />
          <Route path="frontend" index element={<Frontend/>} />
          <Route path="node" index element={<Node/>} />
          <Route path="seo" index element={<Seo/>} />
          <Route path="php" index element={<Php/>} />
          <Route path="aboutwho" index element={<AboutWho/>} />
          <Route path="ourValues" index element={<OurValues/>} />
          <Route path="*" index element={<p>Not found!</p>} />
        </Route>
      </Routes>
    </>
  )
}

export default App