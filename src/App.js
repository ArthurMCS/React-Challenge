import './App.css';
import getDocs from './services/docApi';
import { useEffect, useState } from 'react';
import Card from './components/Card'


function App() {
  const [documents, setDocuments] = useState([])
  
  useEffect(() => {
     getDocs()
     .then((e) => setDocuments(e))
  }, [documents])

  return (
    <div className="App">
     {documents.map((doc, index) => <Card doc={doc} key={index} />)}
    </div>
  );
}

export default App;
