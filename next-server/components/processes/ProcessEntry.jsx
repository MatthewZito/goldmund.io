import React from 'react';
import Router from 'next/router'
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import SidebarNavigator from "../Navigation/SidebarNavigator.jsx";

class ProcessEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data !== null ? this.props.data : { title: "", subtitle: "", imgsrc: "", content: "", deleted: false },
            editMode: this.props.data !== null ? true : false,
            redirectPath: "",
            redirect: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.radioToggle = this.radioToggle.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        try {
            let response = await fetch(`http://localhost:5000/entry/${this.state.editMode ? this.state.data._id : "new"}`, { method: this.state.editMode ? "PATCH" : "POST", body: data })
            const slugResponse = await response.text();
            if (response.status === 201) {
                this.setState({ redirect: true, redirectPath: `/entry/${slugResponse}`});
            } else {
                this.setState({ redirect: true, redirectPath: "/"});
            }
            Router.push(`${this.state.redirectPath}`);
        } catch(err) {
            console.log(err);
        }
    }

    stringToBool(value) {
        if (value && typeof value === 'string') {
            if (value.toLowerCase() === "true") return true;
            if (value.toLowerCase() === "false") return false;
        }
        return value;
     }

    radioToggle(event) {
        this.setState({ 
            data: { 
                ...this.state.data, 
                deleted: this.stringToBool(event.currentTarget.value),
            },
        });
      }

    render() {
        let { data } = this.state
        let { deleted } = data
        return (
            <div>
                <SidebarNavigator name="$ su -"/>
                <main className="" id="main-collapse">
                    <div className="container">
                        <h1>Process Entry</h1>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input required defaultValue={data.title} type="text" name="title" id="title" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="subtitle">Subtitle</label>
                                <textarea required name="subtitle" id="subtitle" defaultValue={data.subtitle} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="imgsrc">Image URL</label>
                                <textarea required name="imgsrc" id="imgsrc" defaultValue={data.imgsrc} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="content">Content</label>
                                <textarea required name="content" id="content" defaultValue={data.content} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="deleted">Set deleted?</label>
                                <input name="deleted" type="radio" value="true" checked={deleted === true} onChange={this.radioToggle} />Yes
                                <input name="deleted" type="radio" value="false" checked={deleted === false} onChange={this.radioToggle} />No
                            </div>
                            <Link href="/">
                                <button className="btn btn-secondary">Cancel</button>
                            </Link>
                            <button type="submit" className="btn btn-primary">Save</button>
                        </form>
                    </div>
                </main>
            </div>
        );
    }
}
export default ProcessEntry;