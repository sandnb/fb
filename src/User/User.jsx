import  Button  from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import "./User.css"


function User(props) {
    const{id,title,firstName,lastName,picture} = props.user;
  return (
    <Col lg={4} md={6} sm={10}>
        <Card className='user mb-3 card'>
          <Card.Body className='d-flex justify-content-between'>
            <img src={picture} alt="ProfilePic" className='img'/>
            <div className='d-flex flex-column justify-content-around'>
                <div className='mb-3'> {title} {firstName} {lastName}</div>
            </div>
            <Button variant="primary">Add Friend</Button>
          </Card.Body>
        </Card>
    </Col>
  );
} 

export default User;