
import { gql } from '@apollo/client';

export const GET_USER_PROFILE = gql`
    query GetUserProfile($userId: ID!) {
        user(id: $userId){
            name
            email
            address{
                street
            }
            phone
            website
            company{
                name
            }
        }
    }
`;

export const GET_USER_POSTS = gql`
    query GetUserPosts($userId: ID!) {
        user(id: $userId) {
            posts{
                data{
                    id
                    title
                    body
                }
            }
            
        }
    }
`;

export const CREATE_POST = gql`
    mutation CreatePost($title: String!, $content: String!) {
        createPost(title: $title, content: $content) {
            id
            title
            content
        }
    }
`;

export const UPDATE_POST = gql`
    mutation UpdatePost($id: ID!, $title: String!, $content: String!) {
        updatePost(id: $id, title: $title, content: $content) {
            id
            title
            content
        }
    }
`;

export const GET_USER_ALBUMS = gql`
    query GetUserAlbums($userId: ID!) {
        user(id: $userId) {
            albums {
                data {
                    id
                    title
                    user
                }
            }
        }
    }
`;

export const GET_USER_TODOS = gql`
    query GetUserTodos($userId: ID!) {
        user(id: $userId) {
            todos {
                id
                title
                completed
            }
        }
    }
`;