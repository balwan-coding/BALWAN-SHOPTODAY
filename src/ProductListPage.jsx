import React, { useEffect, useState } from "react";
import Productlist from "./Productlist";
import NoProduct from "./NoProduct";
import { getProductList } from "./api";
import Loding from "./Loding";
import { withUser } from "./withProvider";

function ProductListPage({ user }) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");

  const [productList, setProductLinst] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    const list = getProductList();
    list.then(function (products) {
      setProductLinst(products);
      setLoading(false);
      return products[0];
    });
  }, []);

  const data = productList.filter(function (item) {
    const lowerCaseData = item.title.toLowerCase();
    const lowerCasequery = query.toLowerCase();

    return lowerCaseData.indexOf(lowerCasequery) != -1;
  });

  if (sort == "priseH") {
    data.sort(function (x, y) {
      return y.price - x.price;
    });
  } else if (sort == "priseL") {
    data.sort(function (x, y) {
      return x.price - y.price;
    });
  } else if (sort == "name") {
    data.sort(function (x, y) {
      return x.title < y.title ? -1 : 1;
    });
  }

  function handelQueryChange(event) {
    setQuery(event.target.value);
  }

  function handelSortChange(event) {
    setSort(event.target.value);
  }

  if (loading) {
    return <Loding />;
  }

  return (
    <>
      <div className="max-w-6xl p-2 py-12 m-2 mx-auto my-16 bg-white px-9">
        <h1>{user.email}</h1>
        <input
          value={query}
          onChange={handelQueryChange}
          className="p-2 border border-black rounded-lg "
          placeholder="Search"
        />
        <select
          name=""
          id=""
          className="p-2 m-2 border border-black rounded-lg "
          onChange={handelSortChange}
          value={sort}
        >
          <option value="default">Default sort</option>
          <option value="priseH">Sort by high to low Prise</option>
          <option value="priseL">Sort by low to high Prise</option>
          <option value="name">Sort by Title</option>
        </select>
        {data.length > 0 && <Productlist products={data} />}
        {data.length == 0 && <NoProduct />}
        <button className="px-3 py-1 m-1 font-bold text-white bg-red-700 border border-black hover:bg-red-500">
          1
        </button>
        <button className="px-3 py-1 m-1 font-bold text-white bg-red-700 border border-black hover:bg-red-500">
          2
        </button>
        <button className="px-3 py-1 m-1 font-bold text-white bg-red-700 border border-black hover:bg-red-500 ">
          3
        </button>
        ...
      </div>
    </>
  );
}

export default withUser(ProductListPage);
