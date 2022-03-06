import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import Button from '@mui/material/Button';
import NavBar from '../components/NavBar.js'
import { textAlign } from '@material-ui/system';
var result = "";

export default function HistoryPage() {
  const axios = require('axios');

// Make a request for a user with a given ID
axios.get('http://localhost:8888/allHist?user=1234')
  .then(function (response) {
    // handle success
    result = response;
    console.log(response)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });


    function generate(element) {
      return [0, 1, 2, 3, 4, 5].map((value) =>
        React.cloneElement(element, {
          key: value,
        }),
      );
      }
    

const [dense, setDense] = React.useState(false);
const [secondary, setSecondary] = React.useState(true);

return (
  <Box sx={{ flexGrow: 1}}>
    <NavBar></NavBar>
          <List dense={dense} sx={{ width: '200%', maxWidth: 360, bgcolor: 'background.blue'}}>
            {generate(
              <ListItem
                secondaryAction={
                  <Button variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                  Start
                  </Button>
                }
              >
                <ListItemText
                  primary= {result}
                  secondary={secondary ? 'Date: X' : null}
                />
              </ListItem>,
            )}
          </List>
  </Box>
);

  }
