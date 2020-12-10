import React from 'react'
import { BottomNav } from './style'
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import { Route } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
        width: 400,
    },
});

const FooterNav = () => {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);


    return (
        <Route exact path={["/home", "/carrinho", "/perfil"]}>
            <BottomNav>

                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    showLabels
                    className={classes.root}
                >
                    <BottomNavigationAction icon={<HomeIcon style={{ fontSize: 40 }} />} />
                    <BottomNavigationAction icon={<ShoppingCartIcon style={{ fontSize: 40 }} />} />
                    <BottomNavigationAction icon={<PersonIcon style={{ fontSize: 40 }} />} />
                </BottomNavigation>

            </BottomNav>
        </Route>


    )
}

export default FooterNav