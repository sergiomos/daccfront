import Banner from "@/components/banner";
import Header from "../components/header";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner text="Informativos" />
      <div className="grid grid-cols-6 my-8">
        <div className="col-span-1">
        </div>

        <div className="col-span-4 px-10">
        </div>

        <div className="col-span-1">
        </div>
      </div>
    </div>
  )
}
