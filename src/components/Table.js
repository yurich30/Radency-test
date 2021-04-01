const Table = (props) => {

    const workers = props.workers;

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
                        <td>{worker.age}</td>
                        <td>{worker.experience}</td>
                        <td>{worker.yearlyincome}</td>
                        <td>{worker.haschildren}</td>
                        <td>{worker.licensestates}</td>
                        <td>{worker.expirationdate}</td>
                        <td>{worker.licensenumber}</td>
                        <td></td>
                    </tr>)}
            </table>
        </div>
    )
}

export default Table