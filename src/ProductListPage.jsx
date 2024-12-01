import React, { useEffect, useState } from "react";
import Productlist from "./Productlist";
import NoProduct from "./NoProduct";
import { getProductList } from "./api";
import Loding from "./Loding";
import { withUser } from "./withProvider";
import { range } from "lodash";
import { Link, useSearchParams } from "react-router-dom";

function ProductListPage({ user }) {
  const [productData, setProductData] = useState();
  const [loading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();

  let params = Object.fromEntries([...searchParams]);

  let { query, sort, page } = params;

  query = query || "";
  sort = sort || "default";
  page = +page || 1;

  useEffect(
    function () {
      let sortBy;
      let sortType;

      if (sort == "title") {
        sortBy = "title";
      } else if (sort == "lowToHigh") {
        sortBy = "price";
      } else if (sort == "highToLow") {
        sortBy = "price";
        sortType = "desc";
      }

      getProductList(sortBy, query, page, sortType).then(function (body) {
        setProductData(body);
        setLoading(false);
      });
    },
    [sort, query, page]
  );

  function handelQueryChange(event) {
    setSearchParams(
      { ...params, query: event.target.value, page: 1 },
      { replace: false }
    );
  }

  function handelSortChange(event) {
    setSearchParams(
      { ...params, sort: event.target.value },
      { replace: false }
    );
  }

  if (loading) {
    return <Loding />;
  }

  return (
    <>
      <div className="max-w-6xl min-h-screen p-2 py-12 m-2 mx-auto my-16 bg-white px-9">
        <h1>{user.fullName}</h1>
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
          <option value="default">Default Sort</option>
          <option value="title">Sort by Title</option>
          <option value="lowToHigh">Sort by Price: Low to High</option>
          <option value="highToLow">Sort By Price: High to Low</option>
        </select>
        {productData.data.length > 0 && (
          <Productlist products={productData.data} />
        )}
        {productData.data.length == 0 && <NoProduct />}

        {range(1, productData.meta.last_page + 1).map((pageNo) => (
          <Link
            key={pageNo}
            to={"?" + new URLSearchParams({ ...params, page: pageNo })}
            className={
              "px-3 py-1 m-1 font-bold text-white border border-black " +
              (pageNo === page ? "bg-red-700" : "bg-red-400")
            }
          >
            {pageNo}
          </Link>
        ))}
      </div>
    </>
  );
}

export default withUser(ProductListPage);
