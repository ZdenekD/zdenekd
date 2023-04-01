import methods from './utils/methods';
import type {
    IData,
    IOptions,
    IResponse
} from './types';

type IGraph = <R>(query: string, options?: IOptions) => Promise<IResponse<IData<R, undefined>>>

const graph: IGraph = async (query, options) => {
    const response = await fetch(process.env.HYGRAPH_PROJECT_API || '', methods.query(query, options));

    return {
        ok: response.ok,
        status: response.status,
        data: await response.json(),
    };
};

export default graph;
