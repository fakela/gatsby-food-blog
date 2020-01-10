import React from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import Container from '../container';

export default class IndexPage extends React.Component {
    state = {
        name: null,
        email: null,
    }

    _handleChange = (e) => {
        console.log({
            [`${e.target.name}`]: e.target.value,
        });
        this.setState({
            [`${e.target.name}`]: e.target.value,
        });
    }

    _handleSubmit = (e) => {
        e.preventDefault();

        console.log('submit', this.state);

        addToMailchimp(this.state.email, this.state)
            .then(({ msg, result }) => {
                console.log('msg', `${result}: ${msg}`);

                if (result !== 'success') {
                    throw msg;
                }
                alert(msg);
            })
            .catch((err) => {
                console.log('err', err);
                alert(err);
            });
    }

    render() {
        return (
          <Container>
            <div>
                <h1>Subscribe</h1>

                <div>
                    <form onSubmit={this._handleSubmit}>
                      <div style={{ padding: '20px' }}>
                        <input
                            type="text"
                            onChange={this._handleChange}
                            placeholder="name"
                            name="name"
                        />
                         </div>
                         <div style={{ padding: '20px' }}>
                        <input
                            type="email"
                            onChange={this._handleChange}
                            placeholder="email"
                            name="email"
                        />
                        </div>
                        <div style={{ padding: '20px' }}>
                <button type='submit'>Subscribe!</button>
              </div>
                    </form>
                </div>
            </div>
            </Container>
        );
    }
}