const isSuccessfulResponse = (status: number) => status >= 200 && status < 300;

export default isSuccessfulResponse;
