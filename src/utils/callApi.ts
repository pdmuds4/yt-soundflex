import axios, { AxiosError } from 'axios';

export const callAPI = async <ReqT>(
    api_key: string,
    method: 'GET' | 'POST',
    endpoint: string,
    data?: ReqT,
) => {
    try {
        const response = await axios({
                method: method,
                url: endpoint,
                data: data,
                headers: {
                    'Allow-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                    'X-API-Key': api_key
                }
            }
        );

        return response.data;
    } catch (e) {
        if (e instanceof AxiosError) throw new Error(e.response?.data.message);
        if (e instanceof Error) throw new Error(e.message);
    }
}