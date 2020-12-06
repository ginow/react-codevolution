import React from 'react'
const UserContext = React.createContext('defaultValueText')
const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer
export { UserProvider, UserContext, UserConsumer }
export default UserContext