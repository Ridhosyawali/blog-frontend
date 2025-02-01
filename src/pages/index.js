import Banner from "@/components/molecules/Banner";
import TopList from "@/components/molecules/TopList";
import { getBlogs, getImages } from "@/services/blog";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getBlogs();
        setData(res.slice(0, 5));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await getImages();
        setImages(res.slice(0, 5));
      } catch (error) {
        console.log(error);
      }
    };
    fetchImages();
  }, []);
  console.log(images);

  // console.log(data);
  return (
    <section className="lg:px-10">
      <div className="flex flex-col">
        <div className="flex flex-col lg:flex-row lg:gap-20 lg:py-10 justify-center">
          <div className="max-w-[70%]">
            <Banner>
              <Banner.Header
                image={
                  "https://platform.theverge.com/wp-content/uploads/sites/2/2025/01/DSC09399_processed.jpg?quality=90&strip=all&crop=0.012500000000003%2C0%2C99.975%2C100&w=1440"
                }
                link="#"
                className={"h-[450px] w-auto shadow-xl"}
              />
              <Banner.footer
                link="#"
                title="The Samsung Galaxy S25 Ultra isn’t so ‘ultra’ anymore"
                description="Still big. Still great. But Samsung is losing the plot on what makes the Ultra so extra."
                className={
                  "transform -translate-y-10 bg-gradient-to-b from-green-300 to-white"
                }
              />
              <Banner.footer />
            </Banner>
          </div>
          <div className="max-w-[30%] sticky top-20">
            <TopList background={"bg-slate-800"} title={"Top Stories"}>
              {data.map((item, index) => (
                <TopList.ListItem
                  key={index}
                  link={"#"}
                  writer={"Someone"}
                  colorwriter={"text-green-300"}
                >
                  {item.title}
                </TopList.ListItem>
              ))}
            </TopList>
          </div>
        </div>
        {/* <div>
          <div>card</div>
          <div>navigation</div>
        </div> */}
      </div>
    </section>
  );
}
