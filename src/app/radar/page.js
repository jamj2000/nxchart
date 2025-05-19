

import Link from 'next/link'
import Grafico09 from '@/components/Grafico09'


function page() {
    return (
        <>
            <Link href='/'>Volver a página de INICIO</Link>
            <h1 className='text-2xl text-center'>Gráfico de radar</h1>
            <Grafico09 />
        </>
    )
}

export default page