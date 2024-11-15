import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // UseEffect hook to fetch data from the Node.js server when the component mounts
  useEffect(() => {
    // Make a GET request to the Node.js API endpoint
    fetch('https://portal-nodejs-server-g8bnecdacgf3eddb.centralus-01.azurewebsites.net/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  // Render the component based on loading, data, or error state
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Data from Node.js Server:</h1>
      <p>{data.message}</p>
    </div>
  );
};

export default App;
