import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import { baseURL, config, sortByCreatedTime } from "./services";
import "./App.css";

function App() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      // const resp = await axios.get(baseURL, config);
      // setRecords(sortByCreatedTime(resp.data.records))
    };
    fetchRecords();
  }, []);

  return (
    <div className="App">
      <Header />
      <section id="adlai">
        <div>ADLAI is a Chicago-based producer and artist.</div>
      </section>
      <section id="music-container">
        <section id="music">
          <article id="music-1">FADEAWAY (prod. ADLAI) OUT NOW</article>
          <article id="music-2">BANDCAMP</article>
          <article id="music-3">SPOTIFY</article>
        </section>
        <section id="music-sidebar">
          <div>MUSIC</div>
        </section>
      </section>
      <main id="mondrian-container">
        <aside>GALLERY</aside>
        <section id="mondrian">
          <article id="mondrian-1"></article>
          <article id="mondrian-2"></article>
          <article id="mondrian-3"></article>
          <article id="mondrian-4"></article>
          <article id="mondrian-5"></article>
          <article id="mondrian-6"></article>
          <article id="mondrian-7"></article>
          <article id="mondrian-8"></article>
          <article id="mondrian-9"></article>
          <article id="mondrian-10"></article>
          <article id="mondrian-11"></article>
          <article id="mondrian-12"></article>
          <article id="mondrian-13"></article>
          <article id="mondrian-14"></article>
          <article id="mondrian-15"></article>
          <article id="mondrian-16"></article>
          <article id="mondrian-17"></article>
        </section>
      </main>
    </div>
  );
}

export default App;
