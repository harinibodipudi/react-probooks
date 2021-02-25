import React, { Component } from 'react'
import itemslist from './itemslist.json'
export default class HomeComponent extends Component {
    constructor() {

        super();
        this.state = {
            readlist: [],
            likelist: [],
            dislikelist: [],
            listofbooks: itemslist,
            value: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (event) => {
        this.setState({ value: event.target.value });
        console.log(this.state.value)
    }

    handleSubmit = (name, imgtobeadded, event) => {
        const nametobeadded = name
        const choice = this.state.value;
        if (choice == "read") {
            console.log("entered read if condition")
            this.setState({
                readlist: this.state.readlist.concat({ name: nametobeadded, imgurl: imgtobeadded })
            })
        }
        if (choice == "like") {
            this.setState({
                likelist: this.state.likelist.concat({ name: nametobeadded, imgurl: imgtobeadded })
            })
        }
        if (choice == "dislike") {
            this.setState({
                dislikelist: this.state.dislikelist.concat({ name: nametobeadded, imgurl: imgtobeadded })
            })
        }
        console.log(nametobeadded);
        console.log(imgtobeadded)
        console.log(choice)
        event.preventDefault();
    }

    render() {
        const data = this.state.listofbooks;
        const maprows = data.map(items => {
            return (<div className="items" key={items.name}>
                <h3>{items.name}</h3>
                <img src={items.imgurl} alt={items.name} width={100} height={100} />
                <form onSubmit={(e) => this.handleSubmit(items.name, items.imgurl, e)}>
                    <label>
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="read">Read</option>
                            <option value="like">Like</option>
                            <option value="dislike">Dislike</option>
                        </select>
                    </label>
                    <input type="submit" value="submit" />
                </form>

            </div>)
        })
        const readitems = this.state.readlist.map(items=>{
            return(
                <div className="items" key={items.name}>
                <h3>{items.name}</h3>
                <img src={items.imgurl} alt={items.name} width={100} height={100} />
                <form onSubmit={(e) => this.handleSubmit(items.name, items.imgurl, e)}>
                    <label>
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="read">Read</option>
                            <option value="like">Like</option>
                            <option value="dislike">Dislike</option>
                        </select>
                    </label>
                    <input type="submit" value="submit" />
                </form>

            </div>)
        })
        const likeditems = this.state.likelist.map(items=>{
            return(
                <div className="items" key={items.name}>
                <h3>{items.name}</h3>
                <img src={items.imgurl} alt={items.name} width={100} height={100} />
                <form onSubmit={(e) => this.handleSubmit(items.name, items.imgurl, e)}>
                    <label>
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="read">Read</option>
                            <option value="like">Like</option>
                            <option value="dislike">Dislike</option>
                        </select>
                    </label>
                    <input type="submit" value="submit" />
                </form>

            </div>)
        })
        const dislikeditems = this.state.dislikelist.map(items=>{
            return(
                <div className="items" key={items.name}>
                <h3>{items.name}</h3>
                <img src={items.imgurl} alt={items.name} width={100} height={100} />
                <form onSubmit={(e) => this.handleSubmit(items.name, items.imgurl, e)}>
                    <label>
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="read">Read</option>
                            <option value="like">Like</option>
                            <option value="dislike">Dislike</option>
                        </select>
                    </label>
                    <input type="submit" value="submit" />
                </form>

            </div>)
        })
        return (
            <div className="main-component">
                <h1>Prograd</h1>
                <h2>Reading
                    {readitems}
                </h2>
                <h2>Liked
                    {likeditems}
                </h2>
                <h2>Disliked
                    {dislikeditems}
                </h2>
                <div className="items-list">
                    {maprows}
                </div>
            </div>
        )
    }
}
