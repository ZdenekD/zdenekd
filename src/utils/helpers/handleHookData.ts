import isTestEnv from '@/helpers/isTestEnv';

const handleHookData = <D>(data: D | undefined, mock: D) => (isTestEnv ? mock : data);

export default handleHookData;
