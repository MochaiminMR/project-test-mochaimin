import { useEffect, useState } from "react";
import { Header } from "./component/Header";
import Card from "./component/Card";
import { Hero } from "./component/Hero";
import { Label, Select } from "flowbite-react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [perPage, setPerPage] = useState(10);
  const [sortOption, setSortOption] = useState("Newest");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/everything?q=football&apiKey=1b89a43130a84c6e97053d85d207ae3e"
        );
        console.log("Data from API:", response.data.articles);
        setData(response.data.articles);
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
      (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
    );
  } else if (sortOption === "Latest") {
    sortedData.sort(
      (a, b) => new Date(a.publishedAt) - new Date(b.publishedAt)
    );
  }

  return (
    <>
      <Header />
      <Hero imageSrc={image} />
      <div className="flex flex-col"></div>
      <div className="container mx-12 news-section flex flex-row justify-between">
        <p>
          Showing {perPage} of {data.length}
        </p>

        <div className="mx-12 flex flex-row gap-5">
          <div className="flex flex-row gap-3 items-center justify-center">
            <div className="mb-2 block">
              <Label htmlFor="perPage" value="Showing per page:" />
            </div>
            <Select
              id="perPage"
              required="required"
              value={perPage}
              onChange={handlePerPageChange}>
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
              onChange={handleSortOptionChange}>
              <option value="Newest">Newest</option>
              <option value="Latest">Latest</option>
            </Select>
          </div>
        </div>
      </div>
      {/* Card */}
      <div className="container mx-12 flex flex-wrap pt-28 gap-8">
        {sortedData.slice(0, perPage).map((article) => (
          <Card
            key={article.title}
            image={article.urlToImage}
            title={article.title}
            description={article.description}
          />
        ))}
      </div>
    </>
  );
}

export default App;
