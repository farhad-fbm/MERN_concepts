
export  const  Components=()=> {
  return (
    <>
      <Student name="Farhad" roll='56'></Student>
    </>
  )
}
function Student(props) {
  const { name, roll: pos } = props; //destructure
  return <>Name & Roll : {name}-{pos};</>
}


// -------------props validation
import PropTypes from 'prop-types';
Student.propTypes = {
  name: PropTypes.string.isRequired,
  roll: PropTypes.string.isRequired
}  