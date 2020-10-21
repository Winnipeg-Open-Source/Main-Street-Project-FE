const getMockUser = (uid) => ({
    uid,
    email: 'elon@musk.com',
});

export const mockUser = getMockUser(1);

export const mockUsers = [getMockUser(1), getMockUser(2), getMockUser(3)];
