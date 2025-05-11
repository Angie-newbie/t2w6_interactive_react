import { Outlet } from "react-router-dom";



export function BaseLayout(){
    return(
        <>
            <header>
                <nav>
                    <h1>Header here</h1>

                </nav>

            </header>

            <Outlet>

            </Outlet>

            <footer>
                Copyright
                
            </footer>
        
        </>
    )
}