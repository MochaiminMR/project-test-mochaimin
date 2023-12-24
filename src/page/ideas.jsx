import { useEffect, useState } from "react";
import { format } from "date-fns";
import { Header } from "../component/Header";
import Card from "../component/Card";
import { Hero } from "../component/Hero";
import { Label, Select } from "flowbite-react";
import axios from "axios";
import "../App.css";

export const IdeasPage = () => {
  const [data, setData] = useState([]);
  const [sortOption, setSortOption] = useState("Newest");
  const [perPage, setPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://suitmedia-backend.suitdev.com/api/ideas",
          {
            params: {
              "page[number]": 1,
              "page[size]": 100,
              append: ["small_image", "medium_image"],
              sort: "-published_at",
            },
          }
        );
        console.log("Data from API:", response);
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handlePerPageChange = (e) => {
    setPerPage(parseInt(e.target.value, 10));
  };

  const handleSortOptionChange = (e) => {
    setSortOption(e.target.value);
  };

  const image = "/images/hero2.jpg";

  const sortedData = [...data];
  if (sortOption === "Newest") {
    sortedData.sort(
      (a, b) => new Date(b.published_at) - new Date(a.published_at)
    );
  } else if (sortOption === "Latest") {
    sortedData.sort(
      (a, b) => new Date(a.published_at) - new Date(b.published_at)
    );
  }

  return (
    <>
      <div className="max-w-[1440px]">
        <Header />
        <Hero imageSrc={image} />

        {/* Form */}
        <div
          className="container px-12 news-section flex flex-row justify-between font-sans"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "1rem",
          }}>
          <p>
            Showing {perPage} of {data.length}
          </p>

          <div className="mx-12 flex flex-row gap-5">
            <div className="flex flex-row gap-3 items-center justify-center">
              <div className="mb-2 block">
                <Label htmlFor="perPage" value="Showing" />
              </div>
              <Select
                id="perPage"
                required="required"
                value={perPage}
                onChange={handlePerPageChange}
                style={{
                  borderRadius: "80px",
                }}>
                <option>10</option>
                <option>20</option>
                <option>50</option>
              </Select>
            </div>

            <div className="flex flex-row gap-3 items-center justify-center">
              <div className="mb-2 block">
                <Label htmlFor="sortOption" value="Short by:" />
              </div>
              <Select
                id="sortOption"
                required="required"
                value={sortOption}
                onChange={handleSortOptionChange}
                style={{
                  borderRadius: "80px",
                }}>
                <option value="Newest">Newest</option>
                <option value="Latest">Latest</option>
              </Select>
            </div>
          </div>
        </div>

        {/* Card */}
        <div className="container px-12 grid grid-cols-4 pt-28 gap-8">
          {sortedData.slice(0, perPage).map((article) => (
            <Card
              key={article.id}
              title={article.title}
              imageSrc={article.small_image[0]?.url}
              description={format(
                new Date(article.created_at),
                "dd, MMMM yyyy"
              )}
            />
          ))}
        </div>
      </div>
    </>
  );
};
