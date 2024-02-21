import React from 'react'
import MyUsers from '../components/MyUsers'
import Container from 'react-bootstrap/esm/Container'


export default function UsersPage() {
  return (
    <>
        <Container className='mt-4'>
            <MyUsers/>
        </Container>
    </>
  )
}