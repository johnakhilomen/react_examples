import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

export default function Main(props) {
  return (
  <>
  <Container fluid style={{width: '80%', marginTop: '10%'}}>
  <Row md={10} >
    <Col xs={5}><Image roundedCircle={true} src={props.userData.avatar_url}></Image></Col>
    <Col xs={6} style={{display: 'flex', alignSelf: 'center'}}> 
    <h4>
      <br /><br />{props.userData.bio}
      <br /><br />Total Gist: {props.userData.public_gists} / Total Repos: {props.userData.public_repos}
    </h4>
    </Col>
  

  </Row>
</Container>
  
 
  </>
  )
}
