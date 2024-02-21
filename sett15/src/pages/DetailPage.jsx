import React from 'react'
import DetailComp from '../components/DetailComp'
import Container from 'react-bootstrap/esm/Container'

export default function DetailPage() {
  return (
    <>
        <Container className='mt-4'>
            <DetailComp/>
        </Container>
    </>
  )
}
