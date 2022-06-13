const API = typeof window !== 'undefined'
    ? `${window.location.origin}${process.env.NEXT_PUBLIC_API}`
    : `https://${process.env.VERCEL_URL}${process.env.NEXT_PUBLIC_API}`;

export default API;
