import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencil} from "@fortawesome/free-solid-svg-icons";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";

const ChatInput = () => {
    return (
        <div className={"chat-input-group"}>
            <form className="form-group">
                <input type="text"/>
                <button type={"submit"} className="send-btn">
                    <FontAwesomeIcon icon={faPaperPlane}/>
                </button>
            </form>
        </div>
    )
}
export default ChatInput;