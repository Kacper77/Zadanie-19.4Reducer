export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';


function AddComment() {
    return {
        type: 'ADD_COMMENT'
    }
}

function editComment() {
    return {
        type: 'EDIT_COMMENT'
    }
}

function removeComment() {
    return {
        type: 'REMOVE_COMMENT'
    }
}

function thumbUpComment() {
    return {
        type: 'THUMB_UP_COMMENT'
    }
}

function thumbDownComment() {
    return {
        type: 'THUMB_DOWN_COMMENT'
    }
}