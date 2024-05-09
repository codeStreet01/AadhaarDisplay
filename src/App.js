import React, { Component,Fragment} from 'react';
import Header from "./Components/Header/Header";
import Card from "./Components/Card/Card";
import Save from "./Components/Save/Save";

import {Typography,Grid} from '@material-ui/core';


class App extends Component {

  state={
    cards:[
      {id:'Male',name:"Nick james",description:'19/09/2002'},
      {id:'Female',name:"Carry Trump",description:'23/02/1999'}
    ],
    newPost:false,
    id:'', name:'', description:'',onUpdate:false
  }

  newPostHandler=()=>{
    this.setState({newPost:true,id:'',name:'',description:'',onUpdate:true})
  }

  homeHandler=()=>{
    this.setState({newPost:false})
  }

  deleteHandler=(cardz)=>{

    let filterCard=this.state.cards.filter( f =>f.id !== cardz.id)
    this.setState({cards: filterCard})
  }

  onEdit=(cardz)=>{
    this.setState({id:cardz.id,name:cardz.name,description:cardz.description})
    this.setState({newPost:true})

  }

  onchangeData=(event)=>{
    this.setState({[event.target.name]:event.target.value})
  }

  onSave=()=>{
    let {id,name,description}=this.state
    if (id==='' || name==='' || description==='') return alert('All Fields Are Mandatory')
    let updatedCard = {id,name,description}
    let index = this.state.cards.findIndex(f => f.id === id )
    let newCards = [...this.state.cards]
    if(index===-1) newCards.push(updatedCard)
    else newCards[index] = updatedCard
    this.setState({cards:newCards})
    this.homeHandler()
  }


  render() {
    
    let card = this.state.cards.map((cardz,index)=>{
      return (<Card 
                    del={this.deleteHandler.bind(this,cardz)} 
                    key={index}
                    id={cardz.id} 
                    name={cardz.name}
                    description={cardz.description}
                    edit={this.onEdit.bind(this,cardz)} 
              />)
    })
    let save = (<Save 
                    a={this.state.id}
                    home={this.homeHandler} 
                    b={this.state.name}
                    c={this.state.description}
                    justChange={this.onchangeData}
                    doUpdate={this.state.onUpdate}
                    doSave={this.onSave}
              />)

    return (
      <Fragment>
        <Header newpost={this.newPostHandler} />
        <Grid container>
          <Grid sm={2} item></Grid>
          <Grid sm={8} item>
            {this.state.newPost?save:card}
          </Grid>
          <Grid sm={2} item></Grid>
        </Grid>
        <Typography align='center' style={{marginTop:'2rem'}}>
            Made with <span style={{color:'red'}}>💜</span> by Vaibhav
        </Typography>
        
      </Fragment>
    );
  }
}

export default App;
