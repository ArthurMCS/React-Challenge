const getDocs = () => {
  const response = fetch('documents.json')
    .then((res) => res.json())
    .then((json) => json.documents);
  return response;
};

export default getDocs;
