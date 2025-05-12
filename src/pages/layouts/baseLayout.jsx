import { Link, Outlet } from "react-router-dom";



export function BaseLayout(){
    return(
        <>
            <header>
                 <h1>
                        Cool Pokemon Web
                 </h1>
                <nav>
                    <li>
                        <Link to={"/"}>
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link to={"/about"}>
                            About
                        </Link>
                    </li>

                    <li>
                        <Link to={"/pokemon"}>
                            Pokemon Search
                        </Link>
                    </li>

                </nav>

            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                Copyright
                
            </footer>
        
        </>
    );
}