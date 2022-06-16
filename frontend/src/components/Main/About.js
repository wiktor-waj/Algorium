import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@emotion/react';
import { GitHub } from '@mui/icons-material';
import { Button } from '@mui/material';

function AuthorsList() {
    const auth = [
        {
            avatar: "https://camo.githubusercontent.com/6b6f6c9b6ea3a40a65c9af586f207e10d77beecf258ee32a4134b732d2bf4953/68747470733a2f2f6769746c61622e636f6d2f75706c6f6164732f2d2f73797374656d2f757365722f6176617461722f373631373734362f6176617461722e706e673f77696474683d343030",
            name: "Jakub Kamiński",
            role: "Lider zepołu, Backend",
        },
        {
            avatar: "https://camo.githubusercontent.com/ca96fc3ea161e9e4375313c7061ddc5e8748fa1cbdea08e579b27391579a51ef/68747470733a2f2f7365637572652e67726176617461722e636f6d2f6176617461722f36323630303236353932323835343031353564663666313532326662343630623f733d38303026643d6964656e7469636f6e",
            name: "Wiktor Wajszczuk",
            role: "DevOps",
        },
        {
            avatar: "https://camo.githubusercontent.com/6c07e66ea96ff5fc2e5a6580034f0a270fa864c808f43f198f06c121c75ce1af/68747470733a2f2f7365637572652e67726176617461722e636f6d2f6176617461722f30366566646137353239653335386630653163353964386365653330326139623f733d38303026643d6964656e7469636f6e",
            name: "Marcin Stefanowicz",
            role: "Frontend",
        },
        {
            avatar: "https://camo.githubusercontent.com/7c3dddab3c842296757dfbeca326db9531de4fa923962765e4b4f1834ba8f13a/68747470733a2f2f636c69706172742e696e666f2f696d616765732f63636f766572732f3135323238353235343134322d6361742d706e672d696d6167652d646f776e6c6f61642d706963747572652d6b697474656e2e706e67",
            name: "Mariia Sydor",
            role: "Frontend",
        },
        {
            avatar: "https://camo.githubusercontent.com/c132cb68d2763076ddd86b59ee9b0e4aa4a131c1b3f5ef0738524f18ad986945/68747470733a2f2f7365637572652e67726176617461722e636f6d2f6176617461722f39353161393239353837623065393932363032666631656535303138356662343f733d38303026643d6964656e7469636f6e",
            name: "Klaudia Bielak",
            role: "Backend",
        },
        {
            avatar: "https://camo.githubusercontent.com/d76176680d1b2dd2a09a7a432e1a3579b060d545efacd50f037ff18061be5d90/68747470733a2f2f636c69706172742e696e666f2f696d616765732f63636f766572732f31353033363838353834437574652d446f672d466163652d504e472d496d6167652e706e67",
            name: "Mateusz Gruszkiewicz",
            role: "Tester",
            stop: true,
        },
    ];

    const theme = useTheme();
    const h_style = { textAlign: 'center', marginBottom: "25px", fontWeight: 'light', color: theme.palette.mode === "dark" ? "#fff" : "#444" };

    return (
        <div style={{ textAlign: 'center', justifyContent: "center" }}>
            <Typography variant="h4" gutterBottom sx={h_style} component="div">
                Nasz zespół
            </Typography>

            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', borderRadius: "10px", marginLeft: "auto", marginRight: "auto", marginTop: "25px", marginBottom: "45px" }}>
                {auth.map((os) => (
                    <>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt={os.name} src={os.avatar} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={
                                    <Typography color="text.primary">{os.name}</Typography>
                                }
                                secondary={
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {os.role}
                                    </Typography>
                                }
                            />
                        </ListItem>

                        {!os.stop ? <Divider variant="inset" component="li"></Divider> : <></>}
                    </>
                ))}
            </List>

            <Typography variant="h4" gutterBottom sx={h_style} component="div">
                Źródła
            </Typography>

            <a href="https://github.com/wiktor-waj/Algorium" rel="noreferrer" target={"_blank"} style={{ textDecoration: "none" }}>
                <Button variant="outlined" style={{ margin: "5px", textDecoration: "none" }} startIcon={<GitHub />}>
                    Repozytorium w serwisie GitHub
                </Button>
            </a>
        </div>
    );
}

export default function AboutInfo() {
    return <>
        <AuthorsList></AuthorsList>
    </>;
}

