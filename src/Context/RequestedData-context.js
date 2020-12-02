import React from "react";

// used in Dashboard Component for passing the fetched data from the API call to Section 1 and 2 
const RequestedDataContext = React.createContext();

export { RequestedDataContext as default };