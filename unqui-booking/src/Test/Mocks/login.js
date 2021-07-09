// import { rest } from 'msw';

// export const loginHandlers = [
//     rest.get('/user/:mail', (req, res, ctx) => {
//         const { mail } = req.params;
//         let user;
//         switch(mail){
//             case 'erica.gerez@alu.edu.unq.com.ar':
//                 user = {
//                     "id": 1,
//                     "name": "Erica Gerez",
//                     "mail": "erica.gerez@alu.edu.unq.com.ar",
//                     "password": "Contrasenia1",
//                     "admin": false,
//                     "deleted": false
//                 }
//             break;
//         }
//         return res(
//             ctx.status(200),
//             ctx.json(user)
//           );
//     })
// ];