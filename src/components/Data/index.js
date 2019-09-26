
import DataContext, { withData } from './Context';
import Data from './Data';

export default Data;

export { DataContext, withData };

console.log('withData and DataContext AFTER export')
console.log('withData')
console.log(withData)

console.log('DataContext')
console.log(DataContext)
