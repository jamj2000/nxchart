

import Link from 'next/link'
import Grafico04 from '@/components/Grafico04'

function page() {
    return (
        <>
            <Link href='/'>Volver a página de INICIO</Link>
            <h1 className='text-2xl text-center'>Gráfico de líneas 2</h1>
            <Grafico04 />
        </>
    )
}

export default page;