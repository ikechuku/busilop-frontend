/** @jsx jsx */
import { jsx } from 'theme-ui'
// import { Link } from '@theme-ui/components'
import { ControlType, applyPropertyControls } from 'property-controls'
const Button = ({ justifyContent = 'space-between', ...props }) => {
  return (
    <button
      sx={{
        variant: 'styles.header',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '140px',
        textAlign: 'center',
        justifyContent
      }}
      {...props}
    />
  )
}

const linkControls = {
  children: {
    title: 'Text',
    type: ControlType.String,
    required: true
  },
  sx: {
    type: ControlType.Style
  }
}
applyPropertyControls(Button, linkControls)

Button.usage = `
  <Button>
  Submit
  </Button>
`
export default Button