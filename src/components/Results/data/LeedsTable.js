import React from "react";

const data = [
  {
    name: "Anom",
    email: "Anom@gmail.com",
    title: "UI/UX Designer",
    intel: "23/07/22",
    country: "Pakistan",
    location: "Pakistan",
  },
  {
    name: "Anom",
    email: "Anom@gmail.com",
    title: "UI/UX Designer",
    intel: "23/07/22",
    country: "Pakistan",
    location: "Pakistan",
  },
  {
    name: "Anom",
    email: "Anom@gmail.com",
    title: "UI/UX Designer",
    intel: "23/07/22",
    country: "Pakistan",
    location: "Pakistan",
  },
];

function LeedsTable() {
  return (
    <>
      <div  style={{paddingTop:"5rem"}}>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr style={{background:"white"}}>
                <th>Name</th>
                <th>Email</th>
                <th>Title</th>
                <th>Intel</th>
                <th>Country</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {data.map((val, key) => {
                return (
                  <tr key={key}>
                    <td>{val.name}</td>
                    <td>{val.email}</td>
                    <td>{val.title}</td>
                    <td>{val.intel}</td>
                    <td>{val.country}</td>
                    <td>{val.location}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default LeedsTable;
