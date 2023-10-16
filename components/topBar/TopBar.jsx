import React from 'react';
import {
  AppBar, Toolbar, Typography, Grid
} from '@mui/material';
import './TopBar.css';
import FetchModel from '../../lib/fetchModelData';

/**
 * Define TopBar, a React componment of project #5
 */
class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      app_version: undefined,
    };
  }

  componentDidMount() {
    this.handleAppVersionChange();
}

 handleAppVersionChange(){
    const app_version = this.state.app_version;
    if (app_version === undefined){
        FetchModel("/test/info")
            .then((response) =>
            {
                this.setState({
                    app_version: response.data
                });
            });
    }
}

  render() {
const {app_version} = this.state;
    return app_version ? (
      <AppBar className="topbar-appBar" position="absolute">
        <Toolbar className='topbar'>
              <Typography variant="h5" color="inherit">
                Group 4
              </Typography>
            
            
              <Typography variant="h5" color="inherit">
                 {this.props.topName}
              </Typography>
              <Typography variant="h5" component="div" color="inherit">
                  Version: {this.state.app_version.__v}
              </Typography> 
        </Toolbar>
      </AppBar>
    ) : (
      <div />
    );
  }
}

export default TopBar;
