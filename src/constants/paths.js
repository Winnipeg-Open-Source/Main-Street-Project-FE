export const LANDING_PATH = '/';
export const DONORS_PATH = '/donors';
export const DONOR_PATH = '/donors/:id';
export const DONOR_NEW_PATH = '/donors/new';
export const DONOR_EDIT_PATH = '/donors/edit/:id';
export const PRODUCTS_PATH = '/products';
export const PRODUCT_PATH = '/products/:id';
export const PRODUCTS_CREATE_PATH = '/products/create';
export const PRODUCTS_EDIT_PATH = '/products/edit/:id';
export const DONATION_PATH = '/donations/:id';
export const DONATIONS_NEW_PATH = '/donations/new';
export const REQUISITIONS_PATH ='/requisitions';
export const REQUISITION_NEW_PATH = '/requisitions/new';

const getPath = (path, id) => {
    return id
        ? path.includes(':id')
            ? path.replace(':id', id)
            : `${path}/${id}`
        : path;
};

export const getDonorPath = (id) => {
    return getPath(DONORS_PATH, id);
};

export const getDonorEditPath = (id) => {
    return getPath(DONOR_EDIT_PATH, id);
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

export const getDonationPath = (id) => {
    return getPath(DONATION_PATH, id);
};
