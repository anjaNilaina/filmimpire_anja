import { makeStyles } from "@mui/styles";


export const useStyles = makeStyles((theme) => ({

    root : {
        display :'flex',
        height: '100%',
    },
    content : {
        flexGrow : 1,
        padding: "2rem",
    },
    toolbar : {
        minHeight : "64px",
    }


}));