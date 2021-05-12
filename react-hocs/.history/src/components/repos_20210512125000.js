import React from 'react';

export const Repos = ({ repos }) => (
    <React.Fragment>
        {repos.map((repo) => (
            <div className="card card mb-3"
        ))}
    </React.Fragment>
)