import { Container, CreateAccountContainer } from "./styled";
import Logo from '../../../assets/logo.png'
import google from '../../../assets/google.png'
import { useCallback, useContext } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { AccessContext } from "../../../Context/firebaseAuth";
import { ImageLogin } from "../../../components/ImageLogin/index";

interface UserDataType {
    data?: FieldValues
}
export function CreateAcount() {
    const { getUserData, SingInWithGoogle} = useContext(AccessContext)
    const {register, handleSubmit, formState: {errors}} = useForm()
    const navigate = useNavigate()
    function  redirectUser() {
         navigate('/menu', {replace: true})
    } 
    const onSubmit = useCallback((data: UserDataType) => {
        getUserData(data),
            redirectUser() 
    }, [])
    async function onGoogleSubmit() {
        const sucess = await SingInWithGoogle()
        if (sucess) {
            redirectUser()
        } else {
            window.alert('Acesso interrompido')
        }
    }
return(
<Container>     
    <CreateAccountContainer>
                <div><img src={Logo} alt="" /></div>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <h1>Crie sua Conta</h1>
                    <input type="text"
                        placeholder='Digite seu Nome'
                        {...register('name', { required: true,  })}
                        aria-invalid={errors.name ? 'true' : 'false'}
                    />
                    {errors.name?.type === 'required' && <p role='alert'>Digite seu Nome</p>}

                    <input type="email"
                        placeholder='Digite seu email'
                        {...register('email', { required: 'Endereço de Email faltando' })}
                        aria-invalid={errors.email ? 'true' : 'false'}
                    />
                    {errors.email && <p role='alert'>{errors.email?.message?.toString()}</p>}

                    <input type="password"
                        placeholder='Digite sua senha'
                        {...register('password', { required: true, minLength: 4, maxLength: 15 })}
                        aria-invalid={errors.password ? 'true' : 'false'}
                    />
                    { errors.password?.type === 'minLength' &&
                        <p role='alert'>Senha deve conter no mínimo 4 caracteres</p>}
                    { errors.password?.type === 'maxLength' &&
                        <p role='alert'>Senha deve conter no máximo 15 caracteres</p>}
                    
                    <input id="createaccount" type="submit" value="Criar Conta" />
                    <p>Já tem uma conta? 
                        <NavLink to={'/'}> Faça seu login </NavLink>
                    </p>
                    <p>Ou</p>
                      <button onClick={onGoogleSubmit} > <img src={google} alt="" /> Entre com o Google</button>
                </form>
        
</CreateAccountContainer>   
    <ImageLogin/>
</Container>
    )
}
