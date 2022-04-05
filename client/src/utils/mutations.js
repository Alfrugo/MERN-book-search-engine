import { gql } from '@apollo/client';

export const ADD_USER = gql`

    mutation addUser ($username: String, $email: String, $password: String){
        addUser(username: $username, email: $email, password: $password) {
            token
            user{
                _id
                username
                email
                password
            }
        }
    }
`
export const LOGIN_USER = gql`
    mutation loginUser ($email: String, $password: String){
        loginUser(email: $email, password: $password) {
            token
            user{
                _id
                email
                password
                username
            }
        }
    }
    `
    export const SAVE_BOOK = gql`

    mutation saveBook ($bookdata: BookInput){
        saveBook(bookData: $bookdata){
            _id
            email
            username
            savedBooks { 
                bookId
                authors
                description
                title
                image
                link
            }
        }
    }
    `

    export const REMOVE_BOOK = gql`

    mutation removeBook ($bookdId: ID){
        removeBook(bookId: $bookId){
            _id
            email
            username
            savedBooks { 
                bookId
                authors
                description
                title
                image
                link
            }
        }
    }
    `




// DONE LOGIN_USER will execute the loginUser mutation set up using Apollo Server.
    // login (email: String, password: String): Auth

// SAVE_BOOK will execute the saveBook mutation.
    // saveBook (bookData: BookInput User


// REMOVE_BOOK will execute the removeBook mutation.

