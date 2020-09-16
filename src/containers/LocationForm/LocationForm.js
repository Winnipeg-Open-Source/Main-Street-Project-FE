import React from 'react';
import LocationFormComponent from 'components/LocationForm';
import useForm from 'hooks/useForm';
import useLocations from 'hooks/context/useLocations';
import useRoute from 'hooks/useRoute';
import useSaveResource from 'hooks/useSaveResource';
import { LOCATIONS_API_PATH } from 'constants/api';
import { LOCATIONS_PATH } from 'constants/paths';

const initialState = {
    type: null,
    name: null,
    description: null,
    address: null,
};

function LocationForm () {
    const { onSaveLocation } = useLocations();
    const { state, onChange } = useForm(initialState);
    const goToLocations = useRoute(LOCATIONS_PATH);

    const { handleSave } = useSaveResource(LOCATIONS_API_PATH, LOCATIONS_PATH, onSaveLocation);
    const onSaveClick = () => handleSave(state);

    return (
        <LocationFormComponent
            {...state}
            onChange={onChange}
            onSaveClick={onSaveClick}
            onCancelClick={goToLocations}
        />
    );
}

LocationForm.displayName = 'LocationForm';

export default LocationForm;
