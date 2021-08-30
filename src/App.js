import Lost from './lost';
import ComingSoon from './comingSoon';
import './App.css';

function App() {
  return (
    <div className="App">
      <ComingSoon/>
      <script src="/__/firebase/8.8.0/firebase-app.js"></script>
      <script src="/__/firebase/8.8.0/firebase-analytics.js"></script>
      <script src="/__/firebase/init.js"></script>
    </div>

  );
}

export default App;
