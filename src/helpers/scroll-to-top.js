export default () => {
    if (window !== undefined) {
        window.setTimeout(() => window.scrollTo(0, 0));
    }
};
