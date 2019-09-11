export const GET_SEL_DETAIL = 'GET_SEL_DETAIL';
export const BUY_THIS_PET = 'BUY_THIS_PET';
export const CREATE_BOOK = ' CREATE_BOOK ';
export const CREATE_PET = ' CREATE_PET ';

export const createBook = (book) => ({
    // Unique identifier
    type: CREATE_BOOK,
    // Payload
    payload: book
});

export const createPet = (newpetdetail) => ({
    // Unique identifier
    type: CREATE_PET,
    // Payload
    payload: newpetdetail
});

export const getSelDetail = (val) => ({
    type : GET_SEL_DETAIL,
    payload : val
});

export const buyThisPet = (indexId,currUserId) => ({
    type : BUY_THIS_PET,
    payload : indexId,
    currUserId : currUserId
});

