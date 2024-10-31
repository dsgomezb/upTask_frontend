import NewPasswordToken from '@/components/auth/NewPasswordToken';
import NewPasswordForm from '@/components/auth/NewPasswordForm';
import { useState } from 'react';
import { ConfirmToken } from '@/types/index';

export default function NewPasswordView() {

    const [token, setToken] = useState<ConfirmToken>('')
    const [isValidaToken, setIsValidToken] = useState(false)

    return (
        <>
            <h1 className="text-5xl font-black text-white">Restablecer password</h1>
            <p className="text-2xl font-light text-white mt-5">
                Ingresa el código que recibiste {''}
                <span className=" text-fuchsia-500 font-bold"> por email</span>
            </p>
            {!isValidaToken ? 
                <NewPasswordToken token={token} setToken={setToken} setIsValidToken={setIsValidToken} /> : 
                <NewPasswordForm token={token} />
            }
        </>
    )
}