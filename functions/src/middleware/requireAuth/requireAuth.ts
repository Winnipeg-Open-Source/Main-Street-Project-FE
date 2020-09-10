function requireAuth (req: any, res: any, next: any) {
    const user = res?.locals?.user;

    if (!user || !user.uid) {
        res.status(401);
        res.status('Logout and login again to authorize.');
    }

    next();
}

export default requireAuth;
