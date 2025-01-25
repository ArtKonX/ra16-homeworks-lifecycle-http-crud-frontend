import createRequest from "./createRequest";

const apiRequests = (params: IApiRequest) => {

    switch (params.action) {
        case 'getNotes':
            createRequest({
                method: "GET",
                url: `${params.url}/notes`,
                callback: params.callback,
            });
            break

        case 'createNote':
            createRequest({
                method: "POST",
                url: `${params.url}/notes`,
                body: params.data,
                callback: params.callback,
            });
            break

        case 'removeNote':
            createRequest({
                method: "DELETE",
                url: `${params.url}/notes/${params.id}`,
                callback: params.callback,
            });
            break
    }
}

export default apiRequests