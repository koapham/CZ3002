import React, { Component } from 'react'
import "./ModuleList.css";

class ModuleList extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <ul>
                    <li>
                        <a href={"#"}>
                            CZ3002
                        </a>
                    </li>
                    <li>CZ3003</li>
                </ul>
            </div>
        );
    }
}

export default ModuleList;