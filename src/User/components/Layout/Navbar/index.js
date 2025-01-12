
// import React, { useState, useEffect } from 'react';
// import { AppBar, Toolbar, Typography, Button, IconButton, InputBase, Box, Avatar } from '@mui/material';
// import { Search as SearchIcon } from '@mui/icons-material';
// import { Link } from 'react-router-dom';
// import useDebounce from '../../../../Hook/useDebounce';
// import logo from '../../../UserImg/logo1.png';

// const Navbar = ({ onSearch, user, onLogout, usertoken }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const debouncedSearchTerm = useDebounce(searchTerm, 1000);

//   useEffect(() => {
//     if (debouncedSearchTerm) {
//       onSearch(debouncedSearchTerm);
//     }
//   }, [debouncedSearchTerm, onSearch]);

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <AppBar position="static">
//       <Toolbar sx={{
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: '0 20px',
//         height: '80px'
//       }}>
//         {/* Logo and Brand Section */}
//         <Box
//           component={Link}
//           to={usertoken === 'Teacher' ? '/teacherPost' : '/home'}
//           sx={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: 2,
//             textDecoration: 'none',
//             color: 'inherit',
//             flex: '0 0 auto',
//             cursor: 'pointer'
//           }}
//         >
//           <Avatar
//             sx={{
//               width: 50,
//               height: 50,
//               '& img': {
//                 objectFit: 'contain'
//               }
//             }}
//           >
//             <img src={logo} alt="CourseShop Logo" style={{ width: '100%', height: '100%' }} />
//           </Avatar>
//           <Typography
//             variant="h6"
//             sx={{
//               fontWeight: 'bold'
//             }}
//           >
//             CourseShop
//           </Typography>
//         </Box>


//         {user && (
//           <Box sx={{
//             display: 'flex',
//             alignItems: 'center',
//             backgroundColor: 'white',
//             borderRadius: '20px',
//             padding: '4px 15px',
//             maxWidth: '400px',
//             width: '100%',
//             margin: '0 40px'
//           }}>
//             <InputBase
//               placeholder="Tìm kiếm khóa học..."
//               inputProps={{ 'aria-label': 'search' }}
//               value={searchTerm}
//               onChange={handleSearchChange}
//               sx={{
//                 flex: 1,
//                 '& input': {
//                   padding: '8px 0'
//                 }
//               }}
//             />
//             <IconButton
//               type="submit"
//               sx={{
//                 p: '8px',
//                 '&:hover': {
//                   backgroundColor: 'rgba(0, 0, 0, 0.04)'
//                 }
//               }}
//               aria-label="search"
//             >
//               <SearchIcon />
//             </IconButton>
//           </Box>
//         )}

//         {/* User Section */}
//         <Box sx={{
//           display: 'flex',
//           alignItems: 'center',
//           gap: 2,
//           flex: '0 0 auto'
//         }}>
//           {user ? (
//             <>
//               <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
//                 {user.displayName}
//               </Typography>
//               {usertoken === "Student" && (
//                 <Button
//                   color="inherit"
//                   component={Link}
//                   to={`/orders/user/${user.userID}`}
//                   sx={{
//                     borderRadius: '20px',
//                     padding: '6px 16px',
//                     '&:hover': {
//                       backgroundColor: 'rgba(255, 255, 255, 0.1)'
//                     }
//                   }}
//                 >
//                   Đơn hàng của bạn
//                 </Button>
//               )}
//               <Button
//                 color="inherit"
//                 onClick={onLogout}
//                 sx={{
//                   borderRadius: '20px',
//                   padding: '6px 16px',
//                   '&:hover': {
//                     backgroundColor: 'rgba(255, 255, 255, 0.1)'
//                   }
//                 }}
//               >
//                 Đăng xuất
//               </Button>
//             </>
//           ) : (
//             <Button
//               color="inherit"
//               component={Link}
//               to="/login"
//               sx={{
//                 borderRadius: '20px',
//                 padding: '6px 16px',
//                 '&:hover': {
//                   backgroundColor: 'rgba(255, 255, 255, 0.1)'
//                 }
//               }}
//             >
//               Đăng nhập
//             </Button>
//           )}

//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, InputBase, Box, Avatar } from '@mui/material';
import { Search as SearchIcon, ArrowBack as ArrowBackIcon } from '@mui/icons-material'; // Import thêm icon Back
import { Link, useNavigate } from 'react-router-dom'; // Import `useNavigate` nếu cần xử lý điều hướng
import useDebounce from '../../../../Hook/useDebounce';
import logo from '../../../UserImg/logo1.png';

const Navbar = ({ onSearch, user, onLogout, usertoken }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);
  const navigate = useNavigate(); // Hook để xử lý điều hướng khi click icon Back

  useEffect(() => {
    if (debouncedSearchTerm) {
      onSearch(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm, onSearch]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
        height: '80px'
      }}>
        {/* Logo and Brand Section */}
        <Box
          component={Link}
          to={usertoken === 'Teacher' ? '/teacherPost' : '/home'}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            textDecoration: 'none',
            color: 'inherit',
            flex: '0 0 auto',
            cursor: 'pointer'
          }}
        >
          <Avatar
            sx={{
              width: 50,
              height: 50,
              '& img': {
                objectFit: 'contain'
              }
            }}
          >
            <img src={logo} alt="CourseShop Logo" style={{ width: '100%', height: '100%' }} />
          </Avatar>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold'
            }}
          >
            CourseShop
          </Typography>
        </Box>

        {user && (
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: '20px',
            padding: '4px 15px',
            maxWidth: '400px',
            width: '100%',
            margin: '0 40px'
          }}>
            <InputBase
              placeholder="Tìm kiếm khóa học..."
              inputProps={{ 'aria-label': 'search' }}
              value={searchTerm}
              onChange={handleSearchChange}
              sx={{
                flex: 1,
                '& input': {
                  padding: '8px 0'
                }
              }}
            />
            <IconButton
              type="submit"
              sx={{
                p: '8px',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)'
                }
              }}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Box>
        )}

        {/* User Section */}
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          flex: '0 0 auto'
        }}>
          {usertoken === 'Admin' && (
  <IconButton
    component={Link} // Sử dụng `Link` làm component
    to="/admin/courses" // Đường dẫn đến trang Admin Courses
    sx={{
      color: 'inherit',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)'
      }
    }}
    aria-label="Back to Admin Courses"
  >
    <ArrowBackIcon />
  </IconButton>
)}

          {user ? (
            <>
              <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                {user.displayName}
              </Typography>
              {usertoken === "Student" && (
                <Button
                  color="inherit"
                  component={Link}
                  to={`/orders/user/${user.userID}`}
                  sx={{
                    borderRadius: '20px',
                    padding: '6px 16px',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)'
                    }
                  }}
                >
                  Đơn hàng của bạn
                </Button>
              )}
              <Button
                color="inherit"
                onClick={onLogout}
                sx={{
                  borderRadius: '20px',
                  padding: '6px 16px',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }
                }}
              >
                Đăng xuất
              </Button>
            </>
          ) : (
            <Button
              color="inherit"
              component={Link}
              to="/login"
              sx={{
                borderRadius: '20px',
                padding: '6px 16px',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              Đăng nhập
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
