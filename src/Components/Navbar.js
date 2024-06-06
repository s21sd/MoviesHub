import * as React from 'react';
import { styled, useTheme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import axios from 'axios';
import Dashboard from './Dashboard';
import Card from '../Cards/Card';
import { useNavigate } from 'react-router-dom';
import LoopIcon from '@mui/icons-material/Loop';
const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));




export default function Navbar() {

    const navigate = useNavigate();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [apiRes, setApiRes] = React.useState([])
    const [searchVal, setSearchVal] = React.useState('')
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    // Handling API Search for on the button click 🚀
    const handleSearch = async () => {
        const options = {
            method: 'GET',
            url: 'https://movies-api14.p.rapidapi.com/search',
            params: {
                query: `${searchVal}`
            },
            headers: {
                'x-rapidapi-key': '720245f4bfmsha05ea578a776e3dp123fd5jsn247d215c36ba',
                'x-rapidapi-host': 'movies-api14.p.rapidapi.com'
            }
        };
        try {
            const response = await axios.request(options);
            console.log(response.data.contents);
            setApiRes(response.data.contents)
        } catch (error) {
            console.error(error);
        }
    }
    // Handling API Search for on the Change in the input box 🚀😊
    React.useEffect(() => {
        handleSearch()
    }, [searchVal])

    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" open={open}>
                    <Toolbar sx={{ backgroundColor: 'blue', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                sx={{
                                    marginRight: 3,
                                    ...(open && { display: 'none' }),
                                }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography style={{
                                cursor: 'pointer'
                            }} onClick={() => navigate('/')} variant="h6" noWrap component="div">
                                MoviesHub
                            </Typography>
                        </Box>

                        <Search sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignContent: 'center'
                        }} >
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                                value={searchVal}
                                onChange={(e) => setSearchVal(e.target.value)}
                            />
                            <div onClick={handleSearch}>
                                <SearchIcon style={{ marginTop: 10, cursor: 'pointer' }} fontSize='large' />
                            </div>
                        </Search>

                    </Toolbar>

                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <DrawerHeader sx={{ backgroundColor: 'blue' }}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon style={{ fill: '#ffffff' }} />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>
                        {['Home', 'About', 'Contact us', 'Profile'].map((text, index) => (
                            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {index == 0 && <div onClick={() => navigate('/')} > <HomeIcon style={{ fill: '#0072ea' }} /></div>}
                                        {index == 1 && <div onClick={() => navigate('/about')}>
                                            <InfoIcon style={{ fill: '#0072ea' }} />
                                        </div>}
                                        {index == 2 && <div onClick={() => navigate('/contact')}><ContactMailIcon style={{ fill: '#0072ea' }} /></div>}
                                        {index == 3 && <div onClick={() => navigate('/profile')}><AccountCircleIcon style={{ fill: '#0072ea' }} /></div>}
                                    </ListItemIcon>
                                    <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <DrawerHeader />
                </Box>

            </Box>
            {/* // Condition Rendering at the time of api call  🚀😊 */}
            {

                searchVal.length > 0 ?
                    <div>
                        {
                            apiRes.length > 0 ? <></> : <div style={{   /* // Again Condition Rendering while the movies are loading just showing a loading text and a Icon  🚀😊 */
                                display: 'flex', alignItems: 'center',
                                marginLeft: 100, justifyContent: 'center', gap: 10,
                            }} >
                                <h1>Loading...</h1>
                                <LoopIcon fontSize='large' />
                            </div>
                        }
                        <div style={{
                            display: 'flex', flexWrap: 'wrap', alignItems: 'center',
                            marginLeft: 100, justifyContent: 'space-between', marginTop: '20px', marginRight: '60px', gap: 10
                        }}>
                            {apiRes?.map((movie, index) => (
                                <Card key={index} movie={movie} />
                            ))}
                        </div>
                    </div> :
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: 130,

                    }}>

                        {/* // Dashboard Page */}
                        <Dashboard />

                    </div>

            }

        </div>

    );
}
