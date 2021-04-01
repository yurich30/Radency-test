import React from 'react'
import CSVReader from 'react-csv-reader';
import {parse} from 'papaparse'
import './App.css';
import Table from './components/Table';

function App() {

	const [workers, setWorkers] = React.useState([])
	const [highlited, setHighlited] = React.useState(false);
	console.log(workers);
	
	const parseOptions = {
		header: true,
		dynamicTyping: true,
		skipEmptyLines: true,
		transformHeader: header =>
		  header
			.toLowerCase()
			.replace(/\W/g, '')
			.slice()
	}
	
  return (
    <div className="App">
		<div>
			<h1 className="App">Import Workers</h1>
			<div className="imp">
				<CSVReader  parserOptions={parseOptions} onFileLoaded={(data) => setWorkers(prev => [...prev, ...data] )} />
			</div>
		</div>
		<div
			className={highlited ? "active" : "unactive"}
			onDragEnter={
				() => {setHighlited(true)}
			}
			onDragLeave={() => {setHighlited(false)}}
			onDragOver={(e) => {
				e.preventDefault()
			}}
			onDrop={(e) => {
				setHighlited(false)
				e.preventDefault();
				Array.from(e.dataTransfer.files)
					.filter(file => file.type === 'text/csv')
					.forEach( async (file) => {
						const text = await file.text();
						let result = parse(text, 
							{header: true, transformHeader: header =>
								header
								.toLowerCase()
								.replace(/\W/g, '')
								.slice()
							})
						console.log((result));
						setWorkers( prev => [...prev, ...result.data] )
					})
				}}>
			DROP .CSV FILE HERE</div>
			<Table workers={workers}/>
    </div>
  );
}

export default App;
