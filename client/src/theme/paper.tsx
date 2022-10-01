// ----------------------------------------------------------------------

export default function Paper() {
    return {
      MuiPaper: {
        defaultProps: {
          elevation: 3,
        
        },
  
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            
          }
        }
      }
    };
  }
  