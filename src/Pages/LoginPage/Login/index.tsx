import { Container, LoginContainer } from "./styled";
import Logo from '../../../assets/logo.png'
import google from '../../../assets/google.png'
import { NavLink, useNavigate } from "react-router-dom";
import {  FieldValues, useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import {  useContext, useState } from "react";
import { AccessContext } from "../../../Context/firebaseAuth";
import { ImageLogin } from "../../../components/ImageLogin";


export function Login() {
    const {SingInWithGoogle} = useContext(AccessContext)
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const auth = getAuth()
    
    function  redirectUser() {
        navigate('/menu', {replace: true})
    } 
    function UserAccessing(data: FieldValues) { 
        const User = {
            email: data.email,
            password: data.password
        }
        signInWithEmailAndPassword(auth, User.email, User.password)
            .then((userCredential) => {
                const user = userCredential.user
                redirectUser()
            })
            .catch((error) => {
                console.log(error)
                const ErrorCode = error.code
                const ErrorMessage = error.message
                if (ErrorCode === 'auth/invalid-email') {
                    setError("Endereço de Email incorreto")
                } else if (ErrorCode === "auth/wrong-password") {
                    setError("Senha Incorreta") 
                } else if (ErrorCode === "auth/user-not-found") {
                    setError("Email incorreto ou você não tem uma conta")
                }
                  else {
                    setError("Ocorreu um erro inesperado, por favor atualize a página e tente novamente")
                }
            })
    } 
    async function AccessingWithGoogle() {
         const sucess = await SingInWithGoogle()
        if (sucess) {
            redirectUser()
        } else {
            window.alert('Acesso interrompido')
        }
 }
    

    return (
        <Container>
        <LoginContainer>
                <div>
                <div><h1><img src={Logo} alt="" /></h1></div>
                    <form action="" onSubmit={handleSubmit(UserAccessing)}>
                        <h1>Faça seu Login</h1>
                        {error && <p role='alert'>{error}</p>}
                        <input type="email" 
                            placeholder='Digite seu email' 
                            {...register('email', { required: true, })} />
                        <input type="password" 
                            placeholder='Digite sua senha' 
                            {...register('password')} />
                        <input type="submit" value="Login" />
                        <p>Ainda não tem uma conta? 
                         <NavLink to={'/criarconta'}> Criar Conta </NavLink></p>
                        <p>Ou</p>
                        <button onClick={AccessingWithGoogle}> <img src={google} alt="" /> Entre com o Google</button>
                    </form>
                </div>
            </LoginContainer>
            <ImageLogin/>
            </Container>
    )
}