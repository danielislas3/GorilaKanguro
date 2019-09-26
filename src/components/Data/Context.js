import React from 'react';

const DataContext = React.createContext(89);

export const withData = Component => props => (
    <DataContext.Consumer>
        {   
            data => <Component {...props} data={data} /> 
        }
    </DataContext.Consumer>
);

export default DataContext;

console.log('withData and DataContext before export')
console.log('withData')
console.log(withData)

console.log('DataContext')
console.log(DataContext)