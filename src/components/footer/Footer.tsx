import EmailIcon from '@mui/icons-material/Email';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RestoreIcon from '@mui/icons-material/Restore';
import { Avatar, Grid, Link } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import * as React from 'react';

import logo from 'img/logo.png';

const Footer = () => {
  // const [value, setValue] = React.useState(0);

  return (
    // <Box sx={{ width: 500 }}>
    //     <BottomNavigation
    //         showLabels
    //         value={value}
    //         onChange={(event, newValue) => {
    //             setValue(newValue);
    //         }}
    //     >
    //         <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
    //         <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
    //         <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    //     </BottomNavigation>
    // </Box>
    <footer>
      <Box px={{ xs: 3, sm: 10 }} py={{ xs: 2, sm: 5 }} bgcolor="#000" color="white">
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <Avatar sx={{ width: 90, height: 90 }} src={logo} />
            </Grid>
            <Grid item xs={2}>
              <Box sx={{ marginBottom: 1 }}>О нас</Box>
              <Box>
                <Link href="/" color="inherit">
                  FAQ
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Контакты
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Поддержка
                </Link>
              </Box>
            </Grid>
            <Grid item xs={2} md={2}>
              <Box sx={{ marginBottom: 1 }}>Аккаунт</Box>
              <Box>
                <Link href="/" color="inherit">
                  Войти
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Регистрация
                </Link>
              </Box>
            </Grid>
            <Grid item xs={2} md={2}>
              <Box sx={{ marginBottom: 1 }}>Каталог</Box>
              <Box>
                <Link href="/" color="inherit">
                  какая-то категория
                </Link>
              </Box>
            </Grid>
            <Grid item xs={2} md={2}>
              <Box sx={{ marginBottom: 1 }}>Мастерская</Box>
              <Box>
                <Link href="/" color="inherit">
                  какая-то категория
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} md={12}>
              <Box sx={{ marginBottom: 1 }} borderBottom={1} />
            </Grid>
            <Grid container xs={6}>
              <Grid item xs={1}>
                <Avatar sx={{ width: 45,
height: 45,
background: 'blue' }}>VK</Avatar>
              </Grid>
              <Grid item xs={1}>
                <Avatar sx={{ width: 45,
height: 45,
background: 'blue' }}>Tg</Avatar>
              </Grid>
            </Grid>
            <Grid container item xs={6}>
              <Grid item xs={7}></Grid>
              <Grid item xs={5}>
                <Box sx={{ marginBottom: 1,
display: 'flex',
flexDirection: 'flex-end' }}>
                  <LocalPhoneIcon sx={{ width: 14, height: 17, paddingRight: 1 }} /> 7-777-777-77-77
                </Box>
                <Box sx={{ marginBottom: 1,
display: 'flex',
flexDirection: 'flex-end' }}>
                  <EmailIcon sx={{ width: 14, height: 17, paddingRight: 1 }} /> 123456@gmail.com
                </Box>
                <Box sx={{ marginBottom: 1,
display: 'flex',
flexDirection: 'flex-end' }}>
                  <LocationOnIcon sx={{ width: 14, height: 17, paddingRight: 1 }} /> ул. Пушкина д. Колотушкина
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            IN GLUE WE TRUST &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
