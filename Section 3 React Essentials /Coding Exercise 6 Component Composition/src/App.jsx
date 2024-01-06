import Card from './Card';

function App() {
  return (
    <div id="app">
      <h1>Available Experts</h1>
      <Card name="Anthony Blake">
        <p>
          Blake is a professor of Computer Science at the University of
          Illinois.
        </p>
        <p>
          <a href="mailto:blake@example.com">Email Anthony</a>
        </p>
      </Card>

      <Card name="Nipun Kharuehapaisarn">
        <p>
          Nipun is a Digital Engineering student of Sirindhron International Institute of Technology (SIIT) at Thammasat University.
        </p>
        <p>
          <a href="mailto:nipunk0258@gmail.com">Email Nipun</a> {/* Corrected email link */}
        </p>
      </Card>
    </div>
  );
}

export default App;