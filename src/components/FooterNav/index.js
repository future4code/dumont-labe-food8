import React from 'react'
import { BottomNav } from './style'
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import { Route, useHistory } from 'react-router-dom';
import { goToCart, goToHome, goToProfile } from '../../routes/coordinator';


const useStyles = makeStyles({
    root: {
        width: 400,
    },
});

const FooterNav = () => {
    const history = useHistory()

    const classes = useStyles();
    const [value, setValue] = React.useState(0);


    return (
        <Route exact path={["/home", "/carrinho", "/perfil", "/restaurante/:id"]}>
            <BottomNav>

                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    showLabels
                    className={classes.root}
                >
                    <Route exact path={["/home"]}>
                        <BottomNavigationAction onClick={() => goToHome(history)} icon={<HomeIcon color="primary" style={{ fontSize: 40 }} />} />
                    </Route>
                    <Route exact path={["/carrinho", "/perfil", "/restaurante/:id"]}>
                        <BottomNavigationAction onClick={() => goToHome(history)} icon={<HomeIcon color="action" style={{ fontSize: 40 }} />} />
                    </Route>
                    <Route exact path={["/carrinho"]}>
                        <BottomNavigationAction onClick={() => goToCart(history)} icon={<ShoppingCartIcon color="primary" style={{ fontSize: 40 }} />} />
                    </Route>
                    <Route exact path={["/home", "/perfil", "/restaurante/:id"]}>
                        <BottomNavigationAction onClick={() => goToCart(history)} icon={<ShoppingCartIcon color="action" style={{ fontSize: 40 }} />} />
                    </Route>
                    <Route exact path={["/perfil"]}>
                        <BottomNavigationAction onClick={() => goToProfile(history)} icon={<PersonIcon color="primary" style={{ fontSize: 40 }} />} />
                    </Route>
                    <Route exact path={["/home", "/carrinho", "/restaurante/:id"]}>
                        <BottomNavigationAction onClick={() => goToProfile(history)} icon={<PersonIcon color="action" style={{ fontSize: 40 }} />} />
                    </Route>
                </BottomNavigation>

            </BottomNav>
        </Route>


    )
}

export default FooterNav