

import Link from 'next/link'
import Grafico08 from '@/components/Grafico08';

function page() {
    return (
        <>
            <Link href='/'>Volver a página de INICIO</Link>
            <h1 className='text-2xl text-center'>Gráfico de puntos</h1>
            <Grafico08 />
        </>
    )
}

export default page;