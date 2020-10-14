import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div className={'bg-dark header d-print-none'}>
            <nav className="container navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Проекты</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/user">Profile</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/login">login</a>
                        </li>
                    </ul>
                </div>
            </nav>
                </div>
        );
    }
}

export default Header;