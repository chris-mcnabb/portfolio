import "./contact.css"
import {useState} from "react";
import { send } from 'emailjs-com';
const Contact =  () => {

    const [isActive, setIsActive] = useState(false);
    const [value, setValue] = useState("");
    const [message, setMessage] = useState("");

    const handleChange = (e) =>{
        e.preventDefault()
        setValue({...value, [e.target.name]: e.target.value});
        if (e.target.value !== '') {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newMessage = {
            from_name: value.name,
            to_name: "Happy Dog",
            reply_to: value.email,
           message: message,
        }
        send(
            'service_7fgqof1',
            'template_27syyte',
            newMessage,
            'user_PdtxQFN9MXFGwTVE3iQDq'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
        setValue({name:"", email: ""})
    setMessage("")
        setIsActive(false)

    }
    console.log(message)

    return (
        <div className="contact" id="contact">
            <h1 className="contactTitle">Contact</h1>
            <form  className="contactForm">
                <div className="contactItem">
                    <label className={isActive ? "active" : ""}>Full Name</label>
                    <input type="text" value={value.name}  name="name"  onChange={handleChange}/>
                </div>
                <div className="contactItem">
                    <label className={isActive ? "active" : ""}>Email Address</label>
                    <input
                        type="email"
                        required
                        value={value.email} name="email"  onChange={handleChange}/>
                </div>
                <div className="contactItem">
                    <label className={isActive ? "active" : ""}>Your Message</label>
                    <textarea
                        className="chatMessageInput"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    > </textarea>
                </div>

                <button className="contactButton" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
};

export default Contact;
