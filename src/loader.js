var Loader = React.createClass({
  getInitialState: function() {
    return {percent: 0};
  },
  tick: function() {
    if (this.state.percent >= 100) { 
         clearInterval (this.interval);
    }
    else{
      this.setState({
        percent: this.state.percent + 1
      });
    }
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 50);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    var loaderElement;
    if(this.state.percent < 100){
      loaderElement = 
      <div style={loaderContainerStyle}>
        <div style={logoStyle}></div>
        <div style={percentStyle}>{this.state.percent}%</div>
      </div>
    }
    else{
      loaderElement=null;
    }

    return (
      <div>
        {loaderElement}
      </div>
    );
  }
});

ReactDOM.render(
  <Loader />, 
  document.getElementById('loader-point')
  );

var loaderContainerStyle={
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  minHeight: "100vh",
  background: "white"
};

var logoStyle={
  backgroundImage: 'url(assets/img/logo.png)',
  width: "150px",
  height:"150px"
};

var percentStyle = {
  fontSize: "6rem",
  color:"lightGrey",
  fontWeight: "100"
};




