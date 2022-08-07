import React, { useEffect, useState } from "react";
import Heading from "./components/Heading";
import Loader from "./components/Loader";
import Card from "./components/Card";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
import { getImages } from "./helpers/api";
//style

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  font-family: sans-serif;
}
`;

const WrapperImage = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 5em 3em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const data = await getImages();
    setData((prevValue) => [...prevValue, ...data]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Heading />
      <GlobalStyle />
      <InfiniteScroll
        dataLength={data.length}
        next={fetchData}
        hasMore={true}
        loader={<Loader />}
      >
        <WrapperImage>
          {data.map((item) => (
            <Card item={item} key={item.id + item.blurhash} />
          ))}
        </WrapperImage>
      </InfiniteScroll>
    </div>
  );
}

export default App;
