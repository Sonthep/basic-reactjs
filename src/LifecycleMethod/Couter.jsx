import  { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    console.log('Component mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component updated');
    if (prevState.count !== this.state.count) {
      console.log('Count updated:', this.state.count);
    }
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  decrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  }

  render() {
    const { count } = this.state;
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-4">Counter</h1>
          <div className="flex items-center">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
              onClick={this.decrementCount}
            >
              -
            </button>
            <span className="text-2xl font-bold">{count}</span>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md ml-2"
              onClick={this.incrementCount}
            >
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;