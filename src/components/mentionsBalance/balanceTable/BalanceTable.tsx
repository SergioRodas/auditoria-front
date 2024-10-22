import React from 'react'
import {Table} from "./styles.tsx";
import {TotalMentionsResponse} from '../../../interfaces/MentionsBalance.ts';

interface BalanceTableProps {
    data: TotalMentionsResponse | null;
}

const BalanceTable = ({data}: BalanceTableProps) => {
    const mentions = data?.TotalMentionsCountResolver.menciones || [];
    const totalMentions = data?.TotalMentionsCountResolver.totalMentions || undefined;
    return (
        <Table>
            <table className="table table-sm">
                <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col" className='candidate-size'><span
                        className="candidate-1">{mentions[0]?.Actor.toUpperCase()}</span></th>
                    <th scope="col" className='candidate-size'><span
                        className="candidate-2">{mentions[1]?.Actor.toUpperCase()}</span></th>
                    <th scope="col" className='candidate-size'><span
                        className="candidate-3">{mentions[2]?.Actor.toUpperCase()}</span></th>
                    <th scope="col" className='th-width-total'>TOTAL</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row" className="thead-data">RADIO</th>
                    <td className="candidate-1">{mentions[0]?.Radio}</td>
                    <td className="candidate-2">{mentions[1]?.Radio}</td>
                    <td className="candidate-3">{mentions[2]?.Radio}</td>
                    <td>{totalMentions?.TotalRadio}</td>
                </tr>
                <tr>
                    <th scope="row" className="thead-data">TELEVISIÓN</th>
                    <td className="candidate-1">{mentions[0]?.Television}</td>
                    <td className="candidate-2">{mentions[1]?.Television}</td>
                    <td className="candidate-3">{mentions[2]?.Television}</td>
                    <td>{totalMentions?.TotalTelevision}</td>
                </tr>
                <tr>
                    <th scope="row" className="thead-data">PERIÓDICOS</th>
                    <td className="candidate-1">{mentions[0]?.Periodico}</td>
                    <td className="candidate-2">{mentions[1]?.Periodico}</td>
                    <td className="candidate-3">{mentions[2]?.Periodico}</td>
                    <td>{totalMentions?.TotalPeriodico}</td>
                </tr>
                <tr>
                    <th scope="row" className="thead-data">TOTAL</th>
                    <td className="td-data-candidate-1">{mentions[0]?.Total}</td>
                    <td className="td-data-candidate-2">{mentions[1]?.Total}</td>
                    <td className="td-data-candidate-3">{mentions[2]?.Total}</td>
                    <td className="td-data">{totalMentions?.TotalMedios}</td>
                </tr>
                </tbody>
            </table>
        </Table>
    )
}

export default BalanceTable