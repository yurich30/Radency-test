import React from 'react'
import CSVReader from 'react-csv-reader';
import './App.css';

function App() {

	const [workers, setWorkers] = React.useState([])
	console.log(workers);

  return (
    <div className="App">
		<div>
			<h1 className="App">Import Workers</h1>
			<div className="imp">
				<CSVReader onFileLoaded={(data) => setWorkers( prev => [...prev, ...data] )} />
			</div>
		</div>
    </div>
  );
}

export default App;
