import Filters from "@components/filters";
import Header from "@components/header";

function Page(params) {
  return (
    <div className="px-4">
      <Header />
      <Filters/>
    </div>
  )
}

export default Page;