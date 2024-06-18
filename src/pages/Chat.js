import List from "../components/List";
import ChatInput from "../components/ChatInput";
import Login from "./Login";
import {faEllipsisVertical} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Chat = () => {
    return (
        <>
        <div className={"chat-container"}>
            <div className="column">
                <section className="user-list">
                    <div className="title">Recent conversation</div>
                    <List isActive={"active"}/>
                    <List isActive={""}/>
                    <List isActive={""}/>
                    <List isActive={""}/>
                    <List isActive={""}/>
                    <List isActive={""}/>
                    <List isActive={""}/>
                    <List isActive={""}/>
                    <List isActive={""}/>
                    <List isActive={""}/>
                    <List isActive={""}/>
                    <List isActive={""}/>
                    <List isActive={""}/>
                    <List isActive={""}/>
                    <List isActive={"active"}/>
                </section>
                <section className="chat-content">
                    <div className="menu"><FontAwesomeIcon className={"icon"}  icon={faEllipsisVertical}/></div>
                    <div className="discussions">
                    </div>
                    <div className="input-send">
                        <ChatInput/>
                    </div>
                </section>
                {/*<section className="chat-option">*/}
                {/*    sdfasdffasd*/}
                {/*</section>*/}
            </div>
        </div>
        </>
    )
}
export default Chat