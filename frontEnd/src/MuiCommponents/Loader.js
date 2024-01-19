import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


function Loader() {
  return (
    <Box sx={{ display: 'flex' , fontSize:"200px"}}>
    <CircularProgress />
  </Box>
  )
}

export default Loader
