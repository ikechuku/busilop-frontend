/** @jsx jsx */
import { jsx } from 'theme-ui'
const CompactForm = ({ justifyContent = 'space-between', ...props }) => {
  return (
    <header
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

CompactForm.usage = `
  <CompactForm>
    <label>Name</label>
    <input type="text" placeholder=""/>
    <input type="text" placeholder="email address"/>
  </CompactForm>
`
export default CompactForm