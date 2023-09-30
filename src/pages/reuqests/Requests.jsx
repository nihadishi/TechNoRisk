import { DataGrid } from "@mui/x-data-grid";
import Layout from "../../components/layout/Layout";
import { useState } from "react";

const editButtonCount = 2; // İlk beş satır için "Edit" düğmesi sayısı

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
  {
    field: "action", // Yeni sütun "action" adında
    headerName: "Action",
    sortable: false,
    width: 100,
    renderCell: (params) => {
      const [buttonText, setButtonText] = useState(
        params.row.id <= editButtonCount ? "Edit" : "Accept"
      );
      const handleButtonClick = () => {
        if (params.row.id >= editButtonCount) {
          setButtonText("Edit");
          handleEdit(params.row.id);
        } else {
          if (buttonText === "Accept") {
            setButtonText("Edit");
            handleEdit(params.row.id);
          }
        }
      }
      return (
        <button onClick={handleButtonClick} style={{ backgroundColor: buttonText === "Accept" ? "#34C759" : "white", color: buttonText === "Accept" ? "white" : "#34C759", width: "100px", height: "35px", borderRadius: "5px", border: buttonText === "Accept" ? "none" : "1px solid #34C759" }}>
          {buttonText}
        </button>
      );
    }
    
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


const Requests = () => {
  const handleEdit = (id) => {
    // Edit işlemi yapmak için bu fonksiyonu kullanabilirsiniz.
  };

  const handleAccept = (id) => {
    // Accept işlemi yapmak için bu fonksiyonu kullanabilirsiniz.
  };
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
      </Layout>
    </>
  );
};

export default Requests;
