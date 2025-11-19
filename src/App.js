import React, { Component } from 'react'
import Title from './Title'
import './App.css'

export default class componentName extends Component {
    state = {
        comments:[],
        comment:'',
        name: '',
        email: ''
    }
    // assign data to the states
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    //get data from localStorage
    getData=()=>{
       
        let comments=  JSON.parse(localStorage.getItem('comments'))? 
        JSON.parse(localStorage.getItem('comments')):[];
        return comments
    }

    componentDidMount(){
     this.setState({
        comments:this.getData()
     })   
        }
       //Asynchronous data from LocalStorage 
    asyncData=()=>{
        localStorage.setItem('comments',JSON.stringify(this.state.comments))
    }

    //Handle Submit function
    handleSubmit = (e) => {

        e.preventDefault();
        let newComment={
            content :this.state.comment,
            id:Math.random()
        }
        let newComments=this.state.comments;
        newComments=[...newComments,newComment];
     
        this.setState({
            comments:newComments,
            comment:'',
            name: '',
            email: ''
        },()=>{
            this.asyncData() 
        })
    }

    //remove comments
    handleClear=(id)=>{
        this.setState(()=>{
            return{
                comments: this.state.comments.filter(item=> item.id !==id)
            }
        },()=>{
            this.getData();
            this.asyncData();
        })
    }
    render() {
        return (
            
            <div className="container my-5">
            <Title center title="Leave Us A Feedback"/>
                <div className='row'>
                    <div className="col-6 col-md-6  pt-5">
                        <form  onSubmit={this.handleSubmit} className='border-5'>
                            <div className='input-group my-5'>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Type Your Name..."
                                    onChange={this.handleChange}
                                    className='form-control'
                                    value={this.state.name}

                                />
                            </div>
                            <div className='input-group mb-5'>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Type Your Mail..."
                                    onChange={this.handleChange}
                                    className="form-control"
                                    value={this.state.email}
                                />
                            </div>

                            <textarea name="comment" className="form-control mb-5"
                                placeholder="Write Your Comment here... Remember Be Positive ^_^"
                                cols="100" rows="10"
                                onChange={this.handleChange}
                                value={this.state.comment}
                            >
                            </textarea>

                            <button disabled={this.state.comment? false :true}
                             type='submit' className="btn btn-primary btn-block btn-large">Add Feedback</button>
                        </form>
                    </div>
                    <div className="col-6 col-md-6  py-5 my-5 ">
                        <div className="right-img ">
                          
                        </div>
                    </div>
                </div>
                {this.state.comments ?<div className="  my-5">
                                    {this.state.comments.map(comment=>{
                                        return(
                                            <div className="card-body card mb-3 mx-auto">  
                                              <h3 key={comment.id}
                                            className=" text-primary text-center text-capitalize "
                                         
                                            >{comment.content} </h3>
                                            <button className="btn btn-danger" style={{width:"100px"}}  
                                              onClick={()=>this.handleClear(comment.id)}>Remove</button>
                                        </div>
 
                                        )
                                    })}
                        </div>:null}
            </div>
      
        )
    }
}
