import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
});

function AlignItemsList(props) {
  const { classes } = props;
  return (
      <div className="w3-card-4 w3-white w3-round-large">
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://ae01.alicdn.com/kf/HTB1SyuwoL9TBuNjy0Fcq6zeiFXaE/Temperature-and-Humidity-sensor-DHT22.jpg_640x640.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Temperature&Humidity Sensor"
          secondary={
            <React.Fragment>
              <Typography component="span" className={classes.inline} color="textPrimary">
                DHT22
              </Typography>
              {" — Based on DHT22 with range -10--80"}
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://cdn.shopify.com/s/files/1/1546/3951/products/y9_1024x1024.jpg?v=1527267885" />
        </ListItemAvatar>
        <ListItemText
          primary="Gas Sensor"
          secondary={
            <React.Fragment>
              <Typography component="span" className={classes.inline} color="textPrimary">
                MQ2
              </Typography>
              {" — For detecting LPG, CO and Smoke Levels in air."}
            </React.Fragment>
          }
        />
      </ListItem>
     
    </List>
    <div className="w3-container w3-round w3-center w3-light-gray">
         
     <h6>{"Connected Sensors"}</h6>

        </div>
    </div>
     
  );
}

AlignItemsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AlignItemsList);
