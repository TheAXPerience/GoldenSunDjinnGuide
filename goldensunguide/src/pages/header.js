import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/goldensun">Golden Sun</Link>
                <Link to="/thelostage">The Lost Age</Link>
                <Link to="/darkdawn">Dark Dawn</Link>
            </nav>
        </header>
    );
}

export const Footer = () => {
    return (
        <footer>
            <p>
                <i>Golden Sun</i> is trademarked and copyrighted by Nintendo 2001-2023.
            </p>
            <p>
                For more information about the <i>Golden Sun</i> series, visit <Link to="https://goldensunwiki.net">Golden Sun Universe</Link>.
            </p>
            <p>
                Djinn sprites for <i>Dark Dawn</i> are sourced from <Link to="https://www.goldensun-syndicate.net/dd/djinn/">Golden Sun Syndicate</Link>.
            </p>
            <p>
                All other sprites are sourced from <Link to="https://www.spriters-resource.com">Spriter's Resource</Link>.
            </p>
        </footer>
    );
}
