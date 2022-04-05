import axios from "axios";
import AdminTemplates from '@components/templates/admin/AdminTemplates';

const ProfileAdmin = (props) => {
    return (
        <AdminTemplates title="Profile">

        </AdminTemplates>
    );
}

export default ProfileAdmin;

// export async function getServerSideProps(ctx) {
//     const cookie = ctx.req ? ctx.req.cookies.tokenAdmin : null;
//     const refreshAdmin = ctx.req ? ctx.req.cookies.refreshAdmin : null;
//     fetch('http://localhost:3000/api/refresh',
//         {
//             method: 'post',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//                 ,
//             },
//             body: {
//                 expires: 3600
//             }
//         })

//     return {
//         props: {

//         }
//     }
// }