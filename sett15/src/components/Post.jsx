import React, { useEffect, useState } from "react";
import { url } from "../data/data.js";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container.js";

export default function MyPost() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    fetch(url + "posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter((post) =>
        post.title.rendered.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPosts(filtered);
    }
  }, [searchTerm, posts]);

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div>
      <Form.Group className="mb-3" onSubmit={handleSearch}>
        <Form.Control type="text"
              placeholder="Cerca..."
              className=" mr-sm-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}/>
      </Form.Group>
        <div className="d-flex flex-wrap justify-content-center justify-items-start">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Card
              key={post.id}
              className="col-lg-3 col-md-5 col-sm-12 mx-lg-1 mx-md-2 mx-sm-1 my-1"
              style={{ minHeight: "22rem" }}
            >
              <Card.Img variant="top" src={post.yoast_head_json.og_image[0].url} />
              <Card.Body>
                <Card.Title>{post.title.rendered}</Card.Title>
                <Card.Text>
                  <span
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  />
                </Card.Text>
                <Card.Text className="text-muted mb-5">
                {post.date.slice(0, -9)}
                </Card.Text>
                <Button variant="primary position-absolute bottom-0 start-0">
                  Scopri di più
                </Button>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>Nessun risultato.</p>
        )}
        </div>
      </div>
    </>
  );
}