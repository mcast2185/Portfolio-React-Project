import React, { Component } from 'react';
import axios from 'axios';
import ReactHtmlParser from "react-html-parser"

import BlogFeaturedImage from "../blog/blog-featured-image"
import BlogForm from '../blog/blog-form';

export default class BlogDetail extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentId: this.props.match.params.slug,
      blogItem: {},
      editMode: false
    }

    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleFeaturedImageDelete = this.handleFeaturedImageDelete.bind(this);
    this.handleUpdateFormSubmission = this.handleUpdateFormSubmission.bind(this);
  }

  handleUpdateFormSubmission(blog) {
    this.setState({
      blogItem: blog,
      editMode: false
    })
  }

  handleFeaturedImageDelete() {
    this.setState({
      blogItem: {
        featured_image_url: ""
      }
    })
  }

  handleEditClick() {
    if (this.props.loggedInStatus === "LOGGED_IN"){
      this.setState({ editMode: true});
    }
  }

  getBlogItem() {
    axios
      .get(`https://mcast2185.devcamp.space/portfolio/portfolio_blogs/${this.state.currentId}`)
      .then(response => {
        this.setState({
          blogItem: response.data.portfolio_blog
        })
      })
      .catch(error => {
        console.log("blog item error", error);
      })
  }

  componentDidMount() {
    this.getBlogItem();
  }

  render() {
    const {
      title,
      content,
      featured_image_url,
      blog_status
    } = this.state.blogItem;

    const contentManager = () => {
      if (this.state.editMode) {
        return (
          <BlogForm 
            handleFeaturedImageDelete={this.handleFeaturedImageDelete}
            handleUpdateFormSubmission={this.handleUpdateFormSubmission} 
            editMode={this.state.editMode} 
            blog={this.state.blogItem}
          />
        )
      } else {
        return (
          <div className='content-container'>
            <h2 onClick={this.handleEditClick}> {title} </h2>
            <BlogFeaturedImage img={featured_image_url}/>
            <div className='content'>
              {ReactHtmlParser(content)}
            </div> 
          </div>
        )
      }
    }
    
    return (
      <div className="blog-container">
        {contentManager()}
      </div>
    )
  }
}
