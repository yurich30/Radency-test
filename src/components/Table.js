import moment from 'moment';
import './Table.css'

const Table = (props) => {

    const workers = props.workers;

    function getDuplicatedEmails () {
		const duplicatedEmailsById = {};
		const isEmailDuplicated = (worker, compareWorker) => worker.email.toLowerCase() === compareWorker.email.toLowerCase()
		const isIndexDuplicated = (index, compareIndex) =>  index < compareIndex
		workers.forEach( (worker, index) => workers.forEach((compareWorker, compareWorkerIndex) => {
			if (worker.id !== compareWorker.id && isEmailDuplicated(worker, compareWorker) && !duplicatedEmailsById[worker.id] && isIndexDuplicated(index, compareWorkerIndex)){
				duplicatedEmailsById[worker.id] = compareWorker.id;
			}
		}) )
		return duplicatedEmailsById
	}

    function getValidNumberFromString (str) {
		let number = parseFloat(str);
		let validNumber = number.toFixed(2)
		return validNumber
	}

    const regExpDate = /[0-9]{1,4}[-/]{1}[0-9]{1,2}[-/]{1}[0-9]{2,4}/gi
	let currentDate = parseFloat(moment().add(10, 'days').calendar());
	const format = "YYYY-MM-DD"
	let date = new Date();
	let dateTime = parseFloat(moment(date).format(format));

    return (
        <div>
            <table className="table">
                <tr>
                    <th>ID</th>
                    <th>Full Name</th>
                    <th>Phone</th>
                    <th>E-Mail</th>
                    <th>Age</th>
                    <th>Experience</th>
                    <th>Yearly Income</th>
                    <th>Has children</th>
                    <th>License states</th>
                    <th>Expiration Date</th>
                    <th>License number</th>
                    <th>Duplicate with</th>
                </tr>
                {workers.map( (worker) => 
                    <tr key={Object.keys(workers)}>
                        <td>{worker.id}</td>
                        <td>{worker.fullname}</td>
                        <td>{worker.phone}</td>
                        <td>{worker.email}</td>
                        <td className={worker.age < 21 || 0 ? "invalid" : ""}>{worker.age}</td>
                        <td className={worker.experience > worker.age || worker.experience <= 0 ? "invalid" : ""}>{worker.experience}</td>
                        <td className={worker.yearlyincome > 1000000 ? "invalid" : ""}>{getValidNumberFromString(worker.yearlyincome)}</td>
                        <td>{worker.haschildren ? "true" : "false"}</td>
                        <td>{worker.licensestates}</td>
                        <td className={regExpDate.test(worker.expirationdate) && parseFloat(worker.expirationdate) <= currentDate || parseFloat(worker.expirationdate) <= dateTime ? "" : "invalid"}>{worker.expirationdate}</td>
                        <td className={worker.licensenumber.length === 6 ? "" : "invalid"}>{worker.licensenumber}</td>
                        <td>{getDuplicatedEmails()[worker.id]}</td>
                    </tr>)}
            </table>
        </div>
    )
}

export default Table