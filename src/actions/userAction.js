import axios from 'axios'
export const GET_USERS = "GET_USERS"

export function updateUser(newUser) {

	return {type:GET_USERS,payload:{user:newUser}}       

}

export function getUsers () {
	return dispatch => {
		axios.get('https://jsonplaceholder.typicode.com/users/2')
		.then(result =>dispatch(updateUser(result.data.name)))
		.catch(err=>console.log(err))
	}
}