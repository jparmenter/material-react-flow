import { Card, CardContent } from '@material-ui/core';
import { Handle } from 'react-flow-renderer';

export const ColorSelectorNode = ({ data }) => (
    <Card>
      <Handle
        type="target"
        position="left"
        style={{ background: '#555' }}
        onConnect={(params) => console.log('handle onConnect', params)}
      />
      <CardContent>
        <div>
          Custom Color Picker Node: <strong>{data.color}</strong>
        </div>
        <input
          className="nodrag"
          type="color"
          onChange={data.onChange}
          defaultValue={data.color}
        />
      </CardContent>
      <Handle
        type="source"
        position="right"
        id="a"
        style={{ top: 10, background: '#555' }}
      />
      <Handle
        type="source"
        position="right"
        id="b"
        style={{ bottom: 10, top: 'auto', background: '#555' }}
      />
    </Card>
  );