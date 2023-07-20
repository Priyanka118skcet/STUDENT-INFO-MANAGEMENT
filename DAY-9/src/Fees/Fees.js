import React from "react";
import './Fees.css';
 
const data = [
    { id: 1, Name:"Kyoko",Department:"CSE", phone:9234567890,TotalAmount:130000,Balance:30000 },
    { id: 2, Name:"Cayena",Department:" IT", phone:8763567890,TotalAmount:120000,Balance:20000 },
    { id: 3, Name:"Catherine",Department:"AIDS", phone:8904567890,TotalAmount:110000,Balance:10000 },
    { id: 4, Name:"Jin",Department:"CSE", phone:7234431890,TotalAmount:130000,Balance:30000 },
    { id: 5, Name:"Yotsuba",Department:"IT", phone:8234567890,TotalAmount:120000,Balance:20000 },
    { id: 6, Name:"Tatsuya",Department:"AIDS", phone:9064567890,TotalAmount:110000,Balance:10000 },
    { id: 7, Name:"Hinata",Department:"CSE", phone:1234892890,TotalAmount:130000,Balance:30000 },
    { id: 8, Name:"Miyuki",Department:"IT", phone:9434567890,TotalAmount:120000,Balance:20000 },
    { id: 9, Name:"Shiba",Department:"AIDS", phone:8934567890,TotalAmount:110000,Balance:10000 },
    
]
 
function Table() {
    return (
        <div className="fees">
        <div className="xyz">
        <h3>FEES MANAGEMENT SYSTEM</h3>
        </div>
            <table className="jh">
                <tr className="ui">
                    <th>Id</th>
                    <th>Name</th>
                    <th>Department</th>
                    <th>PhoneNumber</th>
                    <th>TotalAmount</th>
                    <th>Balance</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr className="ui" key={key}>
                            <td>{val.id}</td>
                            <td>{val.Name}</td>
                            <td>{val.Department}</td>
                            <td>{val.phone}</td>
                            <td>{val.TotalAmount}</td>
                            <td>{val.Balance}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
}
 
export default Table;