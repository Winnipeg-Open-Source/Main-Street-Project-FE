export const LANDING_PATH = '/';
export const DONORS_PATH = '/donors';
export const DONOR_PATH = '/donors/:id';
export const PRODUCTS_PATH = '/products';
export const PRODUCT_PATH = '/products/:id';
export const PRODUCTS_CREATE_PATH = '/products/create';
export const PRODUCTS_EDIT_PATH = '/products/edit/:id';
export const DONATIONS_NEW_PATH = '/donations/new';
export const REQUISITION_NEW_PATH = '/requisition/new';

const getPath = (path, id) => {
    return id ? `${path}/${id}` : path;
};

export const getDonorPath = (id) => {
    return getPath(DONORS_PATH, id);
};

export const getProductPath = (id) => {
    return getPath(PRODUCTS_PATH, id);
};

export const getProductCreatePath = (id) => {
    return getPath(PRODUCTS_CREATE_PATH, id);
};

export const getProductEditPath = (id) => {
    return getPath(PRODUCTS_EDIT_PATH, id);
};