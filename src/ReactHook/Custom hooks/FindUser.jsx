import { useState } from "react"
import GitHubUser from "./GitHubUser.jsx";

const FindUser = () => {
    const [userName, setUserName] = useState("");

    return (
        <div className="find-user flex items-center justify-center h-screen flex-col gap-10">
            <h1 className="font-bold font-sans text-[30px]">Find User</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="username"></label>
                    <input type="text"
                           placeholder="Enter Username"
                           onChange={(e) => setUserName(e.target.value)} 
                           className="rounded border-black border-2 p-2 w-[20rem]"
                           />
                </div>
            </form>

            <div className="result rounded-md border-solid border-2 p-5">
                {userName ?
                <GitHubUser username={userName} /> :
                <p>Please Initiate a Search !!! </p>

                }

            </div>
        </div>
    )

    }
export default FindUser