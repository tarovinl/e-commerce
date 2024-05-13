
import ClientEmailVerifcationForm from './ClientEmailVerifcationForm'


const ClientEmailVerification = ({verifyEmail, setEmail, email}) => {
  return (
    <ClientEmailVerifcationForm 
        email = {email}
        setEmail = {setEmail}
        verifyEmail={verifyEmail}
    />
  )
}

export default ClientEmailVerification