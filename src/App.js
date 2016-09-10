import React, { Component } from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';

import AppBackground from './components/app/AppBackground';
import AppHeader from './components/app/AppHeader';
import AppMenu from './components/app/AppMenu';
import AppContent from './components/app/AppContent';
import AppLoader from './components/app/AppLoader';

import { fetchInitialData, changeMonth } from './data/actions';

const styles = {
  base: {
    position: 'relative',
  },

  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    height: '100vh',

    '@media (min-width: 720px)': {
      margin: '0 auto',
      width: '90vw',
      height: '95vh',
    },
  },
};

class App extends Component {
  constructor(props, context) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchInitialData();
  }

  componentWillReceiveProps(newProps) {
    const { currentMonth } = this.props;

    if ((currentMonth && newProps.currentMonth) && currentMonth.code !== newProps.currentMonth.code) {
      this.redirect(newProps.currentMonth.code);
    }

    if (newProps.location.pathname === '/' && currentMonth) {
      this.redirect(currentMonth.code);
    }
  }

  redirect(monthCode) {
    this.context.router.push(`/${monthCode}/balance`);
  }

  render() {
    if (this.props.isLoading.length) {
      return <AppLoader isLoading={this.props.isLoading} />;
    }

    return (
      <div style={styles.base}>
        <div style={styles.container}>
          <AppHeader
            months={this.props.months}
            currentMonth={this.props.currentMonth}
            changeMonth={this.props.changeMonth}
            />
          <AppMenu
            router={this.context.router}
            routes={this.props.route.childRoutes}
            current={this.props.location.pathname}
            month={this.props.currentMonth}
            />
          <AppContent isLoading={this.props.isLoading}>{this.props.children}</AppContent>
        </div>
        <AppBackground />
      </div>
    );
  }
};

App.contextTypes = {
  router: React.PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return { ...state };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    fetchInitialData: () => dispatch(fetchInitialData()),
    changeMonth: (month) => dispatch(changeMonth(month)),
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(Radium(App));
