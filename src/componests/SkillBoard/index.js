import React from 'react';
import Skill from '../../images/skill.png';

class SkillBoard extends React.Component {

    constructor(props) {
        super(props);
        this.state = { skills: [ ] };
        this.defaultSkill = { image: Skill, domain: 'edit', tools: []};
    }

    addSkill = () => {
        this.setState({ skills: this.state.skills.concat(this.defaultSkill)});
    }

    renderDomainList = () => {
        return this.state.skills.map((item,index) => {
            return <a key={index} class="item" onClick={ this.addSkill }>
                <i class="edit icon"></i>
                Domain
            </a>
        });
    }

    renderAddSkill() {
        if(this.state.skills.length < 5) {
            return (<a class="item" onClick={ this.addSkill }>
            <i class="plus icon"></i>
            Skill
        </a>);
        }
    }

    render() {
        return (
            <div class="ui vertical labeled icon menu">
                {this.renderDomainList()}
                {this.renderAddSkill()}
            </div>
        );
    }
}

export default SkillBoard;