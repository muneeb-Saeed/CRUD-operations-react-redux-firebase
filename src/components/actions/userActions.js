export const ADD_ONE = 'Add_data';


// Actions to add data
export function addData(title,description,published,submitted){
    return {
        type:ADD_ONE,
        title:title,
        description:description,
        published:published,
        submitted:submitted     

    }
}
