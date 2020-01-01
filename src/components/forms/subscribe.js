import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Container from '../container';


// Just like on the server, we need to define what our data model
// looks like, this needs to match our server or there will be errors
const SUBSCRIBE_MUTATION = gql`
  mutation SignUp(
    $firstName: String!
    $lastName: String!
    $email: String!
  ) {
    signUp(
      firstName: $firstName
      lastName: $lastName
      email: $email
    ) {
      result
    }
  }
`

const SubscribeForm = () => {
  // These state variables will hold the form values when it is filled out
  const [firstNameValue, setFirstNameValue] = useState('')
  const [lastNameValue, setLastNameValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  return (
    <Container>
      
      <h1>Subscribe<span role="img" aria-label="guitar">
      👍
</span> </h1>
      <p>Please fill out the form below:</p>

      {/* Wrap the whole form in a Mutation component */}
      <Mutation mutation={SUBSCRIBE_MUTATION}>
        {/*
        We are passing in the signUp mutation as defined earlier
        and passing the values of loading, error, and data in respect
        to that mutation.
      */}
        {(signUp, { loading, error, data }) => (
          <React.Fragment>
            <form
              onSubmit={async (event) => {
                // when the form is submitted, we will run the signUp function passed down
                // the Mutation component, and pass it the form values from the state variables
                event.preventDefault()
                signUp({
                  variables: {
                    firstName: firstNameValue,
                    lastName: lastNameValue,
                    email: emailValue,
                  },
                })
              }}
            >
              {/* Here we create a standard form using our state variables as the field values */}
              <div style={{ padding: '20px' }}>
                <label htmlFor='firstNameInput'>First Name: </label>
                <input
                  id='firstNameInput'
                  value={firstNameValue}
                  onChange={(event) => {
                    setFirstNameValue(event.target.value)
                  }}
                />
              </div>
              <div style={{ padding: '20px' }}>
                <label htmlFor='lastNameInput'>Last Name: </label>
                <input
                  id='lastNameInput'
                  value={lastNameValue}
                  onChange={(event) => {
                    setLastNameValue(event.target.value)
                  }}
                />
              </div>
              <div style={{ padding: '20px' }}>
                <label htmlFor='emailInput'>Email Address: </label>
                <input
                  id='emailInput'
                  value={emailValue}
                  onChange={(event) => {
                    setEmailValue(event.target.value)
                  }}
                />
              </div>
              <div style={{ padding: '20px' }}>
                <button type='submit'>Subscribe!</button>
              </div>
            </form>
            {/* Lastly, we add some information if the request is loading, errored, or completed */}
            <div style={{ padding: '20px' }}>
              {loading && <p>Loading...</p>}
              {error && (
                <p>
                  An unknown error has occured, please try again
                  later...
                </p>
              )}
              {data && <p>{data.signUp.result}</p>}
            </div>
          </React.Fragment>
        )}
      </Mutation>

      <Link to='/'>Go back to the homepage </Link>
    </Container>
  )
}

export default SubscribeForm