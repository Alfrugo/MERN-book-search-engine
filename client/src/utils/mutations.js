import { gql } from '@apollo/client';

export const ADD_USER = gql`

    mutation addUser ($username: String, $email: String, $password: String){
        addUser(username: $username, email: $email, password: $password) {
            token
            user{
                _id
                username
            
            }
        }
    }
`
export const LOGIN_USER = gql`
    mutation login ($email: String, $password: String){
        login (email: $email, password: $password) {
            token
            user{
                _id
                username

            }
        }
    }
    `
    export const SAVE_BOOK = gql`

    mutation saveBook ($bookData: BookInput){
        saveBook(bookData: $bookData){
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

    mutation removeBook ($bookId: ID){
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

