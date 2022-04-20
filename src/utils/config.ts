const API = typeof window !== 'undefined'
    ? `${window.location.origin}${process.env.NEXT_PUBLIC_API}`
    : process.env.NEXT_PUBLIC_API;

export default API;
