import React, { useEffect } from "react";
import { Container, Card } from "react-bootstrap";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { url } from "../data/data.js";

export default function DetailComp() {
  const [post, setPost] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(url + `posts/${id}?_embed`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, []);
  console.log(post);

  return (
    <Container fluid>
      {post.title && (
        <Card>
          <Card.Body>
            <Card.Img variant="top" src={post._embedded["wp:featuredmedia"][0].source_url} />
            <Card.Title className="fs-2">{post.title.rendered}</Card.Title>
            <Card.Text>{post.yoast_head_json.author} | {post.date.slice(0, -9)}</Card.Text>
            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            <Card.Text>
            <span dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}/>
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
}