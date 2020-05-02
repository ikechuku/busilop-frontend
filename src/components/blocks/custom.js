/** @jsx jsx */
import { jsx } from 'theme-ui'
// import { Link } from '@theme-ui/components'

import { ControlType, applyPropertyControls } from 'property-controls'
const CustomBlock = ({ justifyContent = 'space-between', ...props }) => {
  return (
    <div
      sx={{
        variant: 'styles.header',
        display: 'flex',
        alignItems: 'center',
        width: '80%',
        justifyContent
      }}
      {...props}
    />
  )
}

CustomBlock.TextInput = props => {
  return (
    <input
      sx={{
        variant: 'styles.navLink',
        width: '50%',
        p: 2
      }}
      {...props}
    />
  )
}
CustomBlock.Label = props => {
  return (
    <label
      sx={{
        variant: 'styles.header',
        display: 'flex',
        width: '30%',
        height: '40px',
        alignItems: 'center',
        // justifyContent
      }}
      {...props}
    />
  )
}

applyPropertyControls(CustomBlock, {
  justifyContent: {
    type: ControlType.Enum,
    defaultValue: 'right',
    options: ['space-between', 'start', 'space-evenly']
  },
  sx: {
    type: ControlType.Style
  }
})
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
applyPropertyControls(CustomBlock.Label, linkControls)

CustomBlock.usage = `
  <CustomBlock>
  <CustomBlock.Label>
  title 
  </CustomBlock.Label>
  &nbsp;
  <CustomBlock.TextInput/>
    
  </CustomBlock>
`
export default CustomBlock