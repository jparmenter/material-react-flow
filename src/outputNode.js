import { Card, CardContent } from '@material-ui/core';
import { Handle } from 'react-flow-renderer';

export const OutputNode = ({ data }) => (
    <Card>
      <Handle
        type="target"
        position="left"
        style={{ background: '#555' }}
        onConnect={(params) => console.log('handle onConnect', params)}
      />
      <CardContent>
        <div>
         <strong>{data.label}</strong>
        </div>
      </CardContent>
    </Card>
  );