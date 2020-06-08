import useDonations from 'hooks/useDonations';

function useDonation (id) {
    const { donations, ...rest } = useDonations();
    const donation = donations && donations.find(donation => donation.id == id);

    return {
        ...rest,
        donation,
    };
}

export default useDonation;
