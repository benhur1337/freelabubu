import { Title } from "@/components/aboutus"

export default function () {
    return (
        <div>
            <Title>Payment form</Title>
            <div>Full Name: </div>
            <input type="text" id="fname" name="firstname" placeholder="Your Name"></input><br></br>
            <label for="cardnumber">Card Number: </label>
            <input type="text" id="cardnumber" name="cardnumber" placeholder="XXXX XXXX XXXX XXXX"></input><br></br>
        </div>
    )
}