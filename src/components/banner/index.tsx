export default function Banner({ text }: { imgSrc?: string, text: string }): React.ReactNode {
  return (
    <div className="bg-slate-600 h-96 flex justify-center items-center">
      <h1 className="text-2xl font-bold text-white">{text}</h1>
    </div>)
}
