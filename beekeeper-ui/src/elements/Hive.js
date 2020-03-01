import React from 'react';
import { makeStyles } from '@material-ui/styles'
import { Paper, Typography, Card, CardContent, List, ListItem } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
    paper: {
        minWidth: 200,
    },
    pos: {
        marginBottom: 12,
    },
});

function Hive(props) {
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title}>{props.name}</Typography>
                    <List>
                        {props.frames.map(f => <ListItem button>
                            <Typography>{f.type}</Typography>
                        </ListItem>)}
                    </List>
                </CardContent>
            </Card>
        </Paper>
    );
}

export default Hive;