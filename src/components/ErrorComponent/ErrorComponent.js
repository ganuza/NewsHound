import './ErrorComponent.css'

const ErrorComponent = ({headlineError, message}) => {

  return (
    <article className='error-container'>
      <h2 className='error-h2'>Error</h2>
      <h3 className='error-h3'></h3>
      <h3 cassName='error-h3'>{message}</h3>
    </article>
    
  )
}

export default ErrorComponent