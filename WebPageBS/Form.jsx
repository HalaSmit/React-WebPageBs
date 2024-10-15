import React, { } from 'react';

export default function NewsletterForm() {

    return (
        <div className="container-fluid mt-3 py-5" style={{backgroundColor: "#F1F1F0"}}>
            <div className="text-center">
                <h2 className="mb-4">Sign Up for Our Newsletter</h2>
                <form className="d-flex flex-column align-items-center">
                    <input
                        type="email"
                        className="form-control mb-3"
                        placeholder="Your Email Address"
                        style={{ width: '400px' }}
                    />
                    <button type="submit" className="btn btn-dark" style={{ width: '400px' }}>
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}
