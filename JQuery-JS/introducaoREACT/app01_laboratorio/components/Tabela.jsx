import React from "react";
import data_json from '../data.json';

function Tabela() {
    let data = data_json.map((info) => {
        return (
            <tr>
                <td>{
                    info.id
                }</td>
                <td>{
                    info.name
                }</td>
                <td>{
                    info.city
                }</td>
            </tr>
        )
    })
    return data
}

export default Tabela;
