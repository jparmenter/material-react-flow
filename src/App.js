import ReactFlow, { Background, MiniMap } from 'react-flow-renderer';
import { ColorSelectorNode } from './ColorSelectorNode';
import { InputNode } from './InputNode';
import { OutputNode } from './outputNode';

const App = () => {
  const nodeTypes = {
    input: InputNode,
    selectorNode: ColorSelectorNode,
    default: OutputNode,
    output: OutputNode,
  };
  const elements = [
    {
      id: '1',
      type: 'input',
      data: { label: 'An input node' },
      position: { x: 0, y: 50 },
      sourcePosition: 'right',
      style: {border: 'none', padding: 0}
    },
    {
      id: '2',
      type: 'selectorNode',
      data: { onChange: () => {}, color: '#1A192B' },
      style: {border: 'none', padding: 0},
      position: { x: 300, y: 50 },
    },
    {
      id: '3',
      type: 'output',
      data: { label: 'Output A' },
      position: { x: 650, y: 25 },
      targetPosition: 'left',
      style: {border: 'none', padding: 0}
    },
    {
      id: '4',
      type: 'output',
      data: { label: 'Output B' },
      position: { x: 650, y: 100 },
      targetPosition: 'left',
      style: { border: 'none', padding: 0}
    },
    {
      id: 'e1-2',
      source: '1',
      target: '2',
      animated: true,
      style: { stroke: '#fff' },
    },
    {
      id: 'e2a-3',
      source: '2',
      target: '3',
      sourceHandle: 'a',
      animated: true,
      style: { stroke: '#fff' },
    },
    {
      id: 'e2b-4',
      source: '2',
      target: '4',
      sourceHandle: 'b',
      animated: true,
      style: { stroke: '#fff' },
    },
  ];

  return (
    <div style={{ width: 1000, height: 1000, border: '1px solid #fff'}}>
      <ReactFlow elements={elements} nodeTypes={nodeTypes} >
        <Background/>
        <MiniMap/>
      </ReactFlow>
    </div>
  );
}

export default App;
