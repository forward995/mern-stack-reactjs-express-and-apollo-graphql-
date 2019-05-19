import React, {Component} from 'react'
import { withPosts } from '../providers'
import { PostList, PostForm } from '../components'

import { Container, Row, Col } from 'reactstrap'
import '../styles/styles.css'

@withPosts
class PostRoot extends Component {
    render() {
        const { posts, postsLoading } = this.props
        return(
            <Container>
                <h2 className="posts-title">Posts Module</h2>
                <hr />
                <Row>
                    <Col>
                        <PostList postsLoading={postsLoading} posts={posts}/>
                    </Col>
                    <Col>
                        <PostForm />
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default withPosts(PostRoot);