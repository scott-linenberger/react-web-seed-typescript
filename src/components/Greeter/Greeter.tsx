import * as React from 'react';

/* style */
require('./Greeter.scss');

export interface Props {
  name:string,
}

class Greeter extends React.Component<Props, any> {
  constructor(props:Props) {
    super(props);
  }

  render():JSX.Element {
    return (
      <div className='greeter'>
        <h2>Greetings:</h2>
        <span className='username'>{this.props.name}</span>
      </div>
    );
  }
}

export default Greeter;