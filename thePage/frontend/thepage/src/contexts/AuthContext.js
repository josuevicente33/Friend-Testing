import React, { createContext, Component } from 'react';

// Create a context for authentication
const AuthContext = createContext({
  isLoggedIn: false,
  userData: null,
  setIsLoggedIn: () => {},
  setUserData: () => {}
});

// Provider class component
export class AuthProvider extends Component {
  state = {
    isLoggedIn: false,
    userData: null
  };

  // Function to update isLoggedIn state
  setIsLoggedIn = (isLoggedIn) => {
    this.setState({ isLoggedIn });
  };

  // Function to update userData state
  setUserData = (userData) => {
    this.setState({ userData });
  };

  render() {
    const { children } = this.props;
    const { isLoggedIn, userData } = this.state;

    return (
      <AuthContext.Provider 
        value={{
          isLoggedIn, 
          userData, 
          setIsLoggedIn: this.setIsLoggedIn, 
          setUserData: this.setUserData
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  }
}

// Export the context (to be used with useContext hook in functional components)
export default AuthContext;

// Export the context consumer (to be used in class components)
export const AuthConsumer = AuthContext.Consumer;
