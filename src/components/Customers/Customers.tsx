import React, { useMemo, useState } from "react";
import "./Customers.css";
import { customers } from "../../data/data";
import Search from "../../assets/search.png";

const Customers = () => {
  const [search, setSearch] = useState("");
  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(search.toLowerCase())
  );

  const [page, setPage] = useState(1);
  const customersPerPage = 8;

  const customerPage = Math.ceil(filteredCustomers.length / customersPerPage);

  const filteredPageCustomers = useMemo(
    () =>
      filteredCustomers.filter(
        (_, index) =>
          index <= page * customersPerPage &&
          index > (page - 1) * customersPerPage
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [page, filteredCustomers.length]
  );

  return (
    <div className="customer">
      <h1>Hello Evano 👋🏼,</h1>
      <div className="customer__main">
        <div className="customer__main-header">
          <div className="customer__main-header-left">
            <h2>All Customers</h2>
            <h3>Active Members</h3>
          </div>
          <div className="customer__main-header-search">
            <img src={Search} alt="" />
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => {
                setPage(1);
                setSearch(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="custom__main-table">
          <table>
            <thead>
              <tr>
                <th>Customer name</th>
                <th>Company</th>
                <th>Phone number</th>
                <th>Email</th>
                <th>Country</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredPageCustomers.map(
                ({
                  id,
                  name,
                  company,
                  phoneNumber,
                  email,
                  country,
                  status,
                }) => (
                  <tr key={id}>
                    <td>{name}</td>
                    <td>{company}</td>
                    <td>{phoneNumber}</td>
                    <td>{email}</td>
                    <td>{country}</td>
                    <td>
                      <span
                        className={`customer__status customer__status-${status}`}
                      >
                        {status}
                      </span>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
        <div className="custom__main-pagination">
          <p>Showing data 1 to 8 of 256K entries</p>
          <div className="custom__main-pagination-btn">
            <button
              type="button"
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
            >
              {"<"}
            </button>
            {[...Array(customerPage)].map((_, i) => (
              <button
                type="button"
                onClick={() => setPage(i + 1)}
                className={page === i + 1 ? "active" : ""}
              >
                {i + 1}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setPage(page + 1)}
              disabled={page === customerPage}
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
