import { useState } from 'react'
import Navbar1 from '../../components/general/navbar1'
import Choice from '../../components/auth/Choice'
import CagnotteIcon from '../../assets/auth/cagnotte.svg'
import ProjectIcon from '../../assets/auth/project.svg'
import LoadingIcon from '../../assets/auth/loading.png'
import ProjectRegister from '../../components/auth/register/projet'
import CagnoteRegister from '../../components/auth/register/cagnotte'

const Register = () => {

    const [accountType, setAccountType] = useState<string|null>(null)
    const [loadingFull, setLoadingFull] = useState<boolean>(false)

    return (
        <div>
            {
                accountType==null && (
                    <div className='w-full h-[100vh] flex flex-col'>
                        <Navbar1 />

                        {
                            accountType==null && (
                                <div className='h-full w-full flex flex-col justify-center'>
                                    <h2 className='text-[#0E405D] text-[40px] text-center font-bold '>Démarrer l’aventure !</h2>
                                    <p className='text-[#454A58] text-[15px] text-center'>Avant de commencer, dites-nous quel est votre objectif</p>

                                    <div className='mt-8 flex md:flex-row flex-col w-full lg:px-0 px-5 md:justify-center md:space-x-5'>
                                        <Choice item={{
                                                id: 'cagnotte',
                                                icon: CagnotteIcon,
                                                title: 'Créer une cagnotte',
                                                text: 'Collecter des fonds pour un projet solidaire ou un besoin personnel',
                                                setType: setAccountType
                                            }}
                                        />
                                        <Choice item={{
                                                id: 'projet',
                                                icon: ProjectIcon,
                                                title: 'Financer un projet',
                                                text: 'Mobilisez des investisseurs pour financer une idée ou un business',
                                                setType: setAccountType
                                            }}
                                        />
                                    </div>
                                </div>
                            )
                        }

                        {
                            loadingFull && (
                                <div className='fixed top-0 left-0 w-[100vw] h-[100vh] glass1 z-50 flex justify-center items-center'>
                                    <div>
                                        <img src={LoadingIcon} alt="" />
                                    </div>
                                </div>
                            )
                        }

                    </div>
                )
            }

            {
                accountType=='projet' && (
                    <ProjectRegister />
                )
            }

{
                accountType=='cagnotte' && (
                    <CagnoteRegister />
                )
            }

        </div>
    )
}

export default Register