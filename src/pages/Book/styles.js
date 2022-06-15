import { theme } from '../../styles/theme'

export const learningStyles = {
  paragraph: {
    textAlign: 'justify'
  },
  select: {
    '& label.Mui-focused': {
      color: theme.palette.primary.main
    },
    '& .MuiInputLabel-root': {
      color: 'black'
    },
    '& .MuiFormHelperText-root': {
      color: 'black'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: theme.palette.primary.main
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black'
      },
      '&:hover fieldset': {
        borderColor: theme.palette.primary.main
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.primary.main
      }
    }
  },
  button: {
    marginTop: '1.5rem',
    marginBottom: '2rem'
  }
}
