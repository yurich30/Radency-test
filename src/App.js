import './App.css';

function App() {
  return (
    <div className="App">
		<div>
			<h1 className="App">Import Workers</h1>
			<div className="imp">
				<CSVReader onFileLoaded={(data, fileInfo) => console.dir(data, fileInfo)} />
			</div>
		</div>
    </div>
  );
}

export default App;
