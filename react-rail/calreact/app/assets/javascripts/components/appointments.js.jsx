var Appointments = createReactClass({
  propTypes: {
    greeting: PropTypes.string
  },

  render: function() {
    return (
      <div>
        <div>Appointments: {this.props.greeting}</div>
      </div>
    );
  }
});
