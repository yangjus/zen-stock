import { redirect } from "react-router-dom";
import {
  createTheme,
  ThemeProvider,
} from '@mui/material/styles';
import { Button } from "@mui/material";

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  palette: {
    lightteal: createColor('#14b8a6'),
  },
});

export default function Login() {
  const handleSubmit = () => {
      console.log("success!")
      return redirect('/investing')
  };
  return (
      <main className="flex min-h-screen flex-col items-center p-24">     
      <ThemeProvider theme={theme}>
          <h1 className="text-teal-600" style={{fontSize: '45px', fontWeight: 'bold', marginBottom: '5px'}}>Log in to Your Account</h1>
          <form style={{margin: '10px', fontSize: '30px'}}>
              <div>
                  <label>
                      <input type="text" placeholder="Username" style={{caretColor: '#007bff', borderRadius: '10px', padding: '5px'}}/>
                  </label>
              </div>
              <div style={{marginTop: '20px'}}>
                  <label>
                      <input type="password" placeholder="Password" style={{caretColor: '#007bff', borderRadius: '10px', padding: '5px'}}/>
                  </label>
              </div>
              <div className="flex m-6 align-center justify-center">
              <Button variant="contained" color="lightteal" sx={{color: 'white'}} onClick={handleSubmit}>
                <a href="/investing">
                  Log In
                </a>
              </Button>
              </div>
              <div style={{fontSize:'0.5em', marginTop: '8px'}}>
                  New to ZenStock? 
                  <a href='/createaccount' style={{color: 'teal'}}> Create a new account.</a>
              </div>

          </form>
          </ThemeProvider>
      </main>
  )
}