import React from "react";
import StoreTable from "../components/StoreTable";
import ZipSearch from "../components/ZipSearch";


const StoresPage = () => {
  return (
    <>
      <article>
        <h2>Store</h2>
        <p>Welcome to the store. Order any item you see here.</p>
        <StoreTable />
        <ZipSearch />
      </article>
    </>
  );
};

export default StoresPage;
