import ListaPostagens from "../../components/postagens/listaPostagens/ListaPostagens"
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem"

function Home() {
    return (
        <>
            <div className=" bg-blue-950 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Bem vindo!
                        </h2>
                        <p className='text-xl'>
                            Explore o caminho da vida...
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className="flex justify-around gap-4">
                                <ModalPostagem />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://i.imgur.com/fyfri1v.png"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>

            <ListaPostagens />
        </>
    )
}

export default Home