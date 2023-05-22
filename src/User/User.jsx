import  Button  from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import "./User.css"


function User(props) {
    const{id,title,firstName,lastName,picture} = props.user;
  return (
    <Col lg={4} md={6} sm={10}>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <img src={picture} alt="ProfilePic" />
            <div className='info'>
                <div> {title} {firstName} {lastName}</div>
            </div>
            <Button variant="primary">Add Friend</Button>
          </Card.Body>
        </Card>
    </Col>
  );
}

export default User;