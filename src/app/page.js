import Link from "next/link";

export default function Home() {
  return (
    <main className="mt-10">
      <h1 className="text-4xl font-bold">
        Gráficos elaborados con chart.js
      </h1>
      <p className="mb-10">Ejemplos tomados de
        <Link href='https://github.com/reactchartjs/react-chartjs-2/tree/master/sandboxes' target='_blank'>
          react-chartjs-2
        </Link>
      </p>
      <h2 className="text-2xl"><Link href="/bar1">Gráfico de barras 1</Link></h2>
      <h2 className="text-2xl"><Link href="/bar2">Gráfico de barras 2</Link></h2>
      <h2 className="text-2xl"><Link href="/line1">Gráfico de líneas 1</Link></h2>
      <h2 className="text-2xl"><Link href="/line2">Gráfico de líneas 2</Link></h2>
      <h2 className="text-2xl"><Link href="/pie">Gráfico de tarta</Link></h2>
      <h2 className="text-2xl"><Link href="/doughnut">Gráfico de donut</Link></h2>
      <h2 className="text-2xl"><Link href="/bubble">Gráfico de burbujas</Link></h2>
      <h2 className="text-2xl"><Link href="/scatter">Gráfico de dispersión</Link></h2>
      <h2 className="text-2xl"><Link href="/radar">Gráfico de radar</Link></h2>
      <h2 className="text-2xl"><Link href="/dashboard">Dashboard con todos los gráficos</Link></h2>
    </main>
  );
}
