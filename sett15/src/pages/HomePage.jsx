import React from 'react'
import MyNavbar from '../components/MyNavbar'
import Post from '../components/Post'
import Container from 'react-bootstrap/esm/Container'

export default function HomePage() {
  return (
    <>
        <MyNavbar />
        <Container className='mt-4'>
        <Post />
        </Container>
    </>
  )
}