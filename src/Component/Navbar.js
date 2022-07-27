import { Link,useMatch, useResolvedPath } from "react-router-dom"
import { FaSearch, FaRunning, FaShoppingCart} from "react-icons/fa";

//we useMatch to compare the current path that we are on to whatever path we want
//useresolvedpath allows you to take a relative or absoulte path, combines it with current path and gives you the actual full path you would be accessing
export default function Navbar(){
    return (<nav className= 'nav'>

{/* <searchBar className='search'>
<input className="input"/>
    <FaSearch/>
</searchBar> */}

        <h1 className="site-title"><span className='red'>Gym</span>Rat<FaRunning/></h1>


<ul >
    
<Link className='align'to="/home">HOME</Link>
<Link className='align'to="/products">PRODUCTS</Link>
<Link className='align'to="/contact">CONTACT</Link>

<div className='align'>
< FaShoppingCart/>
</div>
</ul>





    </nav>
) }

