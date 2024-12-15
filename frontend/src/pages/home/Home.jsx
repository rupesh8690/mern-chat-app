import Sidebar from "../../components/sidebar/Sidebar.jsx"
import MessageContainer from "../../components/messages/MessageContainer.jsx"
export default function Home(){
    return(
        <div className="flex sm:h-[450px] md:h-[550px]  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
            <Sidebar />
            <MessageContainer />
        </div>
    )
}