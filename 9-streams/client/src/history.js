// when ever we talk about history object...it is actually a sepreate library that "reac-router-dom" depends upon...we dont have to download on our mown
// if we pass this histort object...in BrowserRouter as props...it will show error....{it will say..."<BrowserRouter"}
// now we hav to create "plain browser" instead of "browserRouter"
// we will import "Router" instead of BrowserRouter
// there will be no change in routing..but now we are in contol of "history " object istead id react-router-dom
import { createBrowserHistory } from 'history'; 
export default createBrowserHistory();