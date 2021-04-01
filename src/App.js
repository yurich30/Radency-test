import React from 'react'
import CSVReader from 'react-csv-reader';
import {parse} from 'papaparse'
import './App.css';

function App() {

	const [workers, setWorkers] = React.useState([])
	console.log(workers);
	
	const parseOptions = {
		header: true,
		dynamicTyping: true,
		skipEmptyLines: true,
		transformHeader: header =>
		  header
			.toLowerCase()
			.replace(/\W/g, '_')
			.slice()
	  }

  return (
    <div className="App">
		<div>
			<h1 className="App">Import Workers</h1>
			<div className="imp">
				<CSVReader  parserOptions={parseOptions} onFileLoaded={(data) => setWorkers( prev => [...prev, ...data] )} />
			</div>
		</div>
		<div
			onDragOver={(e) => {
				e.preventDefault()
			}}
			onDrop={(e) => {
				e.preventDefault();
				Array.from(e.dataTransfer.files)
					.filter(file => file.type === 'text/csv')
					.forEach( async (file) => {
						const text = await file.text();
						let result = parse(text, 
							{header: true, transformHeader: header =>
								header
								.toLowerCase()
								.replace(/\W/g, '_')
								.slice()
							})
						result = JSON.parse(JSON.stringify(result).replace(/\s(?=\w+":)/g, "").toLowerCase());
						console.log(result)
						setWorkers( prev => [...prev, ...result.data] )
					})
				}}>
			DROP .CSV FILE HERE</div>
    </div>
  );
}

export default App;
