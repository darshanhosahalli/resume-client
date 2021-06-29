import React from 'react';

class JobBoard extends React.Component {

    constructor(props) {
        super(props);
        this.state = { jobs: [ ] };
        this.defaultJob = { jobTitle: '', description: ''};
    }

    addJob = () => {
        this.setState({ jobs: this.state.jobs.concat(this.defaultJob) });
    }

    renderJobs = () => {
        return this.state.jobs.map((item, index) => {
            return <div class="comments">
                <div class="content">
                    <a class="author">Associate Software Engineer</a>
                    <div class="metadata">
                        <span class="date">from 2020 to present</span>
                    </div>
                    <div class="text">
                        Desription
                    </div>
                </div>
            </div>
        });
    }
    
    render() {
        console.log('state',this.state);
        return <div class="comments">
                    {this.renderJobs()}
                    <div class="comment">
                        <div class="content">
                            <a onClick={this.addJob} class="author">Add Job Title</a>
                        </div>
                    </div>
                </div>
    }
}

export default JobBoard;



/*<div class="comments">
                <div class="comment">
                    <div class="content">
                    <a class="author">Associate Software Engineer</a>
                    <div class="metadata">
                        <span class="date">from 2020 to present</span>
                    </div>
                    <div class="text">
                        Desription
                    </div>
                    </div>
                </div>
                <div class="comment">
                    <div class="content">
                    <a class="author">Trainee Enginerr</a>
                    <div class="metadata">
                        <span class="date">from 2019 to 2019</span>
                    </div>
                    <div class="text">
                        Desription
                    </div>
                    </div>
                </div>
                <div class="comment">
                    <div class="content">
                    <a class="author">Add Job Title</a>
                    </div>
                </div>
            </div>*/