import React from 'react'
import MyNavbar from '../components/MyNavbar'
import DetailComp from '../components/DetailComp'

export default function DetailPage() {
  return (
    <>
        <MyNavbar/>
        <Container>
            <DetailComp/>
        </Container>
    </>
  )
}
