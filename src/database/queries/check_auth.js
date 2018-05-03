// module.exports = {
//   fun : (req,res) =>{
//
//     const cookies = req.header.cookie? cookie.parse(req.headers.cookie) : {};
//     if (cookies.token){
//       verify(cookies.token,process.env.SECRET,(err,decoded)=>{
//         if (err){
//           res.writeHead(403, {'content-type': 'text/html'});
//           res.end ('<h1>you are not authorized, fuck off</h1>');
//           return false;
//         }
//         return true;
//       });
//
//
//     }else return true;
//   };
//   };
