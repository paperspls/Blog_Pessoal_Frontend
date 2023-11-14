import { ReactNode, useContext } from 'react'
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'

import { AuthContext } from '../../contexts/AuthContext'

function Footer() {

    let data = new Date().getFullYear()

    const { usuario } = useContext(AuthContext)

    let component: ReactNode

    if (usuario.token !== "") {

        component = (
            <div className="flex justify-center bg-blue-950 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                        Jornada Nihon  | Copyright: {data}
                    </p>

                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
                        <a href='https://www.linkedin.com/in/rhyanmagalhaes/' target='_blank' rel='noopener noreferrer'>
                            <LinkedinLogo size={48} weight='bold' />
                        </a>
                        <a href='https://github.com/paperspls' target='_blank' rel='noopener noreferrer'>
                            <GithubLogo size={48} weight='bold' />
                        </a>
                    </div>
                </div>
            </div>)
    }

    return (
        <>
            {component}
        </>
    )
}

export default Footer