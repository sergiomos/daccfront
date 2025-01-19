type BarraProps = {
  color: string
}

const Barra = ({ color }: BarraProps) => (
  <span className={`px-28 py-2 rounded-full ${color}`}></span>
)

const Divisor = () => (
  <div className="flex justify-between min-h-fit px-8 py-4">
    <Barra color="bg-yellow-400" />
    <Barra color="bg-blue-900" />
    <Barra color="bg-yellow-400" />
    <Barra color="bg-blue-900" />
    <Barra color="bg-yellow-400" />
  </div>
)

export default Divisor
