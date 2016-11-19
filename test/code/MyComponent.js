import React from 'react';

export default class MyComponent extends React.Component {
  getLocals() {
    const { foo } = this.props;

    foo.map(x => x.hey);

    return { foo };
  }

  template({ foo }) {
    return <div>{foo}</div>;
  }
}
