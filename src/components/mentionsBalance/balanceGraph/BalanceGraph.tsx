import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList } from 'recharts';
import { GraphContainer } from './styles';
import { BalanceGraphData } from '../../../interfaces/MentionsBalance';

interface BalanceGraphProps {
  data: BalanceGraphData[];
}

class BalanceGraph extends PureComponent<BalanceGraphProps> {
    render() {
      const { data } = this.props;
      return (
          <GraphContainer>
              <div className="graph-title">
                  Total de menciones por tendencia
              </div>
              <BarChart
                  width={700}
                  height={320}
                  data={data ? data : []}
                  margin={{
                      top: 30,
                      right: 30,
                      left: 20,
                      bottom: 5,
                  }}
              >
                  <CartesianGrid strokeDasharray="3 3"/>
                  <XAxis dataKey="name"/>
                  <YAxis/>
                  <Tooltip/>
                  <Legend/>
                  <Bar dataKey="Negativas" fill="#FF0000">
                      <LabelList dataKey="Negativas" position="top" />
                  </Bar>
                  <Bar dataKey="Neutras" fill="#A6A6A6">
                      <LabelList dataKey="Neutras" position="top" />
                  </Bar>
                  <Bar dataKey="Positivas" fill="#009999">
                      <LabelList dataKey="Positivas" position="top" />
                  </Bar>
              </BarChart>
          </GraphContainer>
      );
    }
}

export default BalanceGraph;
