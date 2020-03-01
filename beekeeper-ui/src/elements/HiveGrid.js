import React, { useState, useEffect } from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import Hive from './Hive'


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginTop: 10,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

export default function HiveGrid() {
    const [hiveList, setHiveList] = useState([]);

    useEffect(() => {
        fetch("mock_data.json")
            .then(res => res.json())
            .then(
                (result) => {
                    setHiveList(result.hiveList);
                },
                (error) => {
                    console.trace(error);
                }
            );
    });

    const classes = useStyles();

    return (
        <Grid container spacing={2} className={classes.root}>
            <Grid item>
                <Grid container spacing={2}>                    
                        {hiveList.map((e, idx) =>
                            <Grid item spacing={2}>
                                <Hive key={idx} name={e.name} frames={e.frames} />
                            </Grid>
                        )}                    
                </Grid>
            </Grid>
        </Grid>
    )

}