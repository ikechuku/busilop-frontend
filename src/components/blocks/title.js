/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from '@theme-ui/components'
import { ControlType, applyPropertyControls } from 'property-controls'
const Title = ({ justifyContent = 'space-between', ...props }) => {
  return (
    <h1
      sx={{
        variant: 'styles.header',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
applyPropertyControls(Title, linkControls)

Title.usage = `
  <Title>
    Heading
  </Title>
`
export default Title