//this will story our collections object , the massive object that holds our collection items
import { createContext } from "react"; //method that can take anything (strings/objects/ints...etc) 
import SHOP_DATA from "./shop.data";

const ColectionsContext = createContext(SHOP_DATA); //INITIAL VALUE OF OUR CONTEXT

export default ColectionsContext;