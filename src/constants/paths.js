export const LANDING_PATH = '/';
export const LOGIN_PATH = '/login';
export const LOGOUT_PATH = '/logout';
export const SIGN_UP_PATH = '/signUp';

export const DONATIONS_PATH = '/donations';
export const DONATION_PATH = '/donations/:id';
export const DONATION_NEW_PATH = '/donations/new';
export const DONATION_EDIT_PATH = '/donations/edit/:id';

export const DONORS_PATH = '/donors';
export const DONOR_PATH = '/donors/:id';
export const DONOR_NEW_PATH = '/donors/new';
export const DONOR_EDIT_PATH = '/donors/edit/:id';

export const ITEMS_PATH = '/items';
export const ITEM_PATH = '/items/:id';
export const ITEM_NEW_PATH = '/items/new';
export const ITEM_EDIT_PATH = '/items/edit/:id';

export const LOCATIONS_PATH = '/locations';
export const LOCATION_NEW_PATH = '/locations/new';

export const REQUISITIONS_PATH ='/requisitions';
export const REQUISITION_PATH = '/requisitions/:id';
export const REQUISITION_NEW_PATH = '/requisitions/new';
export const REQUISITION_EDIT_PATH = '/requisitions/edit/:id';

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

export const getDonationPath = (id) => {
    return getPath(DONATION_PATH, id);
};

export const getDonationEditPath = (id) => {
    return getPath(DONATION_EDIT_PATH, id);
};

export const getRequisitionPath = (id) => {
    return getPath(REQUISITIONS_PATH, id);
};
