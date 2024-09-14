import React from "react";
import { Image } from "cloudinary-react";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
const Pagination = () => {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  function Items({ currentItems }) {
    return (
      <div className="flex items-center justify-center flex-row gap-8 ">
        {currentItems &&
          currentItems.map((item) => (
            <div key={item.url} className="">
              <Image
                className="w-[285px] h-[301px] "
                loading="lazy"
                cloudName={images.cloudName}
                publicId={images.url}
              />
              <h3>
                {" "}
                {item.name} {item.url}{" "}
              </h3>
            </div>
          ))}
      </div>
    );
  }

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Pagination;
