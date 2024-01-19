import { useNavigate } from "react-router-dom"
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Box } from "@mui/material"
import { ArrowBack } from "@mui/icons-material"
import {

  useTheme
  
} from "@mui/material";

function ErrorPage() {
  const navigate = useNavigate()
  const theme = useTheme();
  
  return (
    <Box  sx={{width:"80%"}} >
    <Typography variant="h6" color={theme.palette.error.main}>
    you are in the wrong Path , Please come back to Home 😅
    </Typography>
        <Button sx={{ml:"2rem" , mt: " 2rem"}}  onClick={()=>{
          navigate('/')
        }} variant="outlined" color={'inherit'}>
        <ArrowBack/>
          Back to Home
        </Button>
        </Box>
  )
}

export default ErrorPage
