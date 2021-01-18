import { Card, CardContent } from '@material-ui/core';
import { Handle } from 'react-flow-renderer';

export const InputNode = ({ data }) => (
    <Card>
      <CardContent>
        <div>
          <strong>{data.label}</strong>
        </div>
      </CardContent>
      <Handle
        type="source"
        position="right"
        id="b"
        style={{ background: '#555' }}
      />
    </Card>
  );