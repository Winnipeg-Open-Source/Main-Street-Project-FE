const RequireAuth = async (req: any, res: any, next: any) => {
    const user = res.locals.user;

    if (!user) {
        res.status(403);
        res.json('Forbidden');
    } else {
        next();
    }
};

export default RequireAuth;
