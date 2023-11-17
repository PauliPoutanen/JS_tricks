import { useNavigate } from "react-router-dom";

const About = (props) => {


    const navigate = useNavigate()
    return (
        <div>
 <p>This is navigate to secret place</p>
 <button onClick={()=> navigate("/secret")}>Go To Secret</button>


        </div>

       
    )
}
export default About