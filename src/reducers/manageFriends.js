export function manageFriends(state = {friends: []}, action){

    switch (action.type) {
        case "ADD_FRIEND":
            return {...state, friends: [...state.friends, action.friend]}
        case "REMOVE_FRIEND":
            const remover = state.friends.findIndex(friend => friend.id === action.id)
            return {...state, friends: [...state.friends.slice(0, remover),
                ...state.friends.slice(remover + 1)]}
            default: 
                return state;
    }
}
