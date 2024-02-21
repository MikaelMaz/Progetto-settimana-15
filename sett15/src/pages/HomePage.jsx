import React from 'react'
import Post from '../components/Post'
import Container from 'react-bootstrap/esm/Container'

export default function HomePage() {
  return (
    <>
        <Container className='mt-4'>
        <Post />
        </Container>
    </>
  )
}