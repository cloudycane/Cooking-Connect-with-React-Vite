import { useAuth0 } from "@auth0/auth0-react";
 
const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    if (!isAuthenticated) {
        return (
            <div className="center-button">
            <button className="btn btn-primary loginBtn"
            onClick={() => loginWithRedirect()} >
            <h2>Log In / Sign Up</h2></button>
            </div>
        );
    }
};
 
export default LoginButton;