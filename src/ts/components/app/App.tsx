import React from 'react';
import { Button } from 'antd';

import 'antd/dist/antd.css';
import './index.scss';

function App(): JSX.Element {
  return (
    <div className="app">
      <Button type="primary">Create awesome app!</Button>
    </div>
  );
}

export default App;
