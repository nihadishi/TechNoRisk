import { DataGrid } from "@mui/x-data-grid";
import Layout from "../../components/layout/Layout";
import "./style.scss";
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "logic",
    headerName: "Logic",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
  },
  {
    field: "communication",
    headerName: "Communication",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
  },
  {
    field: "math",
    headerName: "Math",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
  },
  {
    field: "publicSpeaker",
    headerName: "Public Speaker",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
  },
  {
    field: "status",
    headerName: "Status",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
  },
];

const rows = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    age: 35,
    logic: 98 / 100,
    communication: 98 / 100,
    math: 98 / 100,
    publicSpeaker: 98 / 100,
    status: "Designer",
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    age: 42,
    logic: 98 / 100,
    communication: 98 / 100,
    math: 98 / 100,
    publicSpeaker: 98 / 100,
    status: "Designer",
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    age: 45,
    logic: 98 / 100,
    communication: 98 / 100,
    math: 98 / 100,
    publicSpeaker: 98 / 100,
    status: "Designer",
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    age: 16,
    logic: 98 / 100,
    communication: 98 / 100,
    math: 98 / 100,
    publicSpeaker: 98 / 100,
    status: "Designer",
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    age: null,
    logic: 98 / 100,
    communication: 98 / 100,
    math: 98 / 100,
    publicSpeaker: 98 / 100,
    status: "Designer",
  },
  {
    id: 6,
    lastName: "Melisandre",
    firstName: null,
    age: 150,
    logic: 98 / 100,
    communication: 98 / 100,
    math: 98 / 100,
    publicSpeaker: 98 / 100,
    status: "Designer",
  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    age: 44,
    logic: 98 / 100,
    communication: 98 / 100,
    math: 98 / 100,
    publicSpeaker: 98 / 100,
    status: "Designer",
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    age: 36,
    logic: 98 / 100,
    communication: 98 / 100,
    math: 98 / 100,
    publicSpeaker: 98 / 100,
    status: "Designer",
  },
  {
    id: 9,
    lastName: "Roxie",
    firstName: "Harvey",
    age: 65,
    logic: 98 / 100,
    communication: 98 / 100,
    math: 98 / 100,
    publicSpeaker: 98 / 100,
    status: "Designer",
  },
];

const Dashboard = () => {
  return (
    <>
      <Layout>
        <div style={{ height: "auto", width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </div>
        <div className="about">
          <div className="details">
            <div className="detailsText">Teacher</div>
            <div className="detailsImg">
              <img
                src="https://cdnb.artstation.com/p/assets/images/images/012/640/661/medium/antoine-fromager-render001.jpg?1535770795"
                alt="img"
              />
            </div>
            <div className="detailsName">Knyaz Yaqublu</div>
          </div>
          <div className="details">
            <div className="detailsText">Teacher asistant</div>
            <div className="detailsImg">
              <img
                src="https://cdnb.artstation.com/p/assets/images/images/012/640/661/medium/antoine-fromager-render001.jpg?1535770795"
                alt="img"
              />
            </div>
            <div className="detailsName">Zeynab</div>
          </div>
          <div className="details">
            <div className="detailsText">Class info</div>
            <div className="intoDetailText">asdasdaf</div>
            <div className="intoDetailText">asdasdaf</div>
          </div>
          <div className="details">
            <div className="detailsText">Materials</div>
            <p className="intoDetailText">Nesee</p>
            <p className="intoDetailText">Nesee</p>
          </div>
        </div>
          <div style={{fontSize:"28px", fontWeight:"600",paddingLeft:"16px"}}>Classes</div>
        <div className="classes">
          <div className="cohort">
            <div className="cohortName">UX/UI Design</div>
            <div className="cohortPerson">Knyaz Yaqublu, Zeynab Nesirova</div>
            <div style={{display:"flex", flexDirection:"row", gap:"10px"}}>
            <div className="cohortDate">09/15</div>
            <div className="cohortType">Students</div>
            </div>
            <div className="cohortiCode">I202</div>
          </div>
          <div className="cohort">
            <div className="cohortName">UX/UI Design</div>
            <div className="cohortPerson">Knyaz Yaqublu, Zeynab Nesirova</div>
            <div style={{display:"flex", flexDirection:"row", gap:"10px"}}>
            <div className="cohortDate">09/15</div>
            <div className="cohortType">Students</div>
            </div>
            <div className="cohortiCode">I202</div>
          </div>
          <div className="cohort">
            <div className="cohortName">UX/UI Design</div>
            <div className="cohortPerson">Knyaz Yaqublu, Zeynab Nesirova</div>
            <div style={{display:"flex", flexDirection:"row", gap:"10px"}}>
            <div className="cohortDate">09/15</div>
            <div className="cohortType">Students</div>
            </div>
            <div className="cohortiCode">I202</div>
          </div>
          <div className="cohort">
            <div className="cohortName">UX/UI Design</div>
            <div className="cohortPerson">Knyaz Yaqublu, Zeynab Nesirova</div>
            <div style={{display:"flex", flexDirection:"row", gap:"10px"}}>
            <div className="cohortDate">09/15</div>
            <div className="cohortType">Students</div>
            </div>
            <div className="cohortiCode">I202</div>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Dashboard;
