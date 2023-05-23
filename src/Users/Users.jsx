import axios from "axios";
import { useEffect, useState } from "react";
import User from "../User/User"
import { Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
function Users() {
    const [users , setUsers] = useState([]);
    const [searchQuery] = useSearchParams();
    useEffect(() => {
        const URL = "https://dummyapi.io/data/v1/user?limit=10";
    (async()=> {
        const {data} = (await axios.get(URL, {
            headers:{"app-id":"6450dca9caedebc0caec21a1"}})).data;
            setUsers(data);
    })()

},[])
const searchTerm = searchQuery.get("search");
console.log(searchTerm);
return (
    <Container fluid>
        <Row>
            {users.filter(({firstName,lastName}) =>{
                // return firstName.toLowerCase().includes(searchTerm) || lastName.toLowerCase().includes(searchTerm)
                return (firstName + lastName).toLowerCase().includes(searchTerm) // above line also doing thr same but this is more compact way to write the code
            }).map(user => <User key={user.id} user= {user}/>)};
        </Row>
    </Container>
    
)
}

export default Users