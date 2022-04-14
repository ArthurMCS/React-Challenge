import './App.css';
import getDocs from './services/docApi';
import { useEffect, useState } from 'react';
import Card from './components/Card'
import CardContainer from './stledComponents/CardContainer';


function App() {
  const [documents, setDocuments] = useState([])
  const [currentPage, setCurrentPage] = useState(1)


  const pages = Math.ceil(documents.length / 7)
  const startIndex = currentPage * 7;
  const endIndex = startIndex + 7;
  const DocsOnPage = documents.slice(startIndex, endIndex);
  
  useEffect(() => {
     getDocs()
     .then((e) => setDocuments(e))
  }, [documents])

  return (
    <div className="App">
       <div>
        Pages: 
        {Array
        .from(Array(pages -1))
        .map((_n, index ) => (

        <button 
        value={index + 1} 
        onClick={(e) => setCurrentPage(e.target.value)}>
          {index + 1}
        </button>) )}
      </div>
      <CardContainer>
     {DocsOnPage.map((doc, index) => <Card doc={doc} key={index} />)}
      </CardContainer>
    </div>
  );
}

export default App;
