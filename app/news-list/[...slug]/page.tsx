import Header from "@/components/header/Header";
import NewsList from "@/components/news-list/news-list";
import { Suspense } from "react";

interface IProps {
  params: Promise<{ slug: string[] }>
}

const Page = async (props: IProps) => {
  const { slug } = await props.params;
  const [category] = slug;

  return (
    <div>
      <Header />
      <div className="container">
        <div>
          <h1 style={{ marginTop: "50px" }}>{category} News</h1>
          <Suspense fallback={<div className="loader"></div>}>
            <NewsList category={category} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default Page
