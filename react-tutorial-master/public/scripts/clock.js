function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	date: this.handleDate()
    };
  }
	
	//组件渲染完成后执行
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
	//组件被移除时执行
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  
  handleDate() {
  	if(this.props.increase) {
  		//console.log(1);
  		return new Date(new Date().valueOf() + this.props.increase*1000);
  	}else{
  		return new Date();
  	}
  }

  tick() {
    this.setState({
      date: this.handleDate()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Clock increase="100" />
      <Clock increase="-50" />
      <Clock />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
