import { FC } from 'react'
import { DatePicker } from 'antd';
import ErrorBoundry from '../error/ErrorBoundry';

const App: FC = () => {
  return (
    <ErrorBoundry>
      App
      <DatePicker />
    </ErrorBoundry>
  )
}

export default App;
