import { textAlign } from "@mui/system"

export const userColumns = [{ field: "id", headerName: "ID", width: 70 }, {
    field: "user",
    headerName: "TÊN NGƯỜI DÙNG",
    width: 230,
    renderCell: (params) => {
        return (
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="avatar" />
                {params.row.username}
            </div>
        )
    }
},

{
    field: "email",
    headerName: "EMAIL",
    width: 220
},

{
    field: "site",
    headerName: "SITE",
    width: 100
},

{
    field: "ngaytao",
    headerName: "NGÀY TẠO",
    width: 150
},

{
    field: "ngayCN",
    headerName: "NGÀY CẬP NHẬT",
    width: 150
},

// {
//     field: "address",
//     headerName: "Address",
//     width: 170
// },
// {
//     field: "phone",
//     headerName: "Phone",
//     width: 110
// },
// {
//     field: "status",
//     headerName: "Status",
//     width: 160,
//     renderCell: (params)=>{
//         return(
//             <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
//         )
//     }
// },
]

export const siteColumns = [{ field: "id", headerName: "STT", width: 200 }, 

{
    field: "tenSite",
    headerName: "TÊN SITE",
    width: 800,
},

]